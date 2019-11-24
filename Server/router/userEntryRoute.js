import express from 'express'
import UserEntry from '../controller/userEntryController'
import validate from '../middleware/auth'
import verify from '../middleware/verifyToken'
import multer from 'multer'

const route = express.Router();


const upload = multer({dest: 'upload/'});
const path = upload.array('images', 4);

route.post('/red-flags', verify.verifyToken, path , UserEntry.createnewadd);
route.get('/red-flags', verify.verifyToken, path , UserEntry.getAll);
route.get('/red-flag-id/:id', verify.verifyToken, UserEntry.getspecific);
route.delete('/red-flag-id/:id', verify.verifyToken, UserEntry.delete);
route.patch('/red-flag-id/Comment/:id', verify.verifyToken, UserEntry.updateComment);
route.patch('/red-flag-id/Location/:id', verify.verifyToken, UserEntry.updateLocation);


export default route;