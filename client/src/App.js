import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/main.scss';
import Main from './components/Main';
import Nav from './components/Nav';
import Cheatsheet from "./components/Cheatsheet";

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route index element={<Main />} />
					<Route path="/:id" element={<Cheatsheet />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
