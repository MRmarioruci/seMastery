import React from 'react'
import '../scss/pages/Footer.scss';
import logo from '../logo.png';

function Footer() {
	return (
		<div className="footer">
			<div className='footer__inner text__center'>
				<div className="flex flex__row align--center justify__center">
					<a className="flex flex__row justify__center logo__grayscale" href="/">
						<img src={logo} width="35" />
						<div className="text__bold font__25 mtop--10 logo__text">
							<b className="text__primary">SE</b>
							<span className="text__normal">Mastery</span>
						</div>
					</a>
					<div className="mleft--5">
						by 
					</div>
					<code className="btn btn__primary btn__sm">{'<'} Mario Ruci {'/>'}</code>
				</div>
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