//import mainAnimation from '../animations/main.json';
//import Lottie from 'react-lottie-player'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { menu } from './utils/NavItems';
import rocketAnimation from '../animations/rocket.json';
import '../scss/pages/Cheatsheets.scss';
import { getCheatsheet } from '../api/Cheatsheetsapi';
import Lottie from 'react-lottie-player';
import { Highlight } from "prism-react-renderer";
import { Cheatsheet, CheatsheetDoc, CheatSheetGroup } from '../types/index';

function CheatsheetComponent() {
	const { id } = useParams();
	const [cheatsheet, setCheatsheet] = useState<any>(null);
	const [jsonData, setJsonData] = useState<CheatSheetGroup[]>([]);
	const [selectedGroup, setSelectedGroup] = useState<CheatSheetGroup | null>(null);
	const [title, setTitle] = useState<string>('');
	const [icon, setIcon] = useState<string>('');

	const fetchData = async () => {
		const data: CheatsheetDoc = await getCheatsheet(id || '');
		if(!data) return;

		setIcon(data.icon);
		setTitle(data?.title);
		setJsonData(data.groups);
	};
	const goBack = () => {
		window.history.back();
	}
	const createMarkup = (htmlContent:string) => {
		return { __html: htmlContent };
	};

	useEffect(() => {
		if(!id) return;
		
		const c = menu.find( item => item.href === id);
		if(!c) throw new Error(`Could not find the requested ${id} menu item`);
		console.log(c);

		setCheatsheet(c);
		fetchData();
	}, [id])

	useEffect(() => {
		if(!selectedGroup){
			setSelectedGroup(jsonData?.[0]);
		}
	}, [jsonData, selectedGroup])

	return (
		<div className="cheatsheets">
			{cheatsheet &&
				<div className={`cheatsheet__${cheatsheet.href}`}>
					<div className="cheatsheet__inner">
						{/* <h3>{cheatsheet.pageTitle}</h3>
						<h5 className='text__muted'>{cheatsheet.pageSubtitle}</h5> */}
						<div className="flex flex__row">
							{icon && <img src={icon} width={30}/>}
							{title && <h3>{title}</h3>}
						</div>
						<div className='flex flex__row mtop--20'>
							<div>
								<a className="btn btn__secondary btn__md" onClick={goBack}>
									<span className="material-icons font__20">
										arrow_back_ios
									</span>
									Back
								</a>
								{/* <div className="btn btn__inverted btn__md text__secondary">
									<span className="material-icons font__20">
										download
									</span>
									Download
								</div> */}
							</div>
							<div className="float--right">
								<a className="btn btn__inverted btn__md" href="https://github.com/MRmarioruci/seMastery" target='_blank'>
									<span className="material-icons font__20 mright--5">
										chat_bubble_outline
									</span>
									Suggest Changes
								</a>
								{/* <div className="btn btn__primary btn__md" href="https://github.com/MRmarioruci/seMastery" target='_blank'>
									<span className="material-icons font__20 mright--5">
										add
									</span>
									Add cheatsheet
								</div> */}
							</div>
						</div>
					</div>
				</div>
			}
			{jsonData.length > 0 &&
				<div className='cheatsheets__menu tabs'>
					{/* <div className={`btn ${selectedGroup === 'board' ? 'btn__primary-soft' : 'btn__transparent'}`} onClick={() => setSelectedGroup('board')}>
						My Board
					</div>
					<div className="separator">
					</div> */}
					{jsonData?.map((group, idx) => {
						return (
							<div className={`tabs__item ${selectedGroup?.title === group.title && 'tabs__item-active'} `} key={`group_${idx}`} onClick={() => setSelectedGroup(group)}>
								{group.title}
							</div>
						)
					})}
				</div>
			}
			{ selectedGroup &&
				<div className='cheatsheets__board'>
					{selectedGroup?.docs?.map((item:Cheatsheet, idx:number) => {
						return (
							<div className={`card cheatsheets__board-item`} key={`group_item_${idx}`}>
								<div className="cheatsheets__board-itemHeader">
									{/* <div className="cheatsheets__board-itemHeaderControl">
										<input type="checkbox"/>
									</div> */}
									<code className="text__bold font__16 cheatsheets__board-itemHeaderText">{item?.title}</code>
								</div>
								<div className="cheatsheets__board-itemBody">
									<div className="text__muted" dangerouslySetInnerHTML={createMarkup(item.description)}></div>
									{item.image &&
										<div className="cheatsheets__board-itemBodyImage">
											{item.image}
										</div>
									}
									{item.code && 
										<pre className="cheatsheets__board-itemBodyCode">
											<Highlight
												code={item.code}
												language="tsx"
											>
												{({ className, style, tokens, getLineProps, getTokenProps }) => (
													<pre style={style} className="cheatsheets__board-itemBodyCodeInner">
														{tokens.map((line, i) => (
														<div key={i} {...getLineProps({ line })}>
															{line.map((token, key) => (
																<span key={key} {...getTokenProps({ token })} />
															))}
														</div>
														))}
													</pre>
												)}
											</Highlight>
										</pre>
									}
									
								</div>
								<div className="cheatsheets__board-itemFooter">
									{/* <button className="btn btn__secondary text__muted btn__md">
										<span className="material-icons">
											favorite_border
										</span>
									</button> */}
								</div>
							</div>
						)
					})}
				</div>
			}
			{jsonData.length === 0 &&
				<div className="text__center">
					<Lottie
						loop
						animationData={rocketAnimation}
						play
						style={{ width: '250px', height: '250px', margin: 'auto' }}
					/>
					<h4>Cheatsheet under development</h4>
					<h5 className="text__muted">Please be patient my lord.</h5>
				</div>
			}
		</div>
	)
}

export default CheatsheetComponent