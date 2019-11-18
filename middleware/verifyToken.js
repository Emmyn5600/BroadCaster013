import jwt from 'jsonwebtoken';

 class auth {

verifyToken(req, res, next) {
  try {
    const token = req.headers['authorization'];
    if(!token) {
      return res.status(401).send({
          status: 401,
          message: "Token is needed at header section"
      });
    }
      const decoded = jwt.verify(token, process.env.MY_SECRET_KEY);
      req.user = { id: decoded.userId };
      next();
  } catch (error) {
    return res.status(401).send({ 
      status: 401,
      error: `error occurred ${error}`
  })
  }
    }
}
export default new auth(); 