const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema ({
    likes: {type:Integer},
    coverImage: {type:String, required:true},
    content: {type:String, required:true},
},
{
    versionKey:false,
    timestamps:{type:String, required:true},
});

module.exports = mongoose.model ('book', bookSchema);