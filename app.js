console.clear();

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

crearArchivo(argv)
    .then(nombreArchivo => console.log(nombreArchivo.green, 'creado'))
    .catch(err => console.log(err))