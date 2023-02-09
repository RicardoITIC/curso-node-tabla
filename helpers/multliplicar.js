 
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( tabla = 5, listar = false, hasta = 10) => {

    try{
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta  ; i++) {
            salida  += `${tabla} x ${i} = ${tabla*i}\n`;
            consola += `${colors.yellow(tabla)} ${'x'.green} ${i} ${'='.green} ${tabla*i}\n`;
        }

        if(listar){
            console.log(salida);
        }
        

        fs.writeFileSync(`./salida/tabla-${tabla}.txt`, salida);

        return `tabla-${tabla}.txt creado`;  
    } catch(err){
        throw err;
    }

          
}

module.exports = {
    crearArchivo: crearArchivo
}