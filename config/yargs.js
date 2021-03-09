const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Lista la salida en pantalla'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            demandOption: false,
            default: 10,
            describe: 'Hasta donde multiplicar'
        },
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;