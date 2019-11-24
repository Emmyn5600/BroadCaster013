import moment from 'moment'
import uuid from 'uuid'


class User{
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
    findbyEmail(email){
        return this.user.find(found => found.email === email);
    }
}   
export default new User ();