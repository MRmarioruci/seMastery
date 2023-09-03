import mainAnimation from '../animations/main.json';
import Lottie from 'react-lottie-player'
import {menu} from './utils/NavItems';
import contactAnimation from '../animations/contact.json';

function Main() {
	return (
		<>
			<div className="main">
				<div className="main__header">
					<div className="main__header-left">
						<div>
							<h1><span className="text__primary">S</span>oftware</h1>
							<h1><span className="text__primary">E</span>ngineering</h1>
							<h1>Mastery</h1>
						</div>
						<div className="mtop--10 font__18 text__bold">
							Quick answers for technology specific interview questions.
						</div>
						<div className="mtop--10 text__muted">
							Brush up on your engineering skills depending on the language or framework you are preparing for.
							Ace your interviews with our educational content to help you quickly brush up on your learnings.
						</div>
					</div>
					<div className="main__header-right">
						<Lottie
							loop
							animationData={mainAnimation}
							play
							className="main__header-rightLottie"
						/>
					</div>
				</div>
				<div className="main__contents">
					<div className="btn btn__primary-soft text__normal btn__rounded btn__md main__contents-label">Interview Cheatsheets</div>
					<div className="text__center text__muted">
						Interview specific cheatsheets. Concepts and general interview material to brush up before the big day.	
					</div>
					<div className="main__contents-menu">
						{menu.map((item, index) => {
							return (
								<a href={`/${item.href}`} className="card main__contents-card" key={`menu__${index}`}>
									<b className="text__primary font__10">{'/'}</b> {item.title}
								</a>
							)
						})}
					</div>
					<div className="text__center">
						<button className="btn btn__secondary text__normal btn__rounded">
							<span className="material-icons">
								add
							</span>
							Suggest an addition
						</button>
					</div>
				</div>
				<div className="main__contents">
					<div className="btn btn__primary-soft text__normal btn__rounded btn__md main__contents-label">Syntax Cheatsheets</div>
					<div className="text__center text__muted">
						Syntax specific cheatsheets for languages and technologies. Useful for quick reference when coding.
					</div>
					<div className="main__contents-menu">
						{menu.map((item, index) => {
							return (
								<a href={`/${item.href}`} className="card main__contents-card" key={`menu__${index}`}>
									<b className="text__primary font__10">{'/'}</b> {item.title}
								</a>
							)
						})}
					</div>
					<div className="text__center">
						<button className="btn btn__secondary text__normal btn__rounded">
							<span className="material-icons">
								add
							</span>
							Suggest an addition
						</button>
					</div>
				</div>
				<div className="main__contents">
					<div className="text__center">
						<Lottie
							loop
							animationData={contactAnimation}
							play
							style={{ width: '350px', height: '350px', margin: 'auto' }}
						/>
						<h4>Join our newsletter</h4>
						<div>Be the first to know about our latest material.</div>
						<div className="input__wrap mtop--10 contact__email">
							<input type="text" placeholder="Enter your email here..."/>
						</div>
					</div>
				</div>
				{/* <div className="main__contents">
					<div className="btn btn__primary-soft text__normal btn__rounded btn__md main__contents-label">Resources</div>
					<div className="main__contents-menu">
						
					</div>
					<div className="text__center">
						<button className="btn btn__secondary text__normal btn__rounded">
							<span className="material-icons">
								add
							</span>
							Suggest an addition
						</button>
					</div>
				</div>
				<div className="main__contents">
					<div className="btn btn__primary-soft text__normal btn__rounded btn__md main__contents-label">Leetcode</div>
					<div className="main__contents-menu">

					</div>
					<div className="text__center">
						<button className="btn btn__secondary text__normal btn__rounded">
							<span className="material-icons">
								add
							</span>
							Suggest an addition
						</button>
					</div>
				</div> */}
			</div>
		</>
	)
}

export default Main