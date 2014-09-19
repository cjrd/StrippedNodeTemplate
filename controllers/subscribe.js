var User =  require("../models/User");
var mailUtils = require("../utils/mail");


exports.getSubscribe = function(req, res) {
  res.render('subscribe', {
    title: 'Get Updates'
  });
};

/**
 * POST /subscribe
 * Send a contact form via Nodemailer.
 * @param email
 * @param name
 * @param message
 */
exports.postSubscribe = function(req, res, next) {
  req.assert('email', 'Email is not valid').isEmail();
  var errors = req.validationErrors();
  if (errors || (req.body.demail && req.body.demail.length > 0)) {
    req.flash('errors', errors);
    return res.redirect('/');
  }

  var user = new User({
    email: req.body.email,
    profile: {
      interestsk: req.body.topics.split("\n"),
      name: req.body.name
    }
  });

  User.findOne({ email: req.body.email }, function(err, existingUser) {
    if (existingUser) {
      req.flash('errors', { msg: 'We\'ve already added that email!' });
      return res.render('subscribe');
    }

    user.save(function(err) {
      if (err) return next(err);
        req.flash('success', { msg: 'Thanks for subscribing! We\'ll be in touch soon.' });
        return res.render('subscribe');
    });
  });
};
