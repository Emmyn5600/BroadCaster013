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
      }
     this.user.push(newUser);
      return newUser;
    }
}   
export default new user ();