"use strict";

class Templates {
  constructor(){

  }
  welcomeEmail(data){
    return `Welcome ${data['name']}! We are excited to help you get your products
    seen by shoppers in your neighborhood. As one of our first customers we want to
    let you know how appreciative we are of your business and we won't forget you.
    We promise to take steps to reward you for joining us on this journey. If you
    have any questions or feedback please feel free to send and email to me at
    elliscmarte@gmail.com. I look forward to building the best product for you
    and our users.`
  }
}


module.exports = new Templates();
