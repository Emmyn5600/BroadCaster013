import jwt from 'jsonwebtoken';

 class Auth {

verifyToken(req, res, next) {
  try {
    const token = req.headers['authorization'];
    if(!token) {
      return res.status(400).send({
          status: 400,
          message: "Token is needed at header section"
      });
    }
      const decoded = jwt.verify(token, process.env.MY_SECRET_KEY);
      req.user = { id: decoded.userId };
      next();
  } catch (error) {
    return res.status(400).send({ 
      status: 400,
      error: `invalid token, please check the token before you use it`
  })
  }
    }
}
export default new Auth(); 