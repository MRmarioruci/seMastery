//import mainAnimation from '../animations/main.json';
//import Lottie from 'react-lottie-player'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { menu } from './utils/NavItems';
import rocketAnimation from '../animations/rocket.json';
import '../scss/pages/Cheatsheets.scss';
import { getCheatsheet } from '../api/Cheatsheetsapi';
import Lottie from 'react-lottie-player';

function Cheatsheet() {
	const { id } = useParams();
	const [cheatsheet, setCheatsheet] = useState(null);
	const [jsonData, setJsonData] = useState([]);
	const [selectedGroup, setSelectedGroup] = useState(null);

	const fetchData = async () => {
		const data = await getCheatsheet(id).then(res => res.json());
		if(data.status === 'SUCCESS'){
			setJsonData(data.data);
			console.log(data.data);
		}else{
			throw new Error('Could not retrieve data');
		}
	};
	const goBack = () => {
		window.history.back();
	}

	useEffect(() => {
		if(!id) return;
		const c = menu.find( item => item.href === id);
		if(!c) throw new Error(`Could not find the requested ${id} menu item`);
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
						<h3>{cheatsheet.pageTitle}</h3>
						<h5 className='text__muted'>{cheatsheet.pageSubtitle}</h5>
						<div className='flex flex__row'>
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
							</div>
						</div>
					</div>
				</div>
			}
			{jsonData.length > 0 &&
				<div className='cheatsheets__menu'>
					{/* <div className={`btn ${selectedGroup === 'board' ? 'btn__primary-soft' : 'btn__transparent'}`} onClick={() => setSelectedGroup('board')}>
						My Board
					</div>
					<div className="separator">
					</div> */}
					{jsonData?.map((group, idx) => {
						return (
							<div className={`btn ${selectedGroup?.title === group.title ? 'btn__primary-soft' : 'btn__transparent'} btn__rounded`} key={`group_${idx}`} onClick={() => setSelectedGroup(group)}>
								{group.title}
							</div>
						)
					})}
				</div>
			}
			{ selectedGroup &&
				<div className='cheatsheets__board'>
					{selectedGroup?.docs?.map((item, idx) => {
						return (
							<div className={`card cheatsheets__board-item`} key={`group_item_${idx}`}>
								<div className="cheatsheets__board-itemHeader">
									<div className="cheatsheets__board-itemHeaderControl">
										<input type="checkbox"/>
									</div>
									<code className="text__bold font__16 cheatsheets__board-itemHeaderText">{item?.title}</code>
								</div>
								<div className="cheatsheets__board-itemBody">
									{item?.description}
									<div className="cheatsheets__board-itemBodyImage">
										{item?.image}
									</div>
									<div className="cheatsheets__board-itemBodyCode">
										{item?.code}
									</div>
								</div>
								<div className="cheatsheets__board-itemFooter">
									<button className="btn btn__secondary text__muted btn__md">
										<span className="material-icons">
											favorite_border
										</span>
									</button>
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

export default Cheatsheet