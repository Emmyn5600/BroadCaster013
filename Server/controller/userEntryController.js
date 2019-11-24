import model from '../model/userEntryModel'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import help from '../helpers/Userhelper'

dotenv.config();

class Entry {

createnewadd = (req, res) => {
    const{ files } = req;

   const test1 = files[0].path;
   const test2 = files[1].path;
   const item = {
      title: req.body.title,
      type: req.body.type,
      comment: req.body.comment,
      location: req.body.location,
      status: req.body.status,
      images: test1,
      videos: test2,
   }
   const addentry = model.createadd(item);
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
         data:[{
            message: "red-flag record has been deleted",
             dell
         }]
      })
}

  updateComment= (req, res) => {
   const modifyComment = model.getbyOne(req.params.id);
   if (!modifyComment ) {
     return res.status(404).send({
        message: 'id to be modified is not found'
      });
   }
   const allmodifyComment = model.updateComment(req.params.id, req.body)
      return res.status(200).send({
         status:200,
         data:[{
            message: "Updated red-flag record’s comment",
            allmodifyComment 
         }]
      });
  }
  updateLocation= (req, res) => {
   const modifyLocation = model.getbyOne(req.params.id);
   if (!modifyLocation) {
     return res.status(404).send({
        message: 'id to be modified is not found'
      });
   }
   const allmodifyLocation = model.updateLocation(req.params.id, req.body)
      return res.status(200).send({
         status:200,
         data:[{
            message: "Updated red-flag record’s Location",
            allmodifyLocation
         }]
      });
  }
}
export default new Entry();
