import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import generateToken from '../helpers/Userhelper'

const { expect } = chai;
chai.use(chaiHttp);


const newUser = {
  firstname:"NSABIMANA",
  secondname:"Emmanuel",
  username:"emmy5600",
  phonenumber:"0783985260",
  email:"emmy66418@gmail.com",
  password:"elie@18728!"
}
const undefinedUser = {
  firstname:"NSABIMANA",
  secondname:"Emmanuel",
  username:"emmy5600",
  phonenumber:"0783985260",
  email:"emmy418@gmail.com",
  password:"elie@18728!"
}
const invalidUsername = {
  firstname:"NSABIMANA",
  secondname:"Emmanuel",
  username:"emmy5600",
  phonenumber:"0783985260",
  email:"emmy418@gmail.com",
  password:"elie@18728!"
}
const loggedUser = {
  email:"emmy466418@gmail.com",
  password:"elie@18728!"
}
const correctUser = {
  email:"emmy66418@gmail.com",
  password:"elie@18728!"
}
const incorrectpass = {
  email:"emmy66418@gmail.com",
  password:"ukhjddj!"
}
describe('testing the Register endpoints ', () => {

  it('should return User created successfully', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .set('accept', 'application/json')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(201);
        expect(res.body.message).to.be.equal('User created successfully');
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
  it('should return error if an email is already exist', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signup')
      .set('accept', 'application/json')
      .send(newUser)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.error).to.be.equal(`email already exist`);
        done();
      });
    })
      it('should return error if username is already exist', (done) => {
        chai
          .request(server)
          .post('/api/v1/auth/signup')
          .set('accept', 'application/json')
          .send(invalidUsername)
          .end((err, res) => {
            expect(res.body).to.be.an('object');
            expect(res.status).to.equal(400);
            expect(res.body.error).to.be.equal(`username already exist`);
            done();
          });
  });
  it('should return error if an email is not exist', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signin')
      .set('accept', 'application/json')
      .send(loggedUser)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.error).to.be.equal(`your email is not found!!! please check if it correct`);
        done();
      });
  });
  it('should return User is successfully logged in', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signin')
      .set('accept', 'application/json')
      .send(correctUser)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(201);
        expect(res.body.message).to.be.equals('User is successfully logged in');
        expect(res.body.data.token).to.be.an('string');
        done();
      });
  });

  it('should return error if Email and password did not match', (done) => {
    chai
      .request(server)
      .post('/api/v1/auth/signin')
      .set('accept', 'application/json')
      .send(incorrectpass)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        expect(res.status).to.equal(400);
        expect(res.body.error).to.be.a('string');
        done();
      });
  });
})
