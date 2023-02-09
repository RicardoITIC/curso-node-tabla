

const { crearArchivo } = require('./helpers/multliplicar.js');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();


//console.log('Tabla: yargs',argv.tabla);
/* 
const [ , ,arg3 = 'tabla=5'] = process.argv;
const [ , tabla = 5] = arg3.split('=');
*/

//console.log(process.argv);

//console.log(tabla);

//const tabla = 3;


crearArchivo(argv.t, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err));
