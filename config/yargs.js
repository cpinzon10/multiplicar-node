const opts = {
    base: {
        alias: 'b',
        desc: 'Base para crear tabla',
        demand: true
    },
    limite: {
        alias: 'l',
        desc: 'Limite de donde llega la tabla',
        demand: false,
        default: 10
    }


}


const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla de multiplicar', opts)
    .command('crear', 'Crea en Archivo de Tablas desde consola', opts)

.argv

module.exports = {
    argv
}