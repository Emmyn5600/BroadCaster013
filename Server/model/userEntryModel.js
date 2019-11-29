import moment from 'moment'
import uuid from 'uuid'
import userRegisterModel from '../model/userRegisterModel'

class UserEntry {
    
    constructor(){
        this.add = [];
    }
createadd = (data) => {
    let addid = this.add.length +  1;
    const addentry = {
       id: addid,
       createon: new Date(),
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
updateComment(id, data) {
    const updat = this.getbyOne(id);
    const index3 = this.add.indexOf(updat);
    this.add[index3].comment = data['comment'] || updat.comment;
    this.add[index3].modifiedDate = new Date()
    return this.add[index3];
  }
  updateLocation(id, data) {
    const updated = this.getbyOne(id);
    const index2 = this.add.indexOf(updated);
    this.add[index2].location = data['location'] || updated.location;
    this.add[index2].modifiedDate = new Date()
    return this.add[index2];
  }
delete(id){
    const remove = this.getbyOne(id);
    const index = this.add.indexOf(remove);
    return this.add.splice(index, 1);
    
}
}
export default new UserEntry();