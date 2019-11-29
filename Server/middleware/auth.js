import Joi from "@hapi/joi";


class Validation{
    
    uservalidation(req, res, next){
        const schema = {
            firstname: Joi.string().min(3).max(50).trim().required(),
            secondname: Joi.string().required(),
            username: Joi.string().required(),
            phonenumber: Joi.number().required(),
            email: Joi.string()
              .email()
              .required(),
            password: Joi.string()
              .min(6)
              .max(12)
              .required(),
          };

          const result = Joi.validate(req.body, schema,
            {
                abortEarly: false
            
            });
            const validity = result.error == null;

          if(validity ){
              return next();

          } else {
            const details = result.error.details;
            const message = details.map(i => i.message.replace('"', '').replace('"', '')).join(', ');
            return res.status(400).json({
                status: 400,
                error: message,
            });
        }
    }

useraddvalidation(req,res,next){
    try {
        const{ files } = req;

        const test1 = files[0].path;
        const test2 = files[1].path;
        const item = {
            title: req.body.title,
            type: req.body.type,
            comment: req.body.comment,
            location: req.body.location,
            status: req.body.status,
            images: [test1],
            videos: [test2],
         }
        const show = {
            title: Joi.string().min(3).max(100).trim().required(),
            type: Joi.string().min(3).max(100).trim().required(),
            comment: Joi.string().min(3).max(1000).trim().required(),
            location: Joi.string().required(),
            status: Joi.string().required(),
            images: Joi.array().items(Joi.string()),
            videos: Joi.array().items(Joi.string()),
        };
        const result = Joi.validate(item, show,
            {
                abortEarly: false
            
            });
            const validity = result.error == null;
    
          if(validity ){
              return next();
    
          } else {
            const details = result.error.details;
            const message = details.map(i => i.message.replace('"', '').replace('"', '')).join(', ');
            return res.status(400).json({
                status: 400,
                error: message,
            });
        }
    } catch (error) {
        return res.status(500).send({
            status: 500,
            error: `error occur${error}`,
         }); 
    }
}

    
};
export default new Validation();