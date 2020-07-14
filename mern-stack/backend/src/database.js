const mongoose = require('mongoose') ;

console.log(process.env.MONGODB_URI);
//If else en una sola linea 'Parte verdadera':'Parte falsa' 
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI
    :'mongodb://localhost/dbTest';

mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useFindAndModify: false

});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('DB is connected');
});