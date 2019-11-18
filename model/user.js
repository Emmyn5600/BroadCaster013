import moment from 'moment'
import uuid from 'uuid'
import { isNumber } from 'util';

class user{
    constructor(){
        this.user = [];
        this.add = [];
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
        let addid = this.add.length +  1;
        const addentry = {
           id: addid,
           createon:moment.now(),
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
    getbyOne(id){
       return this.add.find( search => search.id == id);
    }

    displayAll(){
        return this.add; 
    }

    delete(id){
        const remove = this.getbyOne(id);
        const index = this.add.indexOf(remove);
        return this.add.splice(index, 1);
        
    }
   
}   
export default new user ();