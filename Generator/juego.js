// Genera una pregunta con opciones aleatorias
export function generarPregunta(personajes) {
    const tiposPreguntas = [1, 2, 3, 4, 5, 6]; // Diferentes tipos de preguntas
    const tipoPregunta = tiposPreguntas[Math.floor(Math.random() * tiposPreguntas.length)]; // Selecciona un tipo de pregunta al azar
    const personajeCorrecto = personajes[Math.floor(Math.random() * personajes.length)]; // Selecciona un personaje correcto al azar
    let opciones = [personajeCorrecto]; // Inicializa las opciones con el personaje correcto

    // Agrega opciones adicionales asegurando que sean únicas
    while (opciones.length < 4) {
        const personajeAleatorio = personajes[Math.floor(Math.random() * personajes.length)];
        if (!opciones.includes(personajeAleatorio)) {
            opciones.push(personajeAleatorio);
        }
    }

    opciones = opciones.sort(() => Math.random() - 0.5); // Mezcla las opciones
    return { tipoPregunta, personajeCorrecto, opciones }; // Retorna el tipo de pregunta, el personaje correcto y las opciones
}

// Muestra una pregunta en el contenedor proporcionado y configura el callback para manejar la respuesta
export function mostrarPregunta(pregunta, contenedor, callback) {
    contenedor.innerHTML = ''; // Limpia el contenido anterior

    const { tipoPregunta, personajeCorrecto, opciones } = pregunta; // Desestructura la pregunta
    let contenidoPregunta = ''; // Inicializa el contenido de la pregunta
    let respuestas = ''; // Inicializa las respuestas

    // Genera el contenido de la pregunta y las respuestas según el tipo de pregunta
    switch (tipoPregunta) {
        case 1:
            contenidoPregunta = `<img src="${personajeCorrecto.imagen}" alt="Personaje">`;
            respuestas = opciones.map(op => `<button class="opcion" data-correcto="${op.nombre === personajeCorrecto.nombre}">${op.nombre}</button>`).join('');
            break;
        case 2:
            contenidoPregunta = `<p>¿Quién es '${personajeCorrecto.nombre}'?</p>`;
            respuestas = opciones.map(op => `<button class="opcion" data-correcto="${op.nombre === personajeCorrecto.nombre}"><img src="${op.imagen}" alt="Personaje"></button>`).join('');
            break;
        case 3:
            contenidoPregunta = `<p>${personajeCorrecto.descripcion}</p>`;
            respuestas = opciones.map(op => `<button class="opcion" data-correcto="${op.nombre === personajeCorrecto.nombre}">${op.nombre}</button>`).join('');
            break;
        case 4:
            contenidoPregunta = `<p>${personajeCorrecto.descripcion}</p>`;
            respuestas = opciones.map(op => `<button class="opcion" data-correcto="${op.nombre === personajeCorrecto.nombre}"><img src="${op.imagen}" alt="Personaje"></button>`).join('');
            break;
        case 5:
            contenidoPregunta = `<img src="${personajeCorrecto.imagen}" alt="Personaje">`;
            respuestas = opciones.map(op => `<button class="opcion" data-correcto="${op.nombre === personajeCorrecto.nombre}">${op.descripcion}</button>`).join('');
            break;
        case 6:
            contenidoPregunta = `<p>Un personaje de '${personajeCorrecto.anime}'.</p>`;
            respuestas = opciones.map(op => `<button class="opcion" data-correcto="${op.nombre === personajeCorrecto.nombre}">${op.nombre}</button>`).join('');
            break;
    }

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
export function iniciarJuego(personajes) {
    const contenedorJuego = document.getElementById('contenedor-juego');
    contenedorJuego.style.display = 'block'; // Asegura que el contenedor del juego sea visible

    let preguntas = [];
    for (let i = 0; i < 10; i++) {
        preguntas.push(generarPregunta(personajes)); // Genera 10 preguntas
    }

    let preguntaActual = 0; // Índice de la pregunta actual
    let puntuacion = 0; // Puntuación inicial

    // Muestra la siguiente pregunta
    function mostrarSiguientePregunta() {
        if (preguntaActual < preguntas.length) {
            mostrarPregunta(preguntas[preguntaActual], contenedorJuego, (esCorrecto) => {
                if (esCorrecto) {
                    alert('¡Correcto!');
                    puntuacion++; // Incrementa la puntuación si la respuesta es correcta
                } else {
                    alert('Incorrecto');
                }

                preguntaActual++; // Incrementa el índice de la pregunta actual
                if (preguntaActual < preguntas.length) {
                    mostrarSiguientePregunta(); // Muestra la siguiente pregunta
                } else {
                    finalizarJuego(puntuacion); // Finaliza el juego si no hay más preguntas
                }
            });
        }
    }

    mostrarSiguientePregunta(); // Muestra la primera pregunta
}

// Finaliza el juego y muestra la puntuación final
export function finalizarJuego(puntuacion) {
    const contenedorJuego = document.getElementById('contenedor-juego');
    contenedorJuego.innerHTML = `
        <p>Juego terminado. ¡Gracias por jugar!<br>Puntuación: ${puntuacion}</p>
        <button id="reiniciar">Reiniciar juego</button>
    `; // Muestra la puntuación final y un botón para reiniciar el juego

    document.getElementById('reiniciar').addEventListener('click', function() {
        location.reload(); // Recarga la página para restablecer el juego
    });
}
