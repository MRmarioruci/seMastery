require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');
const utils = require('./utils');

const uri = "mongodb+srv://semastery:6AauJId93sJmINSe@clusterse.1xceupq.mongodb.net/?retryWrites=true&w=majority";
class Database{
	constructor() {
		this.connection = null;
		this.client = new MongoClient(uri, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			}
		});
	}
	async connect(){
		await this.client.connect();
		return this.client
	}
}
module.exports = Database;