var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  profile: {
    name: {
      type: String,
      default: "Friend"
    },
  },
  personalKey: String
});

module.exports = mongoose.model('User', userSchema);
