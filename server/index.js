
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {
	getCheatsheet,
} = require('./core/controller.js');
const Database = require('./core/database');
const MainController = require('./core/controller.js');
const db = new Database();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
	origin: '*',
}));

/* Simple endpoint setup */
/*app.post('/generateQuestions', generateQuestions);
app.post('/saveInterview', saveInterview);
app.post('/getInterviews', getInterviews);
app.post('/getInterview', getInterview);
app.post('/evaluateCandidate', evaluateCandidate);
app.post('/getEvaluation', getEvaluation);
app.post('/getEvaluations', getEvaluations);
app.post('/login', login);
app.post('/register', register);
app.post('/googleLogin', googleLogin);
 */
app.get('/', (req, res) => {
	res.status(200).send('Oh my.. you found me...');
});

const port = process.env.SERVER_PORT || 5000;
const httpServer = require('http').createServer(app);
httpServer.listen(port, async () => {
	const client = await db.connect();
	console.log(`Server running on port ${port}`);
	new MainController(app, client);
});
