import express from 'express'
import user from '../controller/user'
import validate from '../middleware/auth'


const route = express.Router();
route.post('/user',validate.uservalidation,user.create);
route.post('/signin', user.signin);
route.post('/createnewadd',validate.useraddvalidation, user.createnewadd);
route.get('/getAll', user.getAll);
route.get('/getspecific', user.getspecific)
export default route;