import express from 'express';
import user from './router/user'
const app = express()

app.use(express.json())

app.use('/api/v1/auth', user);

app.listen(3000)
console.log('app running on port ', 3000);