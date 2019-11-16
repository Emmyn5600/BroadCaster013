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
    findbyEmail(email){
        return this.user.find(found => found.email === email);
    }
    createadd = (data) => {
        this.add = [];
        let addid = this.add.length +  1;
        const addentry = {
           id: addid,
           title: data.title || "",
           type: data.type || "",
           comment: data.comment || "",
           location: data.location || "",
           status: data.status || "",
           images: data.images || "",
           videos: data.videos || ""
        };
        this.add.push(addentry);
        return addentry;
    } 
   
}   
export default new user ();