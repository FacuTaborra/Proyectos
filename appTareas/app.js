let archivoTareas = require('./tareas');
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leer();
        tareas.forEach(function(unaTarea, i){
            console.log(i + '-> ' + unaTarea.titulo + ' -- ' + unaTarea.estado);
        })
    break;

    case undefined:
        console.log('Tenés que pasarme una acción');
    break;

    case 'crear':
        const nombreNuevaTarea = process.argv[3];
        archivoTareas.crearTarea(nombreNuevaTarea);
    break;
        //hola
    case 'filtar': 
        console.log(archivoTareas.leerPorEstado(process.argv[3]));
    break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
    break;

}
