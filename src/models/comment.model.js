const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema ({
    body : {type:String, required:true},
},
{
    versionKey:false,
    timestamps:{type:String, required:true},
});

module.exports = mongoose.model ('comment', commentSchema);