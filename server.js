import express from 'express';
import user from './router/user';
import dotenv from 'dotenv';
import verifyToken from './middleware/verifyToken';
import { verify } from 'crypto';

dotenv.config();

const app = express()

app.use(express.json())

app.use('/api/v1', user);

app.listen(3000)
console.log('app running on port ', 3000);