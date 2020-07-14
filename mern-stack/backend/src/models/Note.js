const { Schema, model } = require('mongoose');



const noteSchema = new Schema({
    title:String,
    content:{
        type: String,
        required: true
    },
    author:String,
    date:{
        type:Date,
        default: Date.now
    }
},{
    //Nos permote crear fecha de cracion y modificacion.
    timestamps: true

});

module.exports = model('Note',noteSchema);