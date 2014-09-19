var User = require('../models/User');
var passport = require('passport');
var crypto = require('crypto');
var mailUtil = require('../utils/mail');
var secrets = require('../config/secrets');
var util = require('util');
var aws = require("aws-lib");


/**
 * Post /
 * post goal from landing page
 */
exports.postProduct = function(req, res, next) {
  // verify the form params
  req.assert('purl', "Amazon URL is not valid").isURL();
  var errors = req.validationErrors();
  if (errors) {
    res.writeHead(400, {"content-type": "application/json"});
    res.end(JSON.stringify(errors));
    return;
  }

  // get the data from Amazon
  var prodAdv = aws.createProdAdvClient(secrets.amazon.accessKeyId, secrets.amazon.accessKeySecret, "metacademy-20");

  prodAdv.call("ItemSearch", {SearchIndex: "Books", Keywords: "Javascript"}, function(err, result) {
    console.log(JSON.stringify(result));
  });


  // send it back to the page
  res.render("result");
};
