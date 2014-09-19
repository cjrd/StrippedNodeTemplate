var secrets = require('../config/secrets');
var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'Mandrill',
  auth: {
    user: secrets.mandrill.user,
    pass: secrets.mandrill.password
  }
});

module.exports.sendMail = function (mailOptions, cb) {

  smtpTransport.sendMail(mailOptions, cb);
};
