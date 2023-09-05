import {useEffect, useMemo} from 'react'
import logo from '../logo.png';
import { useCustomContext, ThemeType } from '../contexts/theme-context';

function Nav() {
	const {state, dispatch} = useCustomContext();
	const isLight = useMemo(() => {
		return state.theme === 'theme-light';
	}, [state.theme])
	const switchTheme = () => {
		setAndStoreTheme(isLight? 'theme-dark' : 'theme-light');
	}
	const setAndStoreTheme = (newTheme:ThemeType) => {
		const body = document.querySelector('body')!;
		body.dataset.theme = newTheme;
		localStorage.setItem('theme', newTheme)
		dispatch({type: 'SET_THEME', payload: newTheme})
	}
	useEffect(() => {
		const initialTheme: ThemeType = localStorage.getItem('theme') === 'theme-light' ? 'theme-light' : 'theme-dark';
		setAndStoreTheme(initialTheme);
	}, [])
	return (
		<nav className="nav">
			<div className="nav__inner">
				<a className="flex flex__row justify__center" href="/">
					<img src={logo} width="50" alt="logo" />
					<div className="text__bold font__30 mtop--10 logo__text">
						<b className="text__primary">SE</b>
						<span className="text__normal">Mastery</span>
					</div>
				</a>
				<div className="float--right flex flex__row justify__center">
					{/* <div className="btn btn__primary-soft btn__md">
						Login	
					</div>
					<div className="btn btn__secondary btn__md">
						Register
					</div> */}
					<div onClick={switchTheme} className="justify__center btn">
						{isLight &&
							<span className="material-icons mright__5">
								dark_mode
							</span>
						}
						{!isLight &&
							<span className="material-icons text__primary mleft__5">
								light_mode
							</span>
						}
					</div>
				</div>
			</div>
		</nav>	
	)
}

export default Nav