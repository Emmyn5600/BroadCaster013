import model from '../model/user'
import jwt from 'jsonwebtoken'

class register{
   create = (req, res) => {
      const email = model.findbyEmail(req.body.email);
       if(!email){
       const newUser = model.createNewuser(req.body);
       const token = jwt.sign({id: newUser.id}, 'Kigali2010');
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
      const token = jwt.sign({id: find.id}, 'Kigali2010');
       return res.status(200).send({ 
          status: 200,
          message: "User is successfully logged in",
          data: {
             token: token,
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
export default new register();
