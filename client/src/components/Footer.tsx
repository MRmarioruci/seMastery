import React from 'react'
import '../scss/pages/Footer.scss';
import logo from '../logo.png';

function Footer() {
	return (
		<div className="footer">
			<div className='footer__inner text__center'>
				<div className="text__center flex flex__column align--center">
					<a className="flex flex__row justify__center align--center logo__grayscale" href="/">
						<img src={logo} width="35" />
						<div className="text__bold font__25 mtop--10 logo__text">
							<b className="text__primary">SE</b>
							<span className="text__normal">Mastery</span>
						</div>
					</a>
				</div>
				<a href="https://marioruci.com" target='_blank'>
					<code className="btn btn__primary btn__sm">{'<'}by Mario Ruci {'/>'}</code>
				</a>
				<div className="mtop__20">
					A platform for software engineers to find educational material. Best practices, cheatsheets and more.
				</div>
				<div className="text__muted font__13 text__center">
					@copyright semastery.com
				</div>
			</div>
		</div>
	)
}

export default Footer