import { personajesFemeninos } from './personajesFemeninos.js';
import { personajesMasculinos } from './personajesMasculinos.js';
import {
    actualizarPersonajes,
    actualizarOpcionesSelect,
    ocultarDetallesPersonaje,
    mostrarPersonaje,
    mostrarListadoPersonajes,
    filtrarPersonajes
} from './funciones.js';

document.addEventListener('DOMContentLoaded', function () {
    let personajes = actualizarPersonajes('opcion1', personajesFemeninos, personajesMasculinos);
    console.log(personajes);
    const seleccionar = document.getElementById('seleccionar');
    const radioButtons = document.querySelectorAll('input[name="opcion"]');

    // Initial setup
    actualizarOpcionesSelect(personajes, seleccionar);
    ocultarDetallesPersonaje();

    document.getElementById('busqueda').addEventListener('input', function () {
        const textoBusqueda = this.value.trim();

        if (textoBusqueda === '') {
            mostrarListadoPersonajes(personajes);
            document.getElementById('mensaje-busqueda-vacia').style.display = 'none';
        } else {
            filtrarPersonajes(textoBusqueda, personajes);
        }
    });

    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const seleccionado = event.target.value;
            personajes = actualizarPersonajes(seleccionado, personajesFemeninos, personajesMasculinos);
            actualizarOpcionesSelect(personajes, seleccionar);
            ocultarDetallesPersonaje();
        });
    });

    document.getElementById('generar').addEventListener('click', function () {
        const indiceAleatorio = Math.floor(Math.random() * personajes.length);
        mostrarPersonaje(indiceAleatorio, personajes);
    });

    document.getElementById('seleccionar').addEventListener('change', function () {
        const indiceSeleccionado = this.value;
        if (indiceSeleccionado === "") {
            ocultarDetallesPersonaje();
        } else {
            mostrarPersonaje(Number(indiceSeleccionado), personajes);
        }
    });

    document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('seleccionar').value = "";
        document.getElementById('opcion1').checked = true;
        personajes = actualizarPersonajes('opcion1', personajesFemeninos, personajesMasculinos);
        actualizarOpcionesSelect(personajes, seleccionar);
        ocultarDetallesPersonaje();
    });

    document.getElementById('listado').addEventListener('click', function () {
        mostrarListadoPersonajes(personajes);
    });
});
