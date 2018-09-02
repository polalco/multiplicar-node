const fs = require('fs');
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) && !Number(limite)) {

            reject(`Èl valor introducido '${base }' no es un numero valido`)
            return;
        } else {
            if (limite >= 0) {
                for (let index = 0; index <= limite; index++) {
                    data += `${base} * ${index} = ${base*index}\n`;
                }
                resolve(data);
            } else {
                reject(`Èl limite introducido: '${limite }' no es un numero valido`)
            }
        }
    })
};


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) && !Number(limite)) {
            reject(`Èl valor introducido '${base }' no es un numero valido`)
            return;
        } else {
            if (limite >= 0) {
                for (let index = 0; index <= limite; index++) {
                    data += `${base} * ${index} = ${base*index}\n`;
                }
                fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                    if (err) reject(err);
                    resolve(`tabla-${base}-al-${limite}.txt`);
                });
            } else {
                reject(`Èl limite introducido: '${limite }' no es un numero valido`)
            }
        }
    })
};

module.exports = { crearArchivo, listarTabla }