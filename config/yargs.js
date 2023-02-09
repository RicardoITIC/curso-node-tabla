const argv = require('yargs')
    .option('t',{
        alias:'tabla',
        type:'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default:10,
        describe: 'Numero a Multiplicar'
    })
    .check((argv,options) => {
        if(isNaN(argv.t)){
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .argv;  

module.exports = argv;