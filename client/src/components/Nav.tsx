import {useEffect, useState} from 'react'
import logo from '../logo.png';

function Nav() {
	const [isLight, setIsLight] = useState(false);
	const switchTheme = () => {
		setTheme(isLight ? 'theme-dark' : 'theme-light');
		setIsLight(!isLight);
	}
	const setTheme = (theme:string) => {
		const body = document.querySelector('body')!;
		body.dataset.theme = theme;
		localStorage.setItem('theme', theme)
	}
	useEffect(() => {
		const theme = localStorage.getItem('theme') || 'theme-dark';
		setTheme(theme);
	}, [])
	return (
		<nav className="nav">
			<div className="nav__inner">
				<a className="flex flex__row justify__center" href="/">
					<img src={logo} width="50" />
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