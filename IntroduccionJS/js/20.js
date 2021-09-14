// Métodos de propiedad

const reproductor = {
    reproducir: function(id) {
        console.log(`Repodruciondo canción con el ID: ${id}`);
    },
    pausar: function() {
        console.log('Pausando cancion...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando playlist con el nombre: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproducir playlist con el nombre: ${nombre}`);
    },
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`);
}

reproductor.reproducir(102);
reproductor.pausar();
reproductor.borrarCancion(2);
reproductor.crearPlaylist("Alternativa");
reproductor.reproducirPlaylist("Electronica");

