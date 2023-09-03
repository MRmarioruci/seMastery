/* const { v4: uuidv4 } = require('uuid'); */
const utils = require('./utils');

const getCheatsheet = (id, client) => {
	return new Promise(async (resolve, reject) => {
		const db = client.db("semastery")
		const collection = db.collection(`${id}Cheatsheets`);
		const docs = await collection.find({}).sort({ _id: 1 }).toArray();
		resolve(docs);
	})
}
module.exports = {
	getCheatsheet: getCheatsheet
}