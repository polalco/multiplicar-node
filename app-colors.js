const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Àrchivo %s creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    case 'listar':
        console.log(colors.yellow('===Tabla de multiplicar==='));
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(colors.green(data)))
            .catch(err => console.log(err));

        break;
    default:
        console.log('No se reconoce como comando valido');
}