import { personajesFemeninos, personajesMasculinos } from './personajes.js';

document.addEventListener('DOMContentLoaded', function () {

    const seleccionar = document.getElementById('seleccionar');
    const radioButtons = document.querySelectorAll('input[name="opcion"]');
    let personajes = personajesFemeninos.concat(personajesMasculinos);

    function actualizarPersonajes(opcion) {
        if (opcion === 'opcion1') {
            personajes = personajesFemeninos.concat(personajesMasculinos);
        } else if (opcion === 'opcion2') {
            personajes = personajesFemeninos;
        } else if (opcion === 'opcion3') {
            personajes = personajesMasculinos;
        }
        const personajesOrdenados = ordenarArrayPorNombre(personajes);
        actualizarOpcionesSelect(personajesOrdenados);
    }

    function actualizarOpcionesSelect(personajesOrdenados) {
        seleccionar.innerHTML = '<option value="">Seleccionar personaje</option>';
        personajesOrdenados.forEach((personaje, indice) => {
            const opcion = document.createElement('option');
            opcion.value = indice;
            opcion.textContent = personaje.nombre;
            seleccionar.appendChild(opcion);
        });
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

    function mostrarPersonaje(indice) {
        const personaje = personajes[indice];
        
        document.getElementById('personaje-nombre').textContent = personaje.nombre;
        document.getElementById('personaje-anime').textContent = personaje.anime;
        document.getElementById('personaje-imagen').src = personaje.imagen;
        document.getElementById('personaje-video').innerHTML = `<span class="titulo-video">${personaje.tituloVideo}</span><video width="700" height="500" preload="auto" controls><source src="${personaje.video}" type="video/webm"></video>`;
        document.getElementById('personaje-episodio').innerHTML = `<span class="titulo-episodio">Episodio 1</span><iframe width="700" height="500" src="${personaje.episodio}" allowfullscreen></iframe>`;
        document.getElementById('personaje-trailer').innerHTML = `<iframe width="700" height="500" src="${personaje.trailer}" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        document.getElementById('personaje-descripcion').textContent = personaje.descripcion;
        document.getElementById('personaje-url').href = personaje.url;
        document.getElementById('personaje-url').style.display = 'block';
        document.getElementById('personaje-url-db').href = personaje.db;
        document.getElementById('personaje-url-db').style.display = 'block';

        document.getElementById('personaje').style.display = 'flex';
    }

    function ocultarDetallesPersonaje() {
        document.getElementById('personaje').style.display = 'none';
        document.getElementById('personaje-nombre').textContent = '';
        document.getElementById('personaje-anime').textContent = '';
        document.getElementById('personaje-imagen').src = '';
        document.getElementById('personaje-video').innerHTML = '';
        document.getElementById('personaje-episodio').innerHTML = '';
        document.getElementById('personaje-url').href = '';
        
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const seleccionado = event.target;
            actualizarPersonajes(seleccionado.value);
            ocultarDetallesPersonaje();
        });
    });

    document.getElementById('generar').addEventListener('click', function () {
        const indiceAleatorio = Math.floor(Math.random() * personajes.length);
        mostrarPersonaje(indiceAleatorio);
    });

    document.getElementById('seleccionar').addEventListener('change', function () {
        const indiceSeleccionado = this.value;
        if (indiceSeleccionado === "") {
            ocultarDetallesPersonaje();
        } else {
            mostrarPersonaje(Number(indiceSeleccionado));
        }
    });

    document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('seleccionar').value = "";
        document.getElementById('opcion1').checked = true;
        actualizarPersonajes('opcion1');
        ocultarDetallesPersonaje();
    });

    actualizarPersonajes(document.querySelector('input[name="opcion"]:checked').value);
    ocultarDetallesPersonaje();
    console.log(personajes);
});