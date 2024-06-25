// Función para generar una pregunta
export function generarPregunta(personajes, personajesFemeninos, personajesMasculinos, genero) {

    if (genero === 'masculino') {
        personajes = personajesMasculinos;
    } else if (genero === 'femenino') {
        personajes = personajesFemeninos;
    } else {
        personajes = Math.random() < 0.5 ? personajesMasculinos : personajesFemeninos;
    }

    const tiposPreguntas = [1, 2, 3, 4, 5, 6]; // Diferentes tipos de preguntas
    const tipoPregunta = tiposPreguntas[Math.floor(Math.random() * tiposPreguntas.length)]; // Selecciona un tipo de pregunta al azar
    const personajeCorrecto = personajes[Math.floor(Math.random() * personajes.length)]; // Selecciona un personaje correcto al azar
    let opciones = [personajeCorrecto]; // Inicializa las opciones con el personaje correcto

    // Función para verificar si un personaje pertenece a un anime ya presente en las opciones
    const personajePerteneceAAnimeExistente = (personaje) => {
        return opciones.some(opcion => opcion.anime === personaje.anime);
    };

    // Agrega opciones adicionales asegurando que sean únicas y de distintos animes
    while (opciones.length < 4) {
        const personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
        if (!opciones.includes(personajeAleatorio) && !personajePerteneceAAnimeExistente(personajeAleatorio)) {
            opciones.push(personajeAleatorio);
        }
    }

    opciones = opciones.sort(() => Math.random() - 0.5); // Mezcla las opciones
    return { tipoPregunta, personajeCorrecto, opciones }; // Retorna el tipo de pregunta, el personaje correcto y las opciones
}

// Muestra una pregunta en el contenedor proporcionado y configura el callback para manejar la respuesta
export function mostrarPregunta(ronda, puntuacion, preguntaActual, pregunta, contenedorDatos, contenedor, callback) {
    contenedor.innerHTML = ''; // Limpia el contenido anterior
    contenedorDatos.innerHTML = ''; // Limpia el contenido anterior

    const { tipoPregunta, personajeCorrecto, opciones } = pregunta; // Desestructura la pregunta
    let contenidoDatosVariables = ''; // Inicializa el contenido de los valores de las variables
    let contenidoPregunta = ''; // Inicializa el contenido de la pregunta
    let respuestas = ''; // Inicializa las respuestas

    contenidoDatosVariables = `<p class="datos-variables">Ronda actual: ${ronda}</p><p class="datos-variables">Pregunta actual: ${preguntaActual + 1}</p><p class="datos-variables">Puntuación: ${puntuacion}</p>`;

    // Genera el contenido de la pregunta y las respuestas según el tipo de pregunta
    switch (tipoPregunta) {
        case 1:
            contenidoPregunta = `<p class="texto-pregunta">¿Quién es este personaje?</p><img src="${personajeCorrecto.imagen}" alt="Personaje">`;
            respuestas = opciones.map(op => `<button class="opcion opcion-texto" data-correcto="${op.nombre === personajeCorrecto.nombre}">${op.nombre}</button>`).join('');
            break;
        case 2:
            contenidoPregunta = `<p class="texto-pregunta">¿Quién es '${personajeCorrecto.nombre}'?</p>`;
            respuestas = opciones.map(op => `<button class="opcion opcion-imagen" data-correcto="${op.nombre === personajeCorrecto.nombre}"><img src="${op.imagen}" alt="Personaje"></button>`).join('');
            break;
        case 3:
            contenidoPregunta = `<p class="texto-pregunta">¿De quién es esta descripción?</p><p>${personajeCorrecto.descripcion}</p>`;
            respuestas = opciones.map(op => `<button class="opcion opcion-texto" data-correcto="${op.nombre === personajeCorrecto.nombre}">${op.nombre}</button>`).join('');
            break;
        case 4:
            contenidoPregunta = `<p class="texto-pregunta">¿De quién es esta descripción?</p><p>${personajeCorrecto.descripcion}</p>`;
            respuestas = opciones.map(op => `<button class="opcion opcion-imagen" data-correcto="${op.nombre === personajeCorrecto.nombre}"><img src="${op.imagen}" alt="Personaje"></button>`).join('');
            break;
        case 5:
            contenidoPregunta = `<p class="texto-pregunta">¿Quién es este personaje?</p><img src="${personajeCorrecto.imagen}" alt="Personaje">`;
            respuestas = opciones.map(op => `<button class="opcion opcion-parrafo" data-correcto="${op.nombre === personajeCorrecto.nombre}">${op.descripcion}</button>`).join('');
            break;
        case 6:
            contenidoPregunta = `<p class="texto-pregunta">Selecciona un personaje de '${personajeCorrecto.anime}'.</p>`;
            respuestas = opciones.map(op => `<button class="opcion opcion-texto" data-correcto="${op.nombre === personajeCorrecto.nombre}">${op.nombre}</button>`).join('');
            break;
    }

    // Inserta el contenido de los valores de las variables en el contenedor
    contenedorDatos.innerHTML = `<div class="datosPregunta">${contenidoDatosVariables}</div>`;

    // Inserta el contenido de la pregunta y las respuestas en el contenedor
    contenedor.innerHTML = `
        <div class="pregunta">${contenidoPregunta}</div>
        <div class="respuestas">${respuestas}</div>
    `;

    // Configura los manejadores de eventos para las opciones de respuesta
    contenedor.querySelectorAll('.opcion').forEach(opcion => {
        opcion.addEventListener('click', (event) => {
            const esCorrecto = event.currentTarget.getAttribute('data-correcto') === 'true'; // Verifica si la respuesta es correcta
            callback(esCorrecto); // Llama al callback con el resultado
        });
    });
}

