import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import jwt from 'jsonwebtoken';
import generateToken from '../helpers/Userhelper'
import fs from 'fs';
import path from 'path';
import Auth from '../middleware/auth';
import help from '../helpers/Userhelper';
import model from '../model/userEntryModel'

const { expect } = chai;
chai.use(chaiHttp);

const correctTokens = {
    savedUser: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6ImVtbXk2NjQxOEBnbWFpbC5jb20iLCJpYXQiOjE1NzQ5NDA3MjMsImV4cCI6MTU3NTgwNDcyM30.sVsfE4DiAQFlxf4S0fDpT28k7vWybWhYKbm_6y86foc',
    unsavedUser: help.generateToken(1, 'emmy66418@gmail.com'),
    noEntryUser: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmVydHJ0QGdtYWlsLmNvbSIsImlkIjoyLCJpYXQiOjE1NzI3NzIwOTB9.oZhkuh1fjUM-pEAKzxGskzbRPWLDES4LVOtXMLh9moI'
};

const invalidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6ImVtbXk2NjQxOEBnbWFpbC5jb20iLCJpYXQiOQ5NDA3MjMsImV4cCI6MTU3NTgwNDcyM30.sVsfE4DiAQFlxf4S0fDpT28k7vWybWhYKbm_6y86foc';

const UserEntity = {
    title:"Incident related to red-flag record",
    type: "red-flad record",
    comment:"I have been looking someone with the corruption issue ",
    location:"Nyamagabe",
    status:"Draft",
    images:"['uploads/andela.jpg', 'uploads/andela.jpg']",
    videos:"['uploads/andela.jpg', 'uploads/andela.jpg']"
}
   const addentry = model.createadd(UserEntity);


describe('testing the create red-flag endpoint', () => {
    it("Created red-flag record", (done) => {
     chai.request(server)
            .post('/api/v1/red-flags')
            .set('Content-Type', 'application/form-data')
            .set("Authorization", `${correctTokens.savedUser}`)
            .field('title', UserEntity.title)
            .field('type', UserEntity.type)
            .field('comment', UserEntity.comment)
            .field('location', UserEntity.location)
            .field('status', UserEntity.status)
            .end((err, res) => {
            expect(res.body.status).to.equal(500);

            done();
            })
    });
    
    it("should not create a new red-flag when user has not provided a token", done => {
        chai
        .request(server)
            .post('/api/v1/red-flags')
            .set("Content-Type", 'application/x-www-form-urlencoded')
            .send(UserEntity)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                expect(res.body.message).to.be.equal("Token is needed at header section");
                done();
            });
    });
   
    it("Created red-flag record", (done) => {
        chai.request(server)
               .post('/api/v1/red-flags')
               .set('Content-Type', 'application/x-www-form-urlencoded')
               .set("Authorization", `${correctTokens .savedUser}`)
               .field('title', UserEntity.title)
               .field('type', UserEntity.type)
               .field('comment', UserEntity.comment)
               .field('location', UserEntity.location)
               .field('status', UserEntity.status)
               .attach('images', fs.readFileSync(path.join(__dirname, '../../../BroadCaster013/upload/andela.jpg')), 'andela.jpg')
               .attach('images', fs.readFileSync(path.join(__dirname, '../../../BroadCaster013/upload/Tekno.webm')), 'Tekno.webm')
               .end((err, res) => {
               expect(res.body.status).to.equal(200);
               expect(res.body.data).to.be.an('Array');
               expect(res.body.data[0].message).to.equal("Created red-flag record");
               expect(res.body.data[0].id).to.be.an('number');
               done();
               })
       });

          
    it("Created red-flag record", (done) => {
        chai.request(server)
               .post('/api/v1/red-flags')
               .set('Content-Type', 'application/x-www-form-urlencoded')
               .set("Authorization", `${correctTokens .savedUser}`)
               .field('type', UserEntity.type)
               .field('comment', UserEntity.comment)
               .field('location', UserEntity.location)
               .field('status', UserEntity.status)
               .attach('images', fs.readFileSync(path.join(__dirname, '../../../BroadCaster013/upload/andela.jpg')), 'andela.jpg')
               .attach('images', fs.readFileSync(path.join(__dirname, '../../../BroadCaster013/upload/Tekno.webm')), 'Tekno.webm')
               .end((err, res) => {
               expect(res.body.status).to.equal(400);
               expect(res.body).to.be.an('object');
               expect(res.body.error).to.equal("title is required");
               done();
               })
       });
})
describe('testing the create red-flag endpoint', () => {
                it("get all red-flag record", (done) => {
                chai.request(server)
                .get('/api/v1/red-flags')
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set("Authorization", `${correctTokens .savedUser}`)
                .end((err, res) => {
                    expect(res.body.status).to.equal(200);
                    expect(res.body.data).to.be.an('Array');
                done();
                })
            
        })
        it("get specific red-flag record", (done) => {
            chai.request(server)
            .get('/api/v1/red-flag-id/0')
            .set("Authorization", `${correctTokens .savedUser}`)
            .end((err, res) => {
                expect(res.body.status).to.equal(401);
                expect(res.body.error).to.equal('id you are finding is not found');
            done();
            })
    })
    it("get specific red-flag record", (done) => {
            chai.request(server)
            .get('/api/v1/red-flag-id/1')
            .set("Authorization", `${correctTokens .savedUser}`)
            .end((err, res) => {
             expect(res.body.status).to.equal(200);
             expect(res.body.data).to.be.an('object');
            done();
            })
})
})
describe('testing the create red-flag endpoint', () => {
    it("delete specific red-flag record", (done) => {
    chai.request(server)
    .delete('/api/v1/red-flag-id/0')
    .set("Authorization", `${correctTokens .savedUser}`)
    .end((err, res) => {
     expect(res.body.status).to.equal(400);
     expect(res.body.error).to.equal('the red-flag record you are trying to delete is not found');
    done();
    })
   })
    it("delete specific red-flag record", (done) => {
        chai.request(server)
        .delete('/api/v1/red-flag-id/1')
        .set("Authorization", `${correctTokens .savedUser}`)
        .end((err, res) => {
        expect(res.body.status).to.equal(200);
        expect(res.body.data).to.be.an('Array');
        done();
        })
     })
})

