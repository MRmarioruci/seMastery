const utils = require('./utils');
const actions = require('./actions');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const secretKey = uuidv4();
const expiresIn = '1d';
const jwt = require('jsonwebtoken');

class MainController{
	constructor(app, client){
		this.client = client;
		app.post('/getCheatsheet', this.getCheatsheet);
	}
	getCheatsheet = async (req, res) => {
		utils.log('INFO', 'Getting cheatsheet');
		const {id} = req.body;
		if (!id) {
			utils.log('ERROR', 'Invalid input');
			return res.json(utils.standardResponse('ERROR', 'Invalid input'))
		}
		try {
			const cheatsheets = await actions.getCheatsheet(id, this.client);
			res.json(utils.standardResponse('SUCCESS', cheatsheets))
		} catch (err) {
			utils.log('ERROR', err);
			res.json(utils.standardResponse('ERROR', err?.message || err))
		}
	}
}
module.exports = MainController;