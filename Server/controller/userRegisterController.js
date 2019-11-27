import model from '../model/userRegisterModel'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import help from '../helpers/Userhelper'

dotenv.config();

class Register{
   create = (req, res) => {
      const username = model.findbyusername(req.body.username);
      const email = model.findbyEmail(req.body.email);
       if(email){
         return res.status(400).send({
            status:400,
            error:"email already exist"
         })
       }
       if(username){
         return res.status(400).send({
            status:400,
            error:"username already exist"
         })
       }

       const newUser = model.createNewuser(req.body);
       const token = help.generateToken(newUser.id, newUser.email);
       return res.status(201).send({
          status: 201,
          message: "User created successfully",
          data: {
            token,
            firstname: newUser.firstname,
            secondname: newUser.secondname,
            username: newUser.username,
            email: newUser.email,
            phonenumber: newUser.phonenumber,
            password:newUser.password
          }
       });
   }
 signin = (req, res) =>{
    const userinfo = model.findbyEmail(req.body.email)
    if(!userinfo){
       return res.status(400).send({
          status: 400,
          error: "your email is not found!!! please check if it correct"
       })
    }
    if(userinfo.email === req.body.email && userinfo.password === req.body.password){
      const token = help.generateToken(userinfo.id, userinfo.email);
       return res.status(201).send({ 
          status: 201,
          message: "User is successfully logged in",
          data: {
             token,
            firstname: userinfo.firstname,
            secondname: userinfo.secondname,
            username: userinfo.username,
            email: userinfo.email
          }
       });
    }
    return res.status(400).send({
      status: 400,
      error: "the email does not match with the password "
  })
 }
 
}
export default new Register();
