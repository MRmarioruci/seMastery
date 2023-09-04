//import mainAnimation from '../animations/main.json';
//import Lottie from 'react-lottie-player'
import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { menu } from './utils/NavItems';
import rocketAnimation from '../animations/rocket.json';
import '../scss/pages/Cheatsheets.scss';
import { getCheatsheet } from '../api/Cheatsheetsapi';
import Lottie from 'react-lottie-player';
import CheatsheetItem from './CheatsheetItem';
import CheatsheetItemModal from './CheatsheetItemModal';
import { Cheatsheet, CheatsheetDoc, CheatSheetGroup, ToggleCheatsheetFunction } from '../types/index';
import { hexToRGB } from '../utils/color';

function CheatsheetComponent() {
	const { id } = useParams();
	const [cheatsheet, setCheatsheet] = useState<any>(null);
	const [jsonData, setJsonData] = useState<CheatSheetGroup[]>([]);
	const [selectedGroup, setSelectedGroup] = useState<CheatSheetGroup | null>(null);
	const [title, setTitle] = useState<string>('');
	const [icon, setIcon] = useState<string>('');
	const [showModal, setShowModal] = useState<boolean>(false);
	const [selectedCheatSheet, setSelectedCheatsheet] = useState<null | Cheatsheet>(null);

	const fetchData = useCallback(async () => {
		const data: CheatsheetDoc = await getCheatsheet(id || '');
		if(!data) return;

		setIcon(data.icon);
		setTitle(data?.title);
		setJsonData(data.groups);
		const darkThemeElement = document.querySelector<HTMLElement>('[data-theme="theme-dark"]');
		if (darkThemeElement && data.color) {
			darkThemeElement.style.setProperty('--primary', `#${data.color}`);
			darkThemeElement.style.setProperty('--primary-rgb', hexToRGB(data.color));
		}
	}, [id]);
	const goBack = () => {
		window.history.back();
	}
	const toggleCheatsheet:ToggleCheatsheetFunction = (cheatsheet: Cheatsheet | null) => {
		setShowModal( prev => !prev);
		setSelectedCheatsheet(cheatsheet);
	}
	useEffect(() => {
		if(!id) return;
		
		const c = menu.find( item => item.href === id);
		if(!c) throw new Error(`Could not find the requested ${id} menu item`);

		setCheatsheet(c);
		fetchData();
	}, [id, fetchData])
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
							{icon && <img alt="Icon" src={icon} width={30}/>}
							{title && <h3>{title}</h3>}
						</div>
						<div className='flex flex__row mtop--20'>
							<div>
								<div className="btn btn__secondary btn__md" onClick={goBack}>
									<span className="material-icons font__20">
										arrow_back_ios
									</span>
									Back
								</div>
								{/* <div className="btn btn__inverted btn__md text__secondary">
									<span className="material-icons font__20">
										download
									</span>
									Download
								</div> */}
							</div>
							<div className="float--right">
								<a className="btn btn__inverted btn__md" href="https://github.com/MRmarioruci/seMastery" target='_blank' rel="noreferrer">
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
						return <CheatsheetItem item={item} key={`group_item_${idx}`} toggleCheatsheet={toggleCheatsheet} />
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
			{showModal && <CheatsheetItemModal item={selectedCheatSheet} toggleCheatsheet={toggleCheatsheet} />}
		</div>
	)
}

export default CheatsheetComponent