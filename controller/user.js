import model from '../model/user'
import jwt from 'jsonwebtoken'

class register{
   create = (req, res) => {
       const newUser = model.createNewuser(req.body);
       const token = jwt.sign({id: newUser.id}, 'Kigali2010');
       return res.status(201).send({
          status: 201,
          message: "User created successfully",
          data: {
            token,
            newUser
          }
       });
   }
   signin = (req, res) =>{
      const email = model.findbyOne(req.body.email)
      if(email === false){
         return res.status(401).send({
            status: 401,
            error: "email does not exist"
         });
      }
      if(email.findbyOne === req.body.email && password.findbypassword === req.body.password)
      {
         return res.status(201).send({
            status:201,
            message: "login successfully",
            token: token,
            data: email
         })
      }
   }

}
export default new register();
