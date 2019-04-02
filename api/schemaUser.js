const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for user
let User = new Schema({
  user_name: {
    type: String
  },
  bio_info: {
    type: String
  },
  img_user: {
    type: String
  }
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);