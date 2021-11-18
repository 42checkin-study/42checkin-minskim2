import express, { Request, Response, NextFunction } from 'express';

const app = express();


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
});

app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  - http://172.19.148.147:1234
  ################################################
`);
});
