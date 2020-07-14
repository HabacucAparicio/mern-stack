//Importamos variables de entorno
require('dotenv').config();




//Hablamos a la variable app desde app.js
const app = require('./app');
require('./database');

async function main(){
    //Ponemos un escucha en nuestro puerto 4000
    await app.listen(app.get('port'));
    console.log('Server on port '+ app.get('port'));
}
main();
