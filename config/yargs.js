const descripcion = {
     demand: true,
     alias: 'd',
     desc: 'Descripcion de la tarea por hacer'
   };

const completado = {
  alias: 'c',
  default: true,
  desc: 'Tarea actualizada completada o pendiente la tarea'
}

const argv = require('yargs')
              .command('crear', 'Crea un elemento por hacer',  {
             descripcion
              })
              .command('actualizar', 'Actualiza una tarea por hacer', {
              descripcion,
              completado
            })
            .command('borrar', 'Borra un elemento por hacer',  {
           descripcion
            })
              .help()
              .argv;

module.exports = {
  argv
}
