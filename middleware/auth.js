import Joi from "@hapi/joi";
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
};
export default new validation();