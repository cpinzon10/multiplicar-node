//requeries

//uso de package npm yargs
const argv = require('./config/yargs.js').argv

const { getTabla, listarTabla } = require('./multiplicar/multiplicar');

let cmd = argv._[0];

switch (cmd) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':
        getTabla(argv.base)
            .catch(e => console.log(e))
            .then()
        break;

    default:
        console.log('Comando no reconocido');
}

//console.log(argv.limnite);



//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]; 

// console.log(base);





//console.log(multiplicar);