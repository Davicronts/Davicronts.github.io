import { personajes } from './personajes.js';

document.addEventListener('DOMContentLoaded', function () {
    const seleccionar = document.getElementById('seleccionar');

    const personajesOrdenados = ordenarArrayPorNombre(personajes);

    personajesOrdenados.forEach((personaje, indice) => {
        const opcion = document.createElement('option');
        opcion.value = indice;
        opcion.textContent = personaje.nombre;
        seleccionar.appendChild(opcion);
    });

    document.getElementById('generar').addEventListener('click', function () {
        const indiceAleatorio = Math.floor(Math.random() * personajes.length);
        mostrarPersonaje(indiceAleatorio);
    });

    document.getElementById('seleccionar').addEventListener('change', function () {
        const indiceSeleccionado = this.value;
        if (indiceSeleccionado === "") {
            document.getElementById('personaje').style.display = 'none';
        } else {
            mostrarPersonaje(indiceSeleccionado);
        }
    });

    document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('seleccionar').value = "";
        document.getElementById('personaje').style.display = 'none';
        document.getElementById('personaje-nombre').textContent = '';
        document.getElementById('personaje-anime').textContent = '';
        document.getElementById('personaje-imagen').src = '';
        document.getElementById('personaje-video').innerHTML = '';
        document.getElementById('personaje-url').href = '';
        document.getElementById('personaje-url').style.display = 'none';
    });

    function mostrarPersonaje(indice) {
        const personaje = personajes[indice];

        document.getElementById('personaje-nombre').textContent = personaje.nombre;
        document.getElementById('personaje-anime').textContent = personaje.anime;
        document.getElementById('personaje-imagen').src = personaje.imagen;
        document.getElementById('personaje-video').innerHTML = `<video width="800" height="600" controls><source src="${personaje.video}" type="video/webm"></video>`;
        document.getElementById('personaje-url').href = personaje.url;
        document.getElementById('personaje-url').style.display = 'block';

        document.getElementById('personaje').style.display = 'flex';
    }

    function ordenarArrayPorNombre(array) {
        return array.sort((a, b) => {
            if (a.nombre < b.nombre) {
                return -1;
            }
            if (a.nombre > b.nombre) {
                return 1;
            }
            return 0;
        });
    }
});