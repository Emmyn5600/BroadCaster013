import express from 'express'
import user from '../controller/user'
import validate from '../middleware/auth'
import verify from '../middleware/verifyToken'

const route = express.Router();

route.post('/user',validate.uservalidation,user.create);
route.post('/signin', user.signin);
route.post('/createnewadd',verify.verifyToken, validate.useraddvalidation,  user.createnewadd);
route.get('/getAll', verify.verifyToken ,user.getAll);
route.get('/getspecific/:id', verify.verifyToken, user.getspecific);
route.delete('/delete/:id', verify.verifyToken, user.delete)

export default route;