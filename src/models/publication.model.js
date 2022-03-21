const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema ({
    name: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
},
{
    versionKey: false,
    timestamps:true,
});

module.exports = mongoose.model ('publication', publicationSchema);