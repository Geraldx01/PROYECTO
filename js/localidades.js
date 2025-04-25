// creamos un objeto llamado opciones con varias propiedades donde cada propiedad es un numero y a su ves es un objeto anidado con diferente informacion, tanto para almecenar la imagen como la informacion
const farmacias = {
    1: {
        imagen: "img/Escazu.jpg",
        informacion: "Ubicado en: Centro Comercial Oxígeno, Escazú. Zona moderna y de fácil acceso.",
        telefono: "Contactenos al: 2210-1234"
    },
    2: {
        imagen: "img/MallsanPedro.jpg",
        informacion: "Ubicado en: Mall San Pedro, San José. Punto estratégico en el área metropolitana.",
        telefono: "Contactenos al: 2283-5678"
    },
    3: {
        imagen: "img/LimonCentro.jpg",
        informacion: "Ubicado en: Centro de Limón, 200 metros oeste del INS.",
        telefono: "Contactenos al: 2758-1122"
    },
    4: {
        imagen: "img/Alajuela.avif",
        informacion: "Ubicado en: 50 metros este de la Plaza de Deportes, Alajuela centro.",
        telefono: "Contactenos al: 2430-3344"
    },
    5: {
        imagen: "img/Cartago.jpeg",
        informacion: "Ubicado en: Diagonal al Banco BCR, Av. 1 del Comercio, Cartago centro.",
        telefono: "Contactenos al: 2552-7788"
    },
    6: {
        imagen: "img/Puntarenas.jpg",
        informacion: "Ubicado en: Paseo de los Turistas, cerca del muelle principal, Puntarenas.",
        telefono: "Contactenos al: 2661-4455"
    },
    7: {
        imagen: "img/Guapiles.jpg",
        informacion: "Ubicado en: 125 metros oeste de Farmacia Fischel, avenida del comercio, Guápiles.",
        telefono: "Contactenos al: 2710-9900"
    },
    8: {
        imagen: "img/Turrialba.jpg",
        informacion: "Ubicado en: 100 metros oeste del Parque Morazán, junto al Automercado, Turrialba.",
        telefono: "Contactenos al: 2556-2233"
    }
};


const selectorOpciones = document.getElementById('farmacias');
const contenidoDinamico = document.getElementById('contenidoDinamico');
const botonReiniciar = document.getElementById('botonReiniciar');

// Función para mostrar la imagen de inicio
function mostrarInicio() {
    contenidoDinamico.innerHTML = `
        <img src="img/DALL·E 2025-01-22 17.15.0 .webp" alt="Imagen de inicio" class="imagen-inicio">
    `;
}

// Evento para cambiar el contenido dinámico
selectorOpciones.addEventListener('change', function() {
    const valorSeleccionado = this.value;

    if (valorSeleccionado == 0) {
        mostrarInicio();
    } else {
        const opcionSeleccionada = farmacias[valorSeleccionado];
        contenidoDinamico.innerHTML = `
            <img src="${opcionSeleccionada.imagen}" alt="Farmacia Emma" class="imganes-farmacia">
            <ul>
            <li style="color: #fff; font-size: 20px;" class="Informacion">${opcionSeleccionada.informacion}</li>

            <li style="color: #fff; font-size: 20px;" class="Informacion">${opcionSeleccionada.telefono}</li>

            </ul>
        `;
    }
});

// Evento para reiniciar las opciones
botonReiniciar.addEventListener('click', function() {
    selectorOpciones.selectedIndex = 0; // Reinicia el selector
    mostrarInicio(); // Muestra la imagen de inicio
});