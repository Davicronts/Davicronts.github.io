// Actualiza la lista de personajes según la opción seleccionada
export function actualizarPersonajes(opcion, personajesFemeninos, personajesMasculinos) {
    let personajes = [];
    if (opcion === 'opcion1') {
        personajes = personajesFemeninos.concat(personajesMasculinos);
    } else if (opcion === 'opcion2') {
        personajes = personajesFemeninos;
    } else if (opcion === 'opcion3') {
        personajes = personajesMasculinos;
    }
    return ordenarArrayPorNombre(personajes);
}

// Actualiza las opciones del select según la lista de personajes
export function actualizarOpcionesSelect(personajesOrdenados, seleccionar) {
    seleccionar.innerHTML = '<option value="">Seleccionar personaje</option>';
    personajesOrdenados.forEach((personaje, indice) => {
        const opcion = document.createElement('option');
        opcion.value = indice;
        opcion.textContent = personaje.nombre;
        seleccionar.appendChild(opcion);
    });
}

// Ordena la lista de personajes por nombre
export function ordenarArrayPorNombre(array) {
    return array.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

// Muestra los detalles del personaje seleccionado
export function mostrarPersonaje(indice, personajes, seleccionar = null) {
    ocultarDetallesPersonaje();

    const personaje = personajes[indice];

    document.getElementById('personaje-nombre').textContent = personaje.nombre;
    document.getElementById('personaje-anime').textContent = personaje.anime;
    document.getElementById('personaje-imagen').src = personaje.imagen;
    document.getElementById('personaje-video').innerHTML = `<span class="titulo-video">${personaje.tituloVideo}</span><video width="700" height="500" preload="auto" controls><source src="${personaje.video}" type="video/webm"></video>`;
    document.getElementById('personaje-episodio').innerHTML = `<span class="titulo-episodio">Episodio 1</span><iframe width="700" height="500" src="${personaje.episodio}" allowfullscreen></iframe>`;
    document.getElementById('personaje-trailer').innerHTML = `<span class="titulo-trailer">Trailer</span><iframe width="700" height="500" src="${personaje.trailer}" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    document.getElementById('personaje-descripcion').textContent = personaje.descripcion;
    document.getElementById('personaje-url').href = personaje.url;
    document.getElementById('personaje-url').style.display = 'block';
    document.getElementById('personaje-url-db').href = personaje.db;
    document.getElementById('personaje-url-db').style.display = 'block';

    document.getElementById('personaje').style.display = 'flex';

    document.getElementById('personaje').scrollIntoView({
        block: 'start'
    });

    if (seleccionar) {
        seleccionar.value = indice;
    }
}

// Oculta los detalles del personaje seleccionado
export function ocultarDetallesPersonaje() {
    document.getElementById('personaje').style.display = 'none';
    document.getElementById('personaje-nombre').textContent = '';
    document.getElementById('personaje-anime').textContent = '';
    document.getElementById('personaje-imagen').src = '';
    document.getElementById('personaje-video').innerHTML = '';
    document.getElementById('personaje-episodio').innerHTML = '';
    document.getElementById('personaje-url').href = '';
    document.getElementById('personaje-url-db').href = '';

    document.getElementById('contenedor-grid').style.display = 'none';
    document.getElementById('grid-personajes').innerHTML = '';
    document.getElementById('busqueda').value = '';
    document.getElementById('mensaje-busqueda-vacia').style.display = 'none';
}

// Muestra el listado de personajes
export function mostrarListadoPersonajes(personajes) {
    ocultarDetallesPersonaje();

    document.getElementById('seleccionar').value = "";

    const contenedorGrid = document.getElementById('contenedor-grid');
    const gridPersonajes = document.getElementById('grid-personajes');
    gridPersonajes.innerHTML = '';

    personajes.forEach((personaje, indice) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = `
            <img src="${personaje.imagen}" alt="${personaje.nombre}">
            <h3>${personaje.nombre}</h3>
            <p>${personaje.anime}</p>
        `;

        item.addEventListener('click', function () {
            mostrarPersonaje(indice, personajes, document.getElementById('seleccionar'));
        });

        gridPersonajes.appendChild(item);
    });

    contenedorGrid.style.display = 'flex';
    document.getElementById('busqueda').style.display = 'block';
}

// Filtra los personajes según el texto de búsqueda
export function filtrarPersonajes(textoBusqueda, personajes) {
    const gridPersonajes = document.getElementById('grid-personajes');
    const resultadoBusqueda = personajes.filter(personaje =>
        personaje.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
        personaje.anime.toLowerCase().includes(textoBusqueda.toLowerCase())
    );

    gridPersonajes.innerHTML = '';

    if (resultadoBusqueda.length === 0) {
        document.getElementById('mensaje-busqueda-vacia').style.display = 'block';
    } else {
        resultadoBusqueda.forEach((personaje) => {
            const item = document.createElement('div');
            item.className = 'grid-item';
            item.innerHTML = `
                <img src="${personaje.imagen}" alt="${personaje.nombre}">
                <h3>${personaje.nombre}</h3>
                <p>${personaje.anime}</p>
            `;
            item.addEventListener('click', function () {
                mostrarPersonaje(personajes.indexOf(personaje), personajes, document.getElementById('seleccionar'));
            });

            gridPersonajes.appendChild(item);
        });
        document.getElementById('mensaje-busqueda-vacia').style.display = 'none';
    }
}

// Oculta todo el contenido principal
export function ocultarTodo() {
    document.querySelector('header').style.display = 'none';
    document.getElementById('contenedor-grid').style.display = 'none';
    ocultarDetallesPersonaje();
}