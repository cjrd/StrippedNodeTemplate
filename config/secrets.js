/**
 * You should never commit this file to a public repository if you place your dev keys here (use env variables).
 *
 * If you have already commited this file to GitHub with your keys, then
 * refer to https://help.github.com/articles/remove-sensitive-data
*/

module.exports = {

  db: process.env.MONGODB|| 'mongodb://localhost:27017/dev_tempalte',

  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',

  mandrill: {
    user: process.env.MANDRILL_USER || 'xxxx@xxxx.com',
    password: process.env.MANDRILL_PASSWORD || 'xxx'
  }
};
