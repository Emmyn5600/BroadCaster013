import moment from 'moment'
import uuid from 'uuid'

class user{
    constructor(){
        this.user = [];
    }
    createNewuser = (data) => {
       let userid = this.user.length +  1;
       const newUser = {
       id: userid,
       firstname : data.firstname || "",
       secondname : data.secondname || "",
       username : data.username || "",
       phonenumber : data.phonenumber || "",
       email : data.email || "",
       password : data.password || "",
       confirmpassord : data.confirmpassword || "",
      };
     this.user.push(newUser);
      return newUser;
    }
    findbyOne(email){
        return this.User.find(found => found.email === email);
    }
    findbypassword(password){
        return this.user.find(found => found.password === password);
    }
}   
export default new user ();