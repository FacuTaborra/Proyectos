const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    
    leer: function(){
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON: function(arrayTareas){
        fs.writeFileSync(this.archivo, JSON.stringify(arrayTareas, null, 2))
    },

    crearTarea: function(titulo){
        const tareas = this.leer();
        let nuevaTarea = {
            titulo, // es lo mismo que poner titulo = titulo,
            estado: "pendiente"
        }
        tareas.push(nuevaTarea);
        this.escribirJSON(tareas);
    },

    leerPorEstado: function(estado){
        const tareas = this.leer();
        return tareas.filter(elemento => elemento.estado == estado)
        .forEach(function(unaTarea, i){
            console.log(i + '-> ' + unaTarea.titulo + ' -- ' + unaTarea.estado);
        })
    }
}

module.exports = archivoTareas;