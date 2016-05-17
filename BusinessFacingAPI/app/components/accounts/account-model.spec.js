const mocha     = require('mocha');
const chai      = require('chai');
const Account      = require('./account-model.js');

describe('AccountModel', () => {
  describe('#exists', () => {
    it('should take a set of parameters', () => {
      Account.exists({'email': 'ellis@gmail.com', 'accountName': 'ellis', 'password': 'password'})
    })
  })
})
