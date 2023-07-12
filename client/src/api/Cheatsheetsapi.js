const getCheatsheet = () => {
	return fetch('/api/getCheatsheet')
	.then( res =>  res.json())
	.then( data => {
		console.log(data);
	})
}
export{
	getCheatsheet
}