// Inicia el juego con un conjunto de personajes
export function iniciarJuego(personajesFemeninos, personajesMasculinos, genero, ronda, puntuacion) {

    const contenedorJuego = document.getElementById('contenedor-juego'); // Contenedor para el juego
    const contenedorDatos = document.getElementById('contenedor-datosVariables'); // Contenedor para los datos de las variables
    contenedorDatos.style.display = 'flex'; // Muestra el contenedor de los datos de las variables
    let personajes = []; // Array para almacenar los personajes
    let preguntas = []; // Array para almacenar las preguntas
    let preguntaActual = 0; // Índice de la pregunta actual

    for (let i = 0; i < 10; i++) {
        preguntas.push(generarPregunta(personajes, personajesFemeninos, personajesMasculinos, genero)); // Genera 10 preguntas
    }

    // Muestra la siguiente pregunta
    function mostrarSiguientePregunta() {
        if (preguntaActual < preguntas.length) {
            mostrarPregunta(ronda, puntuacion, preguntaActual, preguntas[preguntaActual], contenedorDatos, contenedorJuego, (esCorrecto) => {

                if (esCorrecto) {
                    puntuacion++; // Incrementa la puntuación si la respuesta es correcta
                    alert('¡Respuesta correcta! ✔️');
                } else {
                    puntuacion--; // Decrementa la puntuación si la respuesta es incorrecta
                    alert('Respuesta incorrecta ❌');
                }

                preguntaActual++; // Incrementa el índice de la pregunta actual
                if (preguntaActual < preguntas.length) {
                    mostrarSiguientePregunta(); // Muestra la siguiente pregunta
                } else {
                    finalizarRonda(personajesFemeninos, personajesMasculinos, genero, ronda, puntuacion); // Finaliza la ronda si no hay más preguntas
                }
            });
        }
    }

    mostrarSiguientePregunta(); // Muestra la primera pregunta
}

// Finaliza la ronda y muestra la puntuación final
export function finalizarRonda(personajesFemeninos, personajesMasculinos, genero, ronda, puntuacion) {

    const contenedorJuego = document.getElementById('contenedor-juego');
    contenedorJuego.innerHTML = "";

    const contenedorDatos = document.getElementById('contenedor-datosVariables');
    contenedorDatos.innerHTML = "";

    if (ronda < 3) {
        contenedorJuego.innerHTML = `
        <div id="pantalla-fin">
            <p>🕹️ Fin de la ronda ${ronda}, tienes en total ${puntuacion} puntos. 🕹️</p>
            <div class="botones">
                <button id="siguiente">Siguiente ronda</button>
                <button id="finalizar">Finalizar</button>
            </div>
        </div>
    `;
        ronda++;

    } else if (puntuacion < 20 && ronda === 3) {
        contenedorJuego.innerHTML = `
        <div id="pantalla-fin">
            <p>Fin del juego, has conseguido ${puntuacion} puntos.</p>
            <p>☠️ ¡Has perdido! ☠️</p>
            <div class="botones">
                <button id="siguiente">Reiniciar</button>
                <button id="finalizar">Finalizar</button>
            </div>
        </div>
    `;
        ronda = 1;
        puntuacion = 0;

    } else if (puntuacion >= 20 && puntuacion < 30 && ronda === 3) {
        contenedorJuego.innerHTML = `
        <div id="pantalla-fin">
            <p>Fin del juego, has conseguido ${puntuacion} puntos.</p>
            <p>✨ ¡Felicidades! ¡Has ganado! ✨</p>
            <p>💪 Ahora intenta conseguir la máxima puntuación 💪</p>
            <div class="botones">
                <button id="siguiente">Reiniciar</button>
                <button id="finalizar">Finalizar</button>
            </div>
        </div>
    `;
        ronda = 1;
        puntuacion = 0;

    } else if (ronda > 3 && ronda < 10) {
        contenedorJuego.innerHTML = `
        <div id="pantalla-fin">
            <p>🕹️ Fin de la ronda ${ronda}, tienes en total ${puntuacion} puntos. 🕹️</p>
            <div class="botones">
                <button id="siguiente">Siguiente ronda</button>
                <button id="finalizar">Finalizar</button>
            </div>
        </div>
    `;
        ronda++;

    } else if (ronda >= 10) {
        contenedorJuego.innerHTML = `
        <div id="pantalla-fin">
            <p>Fin de la ronda ${ronda}, tienes ${puntuacion} puntos.</p>
            <p>🤩 Adoras este quiz, ¡Gracias! 🤩</p>
            <div class="botones">
                <button id="siguiente">Siguiente ronda</button>
                <button id="finalizar">Finalizar</button>
            </div>
        </div>
    `;
        ronda++;

    } else if (puntuacion === 30 && ronda === 3) {
        contenedorJuego.innerHTML = `
        <div id="pantalla-fin">
            <p>Fin del juego, has conseguido ${puntuacion} puntos.</p>
            <p>👑 ¡Increíble! ¡Tienes una puntuación perfecta! 👑</p>
            <p>Puedes seguir jugando e ir obteniendo puntos infinitamente 👍</p>
            <div class="botones">
                <button id="siguiente">Siguiente ronda</button>
                <button id="finalizar">Finalizar</button>
            </div>
        </div>
    `;
        ronda++;
    }

    document.getElementById('finalizar').addEventListener('click', function () {
        location.reload(); // Recarga la página para finalizar el juego
    });

    document.getElementById('siguiente').addEventListener('click', function () {
        iniciarJuego(personajesFemeninos, personajesMasculinos, genero, ronda, puntuacion); // Inicia la siguiente ronda
    });
}
