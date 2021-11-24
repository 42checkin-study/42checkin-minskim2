import express, { Request, Response, NextFunction } from 'express';
import { sequelize } from '../models/index';

const app = express();

app.use(express.json());
app.use((req:Request,res:Response,next:NextFunction) => {
    console.log(`Request Occur! ${req.method}, ${req.url}`);
    next();
})


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
});

app.listen('1234', async () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  - http://172.19.158.253:1234
  ################################################
`);
	await sequelize.authenticate()
	.then(async () => {
		console.log("connection success");
	})
	.catch((e:Error) => {
		console.log('TT : ', e);
	});
});
