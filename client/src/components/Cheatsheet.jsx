//import mainAnimation from '../animations/main.json';
//import Lottie from 'react-lottie-player'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { menu } from './utils/NavItems';
import '../scss/pages/Cheatsheets.scss';

function Cheatsheet() {
	const { id } = useParams();
	const [cheatsheet, setCheatsheet] = useState(null);
	const [jsonData, setJsonData] = useState(null);
	const [selectedGroup, setSelectedGroup] = useState(null);
	const [docs, setDocs] = useState(null);

	const fetchData = async () => {
		try {
			const response = await fetch(`/cheatsheets/${id}.json`);
			const data = await response.json();
			setJsonData(data);
		} catch (error) {
			console.error('Error fetching JSON data:', error);
		}
	};

	useEffect(() => {
		if(!id) return;
		const c = menu.find( item => item.href === id);
		if(!c) throw new Error(`Could not find the requested ${id} menu item`);
		setCheatsheet(c);
		
		fetchData();
	}, [id])

	useEffect(() => {
		if(!selectedGroup){
			setSelectedGroup(jsonData?.groups[0]);
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
								<div className="btn btn__secondary btn__md">
									<span className="material-icons font__20">
										arrow_back_ios
									</span>
									Back
								</div>
								<div className="btn btn__inverted btn__md text__secondary">
									<span className="material-icons font__20">
										download
									</span>
									Download
								</div>
							</div>
							<div className="float--right">
								<div className="btn btn__inverted btn__md">
									<span className="material-icons font__20 mright--5">
										chat_bubble_outline
									</span>
									Suggest Changes
								</div>
							</div>
						</div>
					</div>
				</div>
			}
			<div className='cheatsheets__menu'>
				<div className={`btn btn__transparent`}>
					My Board
				</div>
				<div className="separator">
				</div>
				{jsonData?.groups?.map((group, idx) => {
					return (
						<div className={`btn ${selectedGroup?.title === group.title ? 'btn__primary-soft' : 'btn__transparent'} btn__rounded`} key={`group_${idx}`} onClick={() => setSelectedGroup(group)}>
							{group.title}
						</div>
					)
				} )}
			</div>
			{ selectedGroup &&
				<div className='cheatsheets__board'>
					{selectedGroup?.docs?.map((item, idx) => {
						return (
							<div className={`card cheatsheets__board-item`} key={`group_item_${idx}`}>
								<div className="cheatsheets__board-itemHeader">
									<div className="cheatsheets__board-itemHeaderControl">
										{/* <div className="cheatsheets__board-itemControl"></div>
										<div className="cheatsheets__board-itemControl"></div>
										<div className="cheatsheets__board-itemControl"></div> */}
										<input type="checkbox"/>
									</div>
									{item.title}
								</div>
								<div className="cheatsheets__board-itemBody">
									{item.description}
									<div className="flex flex__row">
										<button className="btn btn__primary-soft btn__sm text__normal">
											/ Ask GPT
										</button>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			}
			
		</div>
	)
}

export default Cheatsheet