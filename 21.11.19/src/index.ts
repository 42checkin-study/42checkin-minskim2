import express from 'express';

class App {
	app: express.Application;

	constructor() {
		this.app = express();
	}
}

const app = new App().app;

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('Hello Typescript');
});

app.get('/api', (req: express.Request, res: express.Response) => {
	res.json(api);
});

app.get('/api/:id', (req: express.Request, res: express.Response) => {
	const id = parseInt(req.params.id, 10);
	// parseInt 는 문자열을 int형으로 바꿔준다. 두번째 인자는 원하는 진수
	if(!id){
	  return res.status(400).json({err: 'Incorrect id'});
	}
	let user = api.filter(user => user.id === id)[0];
	if(!user){
	  return res.status(400).json({err: 'Unknown user'});
	}
	return res.json(user);
});

let api = [
	{
		id: 1,
		name: 'minskim',
		digit: '012-3456-7890'
	},
	{
		id: 2,
		name: 'minskim2',
		digit: '123-4567-8901'
	},
	{
		id: 3,
		name: 'minskim3',
		digit: '234-5678-9012'
	}
]

app.listen(8080, () => {
	console.log('Started server with 8080');
});​
