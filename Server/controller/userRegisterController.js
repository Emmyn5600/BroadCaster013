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
       return res.status(200).send({
          status: 200,
          message: "User created successfully",
          data: {
            token,
            newUser
          }
       });
      }
       return res.status(401).send({
         status:401,
         error:"email already exist"
      })
   }
 signin = (req, res) =>{
    const find = model.findbyEmail(req.body.email)
    if(!find){
       return res.status(401).send({
          status: 401,
          error: "user doesn't exist"
       })
    }
    if(find.email === req.body.email && find.password === req.body.password){
      const token = help.generateToken(find.id, find.email);
       return res.status(200).send({ 
          status: 200,
          message: "User is successfully logged in",
          data: {
             token,
              find
          }
       });
    }
    return res.status(401).send({
      status: 401,
      error: "error occured"
  })
 }
 
}
export default new Register();
