import model from '../model/user'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import help from '../help'

dotenv.config();

class register{
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
  createnewadd = (req, res) => {
   const addentry = model.createadd(req.body);
   const id = addentry.id;
     return res.status(200).send({
        status: 200,
        data: [{
           id,
           message: "Created red-flag record",
        }]
     });
  }
  getAll = (req, res) => {
   const get = model.displayAll();
   return res.status(200).send({
      status: 200,
      data: get
   });
 }
  getspecific = (req, res) => {
     const one = model.getbyOne(req.params.id);
     if(!one){
        return res.status(401).send({
           status: 401,
           error: "id you are finding is not found" 
        })
     }
     return res.status(200).send({
        status: 200,
        data: one
     })
  }
  delete = (req, res) => {
     const del = model.getbyOne(req.params.id);
     if(!del){
        return res.status(401).send({
           status: 401,
           error: "id to be deleted not found"
        })
      }
      const dell = model.delete(req.params.id);
        return res.status(200).send({
           status: 200,
           message: "red-flag record has been deleted"
           
        })
  }
}
export default new register();
