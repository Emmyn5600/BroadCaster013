import express from 'express'
import user from '../controller/user'
import validate from '../middleware/auth'
import verify from '../middleware/verifyToken'

const route = express.Router();

route.post('/red-flags',verify.verifyToken, validate.useraddvalidation,  user.createnewadd);
route.post('/auth/signup',validate.uservalidation,user.create);
route.post('/auth/signin', user.signin);
route.get('/red-flags', verify.verifyToken ,user.getAll);
route.get('/red-flag-id/:id', verify.verifyToken, user.getspecific);
route.patch('/red-flag-id/:id', verify.verifyToken, user.update);
route.delete('/red-flag-id/:id', verify.verifyToken, user.delete)

export default route;