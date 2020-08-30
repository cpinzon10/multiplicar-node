//requiries
const fs = require('fs');
const colors = require('colors');


let crearArchivo = async(base) => {

    let data = '';

    for (let i = 1; i <= 10; i++) {
        data += (`${base} * ${i} = ${base * i} \n `);
    }

    fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
        console.log(`El Archivo con el nombre: tabla-${base}.txt  ha sido generado!`.red);
    });
}

let getTabla = async(base) => {

    if (!Number(base)) {
        console.log('El parametro ingresado no es un numero');
        return;
    }

    let tabla = await crearArchivo(base);
    return tabla
}

let listarTabla = (base, limite) => {

    console.log('================================='.blue);
    console.log(` ======  Tabla de ${base} =====`.blue);
    console.log('================================='.blue);

    for (let i = 1; i <= limite; i++) {
        console.log(((`${base} * ${i} = ${base * i} `)));
    }

}


/* getTabla(7)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
 */

module.exports = {
    getTabla,
    listarTabla
}