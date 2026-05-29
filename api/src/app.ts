import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors()); // Access-Control-Allow-Origin: *

app.get('/api/v1/test', (req: Request, res: Response) => {
  res.json({"message": "Hello from the backend"});
})

export default app;
