import express from 'express';
import user from './router/userRegisterRoute';
import UserEntry from './router/userEntryRoute';
import dotenv from 'dotenv';
import morgan from 'morgan'
import bodyParser from 'body-parser';



dotenv.config();

const app = express()

app.use(express.json())
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/api/v1', user);
app.use('/api/v1', UserEntry)

const port = process.env.PORT || 3000;
app.listen(port);
console.log('app running on port ', 3000);

export default app;