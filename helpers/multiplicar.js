const fs = require('fs');

const crearArchivo = async(argv) => {

    try {
        const base = argv.base;
        const listar = argv.listar;
        const hasta = argv.hasta;

        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += ` ${base} x ${i} = ${i * base}\n`;
            consola += ` ${base} ${'x'.yellow} ${i} ${'='.magenta} ${i * base}\n`;
        }

        if (listar) {
            console.log('=========================='.blue);
            console.log(`==== tabla del ${base}====`.red.bgYellow.underline);
            console.log('=========================='.blue);
            console.log(consola);
        }

        let nombreArchivo = `tabla-${base}.txt`;

        fs.writeFileSync(`salida/tabla-${base}.txt`, salida);
        return nombreArchivo;
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo
}