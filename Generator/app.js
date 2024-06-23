import { personajesFemeninos } from './personajesFemeninos.js';
import { personajesMasculinos } from './personajesMasculinos.js';
import {
    actualizarPersonajes,
    actualizarOpcionesSelect,
    ocultarDetallesPersonaje,
    mostrarPersonaje,
    mostrarListadoPersonajes,
    filtrarPersonajes,
    ocultarTodo
} from './funciones.js';
import { iniciarJuego } from './juego.js';

document.addEventListener('DOMContentLoaded', function () {
    let personajes = actualizarPersonajes('opcion1', personajesFemeninos, personajesMasculinos);
    const seleccionar = document.getElementById('seleccionar');
    const radioButtons = document.querySelectorAll('input[name="opcion"]');
    let genero = "ambos";

    // Configuración inicial
    actualizarOpcionesSelect(personajes, seleccionar);
    ocultarDetallesPersonaje();
    console.log(personajes);

    // Filtro de búsqueda
    document.getElementById('busqueda').addEventListener('input', function () {
        const textoBusqueda = this.value.trim();
        if (textoBusqueda === '') {
            mostrarListadoPersonajes(personajes);
            document.getElementById('mensaje-busqueda-vacia').style.display = 'none';
        } else {
            filtrarPersonajes(textoBusqueda, personajes);
        }
    });

    // Cambio de opciones de personajes (Todos, Waifus, Husbandos)
    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const seleccionado = event.target.value;
            personajes = actualizarPersonajes(seleccionado, personajesFemeninos, personajesMasculinos);

            if (seleccionado === 'opcion1') {
                genero = 'ambos';
            } else if (seleccionado === 'opcion2') {
                genero = 'femenino';
            } else if (seleccionado === 'opcion3') {
                genero = 'masculino';
            }

            actualizarOpcionesSelect(personajes, seleccionar);
            ocultarDetallesPersonaje();
        });
    });

    // Generar personaje aleatorio
    document.getElementById('generar').addEventListener('click', function () {
        const indiceAleatorio = Math.floor(Math.random() * personajes.length);
        mostrarPersonaje(indiceAleatorio, personajes, seleccionar);
    });

    // Seleccionar personaje del dropdown
    document.getElementById('seleccionar').addEventListener('change', function () {
        const indiceSeleccionado = this.value;
        if (indiceSeleccionado === "") {
            ocultarDetallesPersonaje();
        } else {
            mostrarPersonaje(Number(indiceSeleccionado), personajes);
        }
    });

    // Reiniciar la selección de personajes
    document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('seleccionar').value = "";
        document.getElementById('opcion1').checked = true;
        personajes = actualizarPersonajes('opcion1', personajesFemeninos, personajesMasculinos);
        actualizarOpcionesSelect(personajes, seleccionar);
        ocultarDetallesPersonaje();
    });

    // Mostrar listado de personajes
    document.getElementById('listado').addEventListener('click', function () {
        mostrarListadoPersonajes(personajes);
    });

    // Iniciar el juego
    document.getElementById('juego').addEventListener('click', function () {

        ocultarTodo();

        // Asegura que el contenedor del juego sea visible
        document.getElementById('contenedor-juego').style.display = 'block';

        // Muestra la pantalla de inicio
        document.getElementById('pantalla-inicio').style.display = 'flex';

        // Evento para iniciar el juego al hacer clic en el botón "Empezar"
        document.getElementById('btn-empezar').addEventListener('click', () => {

            iniciarJuego(personajesFemeninos, personajesMasculinos, genero);
        });
    });
});
