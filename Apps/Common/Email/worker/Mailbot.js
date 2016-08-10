"use strict";

const nodemailer = require('nodemailer');
const templates  = require('../templates/v1.template.js');

class Mailbot {

  constructor(){
    this.transporter = nodemailer.createTransport({
      pool: true,
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
          user: 'karlengles1969@gmail.com',
          pass: 'thisismydummyaccount'
      }
    });
    this.connection = null;
    this.verifyConnection();
  }

  verifyConnection(){
    let self = this;
    setTimeout(() => {
      this.transporter.verify(function(error, success) {
        if (error) {
            console.log(error);
            self.connection = null;
        } else {
            console.log('Server is ready to take our messages');
            self.connection = true;
        }
      })
    }, 3000)
  }

  readQueue(){
    // todo: implement this
    // every night read from the queue to make sure not messages got missed
  }

  composeWelcomeEmail(data){
    let email = {
      from: '"Magnet" <karlengles1969@gmail.com>', // sender address
      to: 'elliscmarte@gmail.com', // list of receivers
      subject: 'Welcome ✔', // Subject line
      text: templates.welcomeEmail(data)
    };
    this.sendWelcomeEmail(email);
  }

  sendWelcomeEmail(email){
    this.transporter.sendMail(email, (err, info) => {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
    });
  }

  sendNewPasswordEmail(data){
    // implement
  }

  formatNewPasswordEmail(data){
    // implement
  }
}

module.exports = new Mailbot();
