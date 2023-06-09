const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    address: {
        type: String,
  
    },
    city: {
        type: String,
    },
    postalCode: {
        type: String,
  
    },
    latitude: {
        type: Number,
  
    },
    longitude: {
        type: Number,
  
    },
    uploadFiles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UploadFile'
    }]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
