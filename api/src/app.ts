import express, { Request, Response } from 'express';
import cors from 'cors';
import { auth } from 'express-oauth2-jwt-bearer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors()); // Access-Control-Allow-Origin: *

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  tokenSigningAlg: 'RS256',
})

app.get('/api/v1/test', checkJwt, (req: Request, res: Response) => {
  res.json({"message": "Hello from the backend", user: req.auth });
})

export default app;
