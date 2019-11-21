import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();
const help = {
    generateToken(id, email) {
        const token = jwt.sign({userId: id, userEmail: email,},
        process.env.MY_SECRET_KEY, { expiresIn: '10d' });
        return token;
      },
};
export default help;



