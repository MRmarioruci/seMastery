const printFunction = () => {
	return new Promise( (resolve, reject) => {
		setTimeout(resolve, 2000);
		setTimeout(reject, 1000);
	})
}
printFunction()
.then(() => console.log('resolved'))
.catch(() => console.log('rejected'));
