import express, {Application, Request, Response, NextFunction} from 'express';

let users = [
	{
		id : '1',
		username : 'aaa',
		type : 'IN',
		card_no : 10,
	},
];

const app:Application  = express();

app.use(express.json());
//get /
//get /?username=:username
app.get('/', (req:Request, res:Response, next:NextFunction)=> {
	const username = req.query.username;
	const data = username ? users.filter(user => user.username === username) : users;
	res.status(200).json(data);
})

//get /:id
app.get('/:id', (req:Request, res:Response, next:NextFunction) => {
	const id = req.params.id;
	const user = users.find(user => user.id === id);
	if (user){
		res.status(200).json(user);
	} else {
		res.status(404).json({ message: `user id(${id}) not found`});
	}
})
//post /
app.post('/', (req:Request, res:Response, next:NextFunction)=> {
	const {id ,username, type, card_no} = req.body;
	const user = {
		id,
		username,
		type,
		card_no,
	};
	users = [...users, user];
	res.status(201).json(user);
	console.log(user);
})

//put /:id
app.put('/:id', (req:Request, res:Response, next:NextFunction)=> {
	const id = req.params.id;
	const type = req.body.type;
	const user = users.find(user=> user.id === id);
	if (user){
		user.type = type;
		res.status(200).json(user);
	}else{
		res.status(404).json({message: `User id(${id}) not found`});
	}
})
//delete /:id
app.delete('/:id', (req:Request, res:Response, next:NextFunction)=> {
	const id = req.params.id;
	users = users.filter(user => user.id !== id);
	res.status(204).send('Delete /')
})

app.use((req:Request, res:Response, next:NextFunction)=>{
	res.status(404).send('Not available');
})

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
	console.error(err);
	res.status(500).send('Error')
})

app.listen(8080, ()=>{
	console.log('Server running');
})
