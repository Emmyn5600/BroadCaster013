import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import {should} from chai.should();
import { request } from 'http';


chai.use(chaiHttp);

describe('LOGIN API', function(){
    it('Should success if credential is valid', function(done){
       chai.request(server)
        .post('/api/v1/auth/signin')
        .set('Accept', 'application/json')
        .set('Content-type', 'application/json')
        .send({email: 'email', password: 'password'})
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(response){
            expect(response.body).not.to.be.empty;
            expect(response.body).to.be.an('object');
        })
        .end(done);
    });
});

it('should return in any error on sign up POST', function(done) {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send({'firstname': 'HIRWA', 'secondname': 'Joseph', 'username':'emmyn5600', 'phonenumber':'0783985260', 'email':'emmy66418@gmail.com', 'password':'elie123', 'confirmpassord':'elie123'})
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.be.a('object');
        res.body.SUCCESS.should.have.property('firstname');
        res.body.SUCCESS.should.have.property('secondname');
        res.body.SUCCESS.should.have.property('username');
        res.body.SUCCESS.should.have.property('phonenumber');
        res.body.SUCCESS.should.have.property('email');
        res.body.SUCCESS.should.have.property('password');
        res.body.SUCCESS.should.have.property('confirmpassword')
        res.body.SUCCESS.firstname.should.equal('HIRWA');
        res.body.SUCCESS.secondname.should.equal('Joseph');
        res.body.SUCCESS.username.should.equal('emmyn5600');
        res.body.SUCCESS.phonenumber.should.equal('0783985260');
        res.body.SUCCESS.email.should.equal('emmy66418@gmail.com');
        res.body.SUCCESS.password.should.equal('elie123');
        res.body.SUCCESS.confirmpassord.should.equal('elie123');
        done();
      });
  });

