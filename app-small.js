const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];
switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Àrchivo creado ${archivo}`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(err => console.log(err));

        break;
    default:
        console.log('No se reconoce como comando valido');
}