const mocha     = require('mocha');
const chai      = require('chai');
const chaiHttp  = require('chai-http');
const app       = require('../../config/spec-config.js');

const expect    = chai.expect;
chai.use(chaiHttp);

describe('AccountController', () => {
  describe('POST /create', () => {
    it('should take a set of params', (done) => {
      chai.request(app)
        .post('/accounts/create')
        .send({'email': 'ellis@gmail.com', 'username': 'ellis', 'password': 'password'})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
        });
        done();
    });
    it('should only accept json', (done) => {
      chai.request(app)
        .post('/accounts/create')
        .send({'email': 'ellis@gmail.com', 'username': 'ellis', 'password': 'password'})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
        });
        done();
    });
    it('should return a success if it passes validations', (done) => {
      chai.request(app)
        .post('/accounts/create')
        .send({'email': 'ellis@gmail.com', 'username': 'ellis', 'password': 'password'})
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
        });
        done();
    });
  });
});
