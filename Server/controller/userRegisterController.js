import model from '../model/userRegisterModel'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import help from '../helpers/Userhelper'

dotenv.config();

class Register{
   create = (req, res) => {
      const email = model.findbyEmail(req.body.email);
       if(!email){
       const newUser = model.createNewuser(req.body);
       const token = help.generateToken(newUser.id, newUser.email);
       return res.status(201).send({
          status: 201,
          message: "User created successfully",
          data: {
            token,
            newUser
          }
       });
      }
       return res.status(400).send({
         status:400,
         error:"email already exist"
      })
   }
 signin = (req, res) =>{
    const userinfo = model.findbyEmail(req.body.email)
    if(!userinfo){
       return res.status(400).send({
          status: 400,
          error: "user doesn't exist"
       })
    }
    if(userinfo.email === req.body.email && userinfo.password === req.body.password){
      const token = help.generateToken(userinfo.id, userinfo.email);
       return res.status(201).send({ 
          status: 201,
          message: "User is successfully logged in",
          data: {
             token,
             userinfo
          }
       });
    }
    return res.status(400).send({
      status: 400,
      error: "error occured"
  })
 }
 
}
export default new Register();
