import Joi from "@hapi/joi";
import multer from 'multer';

class validation{
    uservalidation(req, res, next){
        const schema = {
            firstname: Joi.string().required(),
            secondname: Joi.string().required(),
            username: Joi.string().required(),
            phonenumber: Joi.string().required(),
            email: Joi.string()
              .email()
              .required(),
            password: Joi.string()
              .min(6)
              .max(12)
              .required(),
            confirmpassword: Joi.string()
              .min(6)
              .max(12)
              .required(),
          };
          const result = Joi.validate(req.body, schema);
          if(result.error){
              return res.status(401).send({
                  status: 401,
                  error: result.error.details[0].message
              });
          }else {
              next();
          }
    }

    useraddvalidation(req,res,next){
        const show = {
            title : Joi.string().required(),
            type: Joi.string().required(),
            comment: Joi.string().required(),
            location: Joi.string().required(),
            status: Joi.string().required(),
            images: Joi.array().items(Joi.string()),
            videos: Joi.array().items(Joi.string()),

        };
        const result1 = Joi.validate(req.body, show);
        if(result1.error){
            return res.status(401).send({
                status: 401,
                error: result1.error.details[0].message
            });
        }else {
            next();
        }
    }
};
export default new validation();