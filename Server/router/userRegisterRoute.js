import express from 'express'
import user from '../controller/userRegisterController'
import validate from '../middleware/auth'
import verify from '../middleware/verifyToken'
import multer from 'multer'
import fs from 'fs'

const route = express.Router();

route.post('/auth/signup',validate.uservalidation,user.create);
route.post('/auth/signin', user.signin);

export default route;