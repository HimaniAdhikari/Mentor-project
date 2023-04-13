const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Notes = new schema({
    course:{
        type:String,
        required:true
    },
    semster:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    file:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Note',Notes );