import model from '../model/user'
import jwt from 'jsonwebtoken'

class register{
   create = (req, res) => {
       const newUser = model.createNewuser(req.body);
       const token = jwt.sign({id: newUser.id}, 'Kigali2010');
       return res.status(201).send({
          status: 201,
          message: "User created successfully",
          token: token,
          data: newUser,
       });
   }
}
export default new register();