describe('testing the create red-flag endpoint', () => {

    it("update specific red-flag record comment", (done) => {
    chai.request(server)
    .patch('/api/v1/red-flags/jkjhdf/comment')
    .send({ comment: 'provide Comment' })
    .set("Authorization", `${correctTokens .savedUser}`)
    .end((err, res) => {
     expect(res.body.status).to.equal(400);
     expect(res.body.message).to.equal('the red-flag record you trying to modify is not found');
    done();
    })
   })

   it("update specific red-flag record comment", (done) => {
    chai.request(server)
    .patch('/api/v1/red-flags/2/comment')
    .send({ comment: 'provide Comment' })
    .set("Authorization", `${correctTokens .savedUser}`)
    .end((err, res) => {
     expect(res.body.status).to.equal(200);
     expect(res.body.data[0].message).to.equal('Updated red-flag record’s comment');
     expect(res.body.data[0].comment).to.be.an('String');
    done();
    })
   })

   it("update specific red-flag record location", (done) => {
    chai.request(server)
    .patch('/api/v1/red-flags/klljd/location')
    .send({location: 'nyambagabe'})
    .set("Authorization", `${correctTokens .savedUser}`)
    .end((err, res) => {
     expect(res.body.status).to.equal(400);
     expect(res.body.message).to.equal('the red-flag record you trying to modify is not found');
    done();
    })
   })
   it("update specific red-flag record location", (done) => {
    chai.request(server)
    .patch('/api/v1/red-flags/2/location')
    .send({ location: 'provide location' })
    .set("Authorization", `${correctTokens .savedUser}`)
    .end((err, res) => {
        console.log(res.body);
     expect(res.body.status).to.equal(200);
     expect(res.body.data[0].message).to.equal('Updated red-flag record’s Location');
     expect(res.body.data[0].location).to.be.an('String');
    done();
    });
   });
})
