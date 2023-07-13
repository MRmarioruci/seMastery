const BASE = `${window.location.protocol}//${window.location.hostname}:5000/`;
const getCheatsheet = (id) => {
	return fetch("http://127.0.0.1:5000/getCheatsheet", {
		method: "POST",
		body: JSON.stringify({
			id: id
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
}
export{
	getCheatsheet
}