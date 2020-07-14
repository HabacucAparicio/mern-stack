const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        //Elimina espacios en blanco
        trim:true,
        unique: true
        }
    },{
        timestamps: true

});

module.exports = model('User',userSchema);
