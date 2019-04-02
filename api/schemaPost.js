const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for post
let Post = new Schema({
  published_post: {
    type: String
  },
},{
    collection: 'post'
});

module.exports = mongoose.model('Post', Post);