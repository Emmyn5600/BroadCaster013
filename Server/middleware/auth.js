import Joi from "@hapi/joi";


class Validation{
    
    uservalidation(req, res, next){
        const schema = {
            firstname: Joi.string().required(),
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
        location: Joi.object()
        .keys({
          type:Joi.string()
          .required()
          .valid(['point']),
          coordinates: Joi.array().ordered([
              Joi.number()
              .min(-180)
              .max(180),
              Joi.number()
              .min(-90)
              .max(90)
              .required()
          ]),
        }),
        status: Joi.string().required(),
        image: Joi.array().items(Joi.string()),
        video: Joi.array().items(Joi.string()),

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
export default new Validation();