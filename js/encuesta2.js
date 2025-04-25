// Inicializar EmailJS (Public Key)
emailjs.init('m8L4I9fK5JbICKIZK');

function evaluarEncuestaFarmacia() {
    // Obtener valores de los campos
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // Validar campos obligatorios
    if (!nombre || !email) {
        Swal.fire({
            title: 'Campos requeridos',
            text: 'Por favor complete su nombre y correo electrónico',
            icon: 'warning',
            confirmButtonText: 'Entendido'
        });
        return;
    }

    // Obtener respuestas de radio buttons
    let frecuencia = document.querySelector('input[name="frecuencia"]:checked')?.value;
    let atencionPersonal = document.querySelector('input[name="atencion_personal"]:checked')?.value;
    let recomendacion = document.querySelector('input[name="recomendacion"]:checked')?.value;

    // Validar preguntas obligatorias
    if (!frecuencia || !atencionPersonal || !recomendacion) {
        Swal.fire({
            title: 'Encuesta incompleta',
            text: 'Por favor responda todas las preguntas obligatorias',
            icon: 'warning',
            confirmButtonText: 'Entendido'
        });
        return;
    }

    // Obtener checkboxes seleccionados
    const productos = Array.from(document.querySelectorAll('input[name="productos"]:checked')).map(el => el.value);
    const servicios = Array.from(document.querySelectorAll('input[name="servicios_adicionales"]:checked')).map(el => el.value);

    // Obtener comentarios
    const comentarios = document.getElementById('comentarios').value;
    const sugerencias = document.getElementById('mejora_atencion').value;

    // Analizar respuestas
    const analisis = {
        frecuencia: analizarFrecuencia(frecuencia),
        atencion: analizarAtencion(atencionPersonal),
        servicios: analizarServicios(servicios),
        recomendacion: analizarRecomendacion(recomendacion),
        mejoras: sugerencias ? "Hemos tomado nota de tus sugerencias para mejorar: " + sugerencias : "Gracias por tu feedback"
    };

    // Mostrar resultados
    mostrarResultados(analisis);

    // Enviar por correo
    enviarResultadosPorEmail(nombre, email, analisis, comentarios);
}

function analizarFrecuencia(valor) {
    const mensajes = {
        "diario": "¡Gracias por ser nuestro cliente frecuente! Tenemos un descuento especial para ti en tu próxima compra.",
        "semanal": "Valoramos tu preferencia semanal. Pronto recibirás nuestras promociones exclusivas por correo.",
        "mensual": "Agradecemos tu visita mensual. Tenemos novedades constantemente, ¡visítanos pronto!",
        "ocasional": "Nos encantaría verte más seguido. Pregunta por nuestro programa de fidelización en tu próxima visita."
    };
    return mensajes[valor] || "Gracias por elegir nuestra farmacia.";
}

function analizarAtencion(valor) {
    const mensajes = {
        "5": "¡Nos alegra que califiques nuestra atención como excelente! Seguiremos manteniendo este estándar.",
        "4": "Gracias por calificar nuestra atención como muy buena. Trabajaremos para alcanzar la excelencia.",
        "3": "Agradecemos tu honestidad al calificar nuestra atención como buena. Mejoraremos para tu próxima visita.",
        "2": "Lamentamos que tu experiencia no haya sido la mejor. Estamos trabajando para mejorar nuestra atención.",
        "1": "Sentimos mucho que hayas tenido una mala experiencia. Nos contactaremos contigo para resolverlo."
    };
    return mensajes[valor] || "Valoramos tu opinión sobre nuestro servicio.";
}

function analizarServicios(servicios) {
    if (servicios.includes("ninguno")) {
        return "Gracias por tu feedback. Mejoraremos la difusión de nuestros servicios adicionales.";
    }

    if (servicios.length > 2) {
        return "¡Nos alegra que utilices varios de nuestros servicios adicionales!";
    }

    return "Agradecemos que utilices nuestros servicios. Tenemos más opciones que podrían interesarte.";
}

function analizarRecomendacion(valor) {
    const mensajes = {
        "5": "¡Gracias por tu confianza y recomendación! Seguiremos trabajando para merecerla.",
        "4": "Apreciamos que nos recomiendes. Trabajaremos para que tu próxima calificación sea aún mejor.",
        "3": "Entendemos tus reservas. Esperamos poder mejorar tu opinión en el futuro.",
        "2": "Lamentamos no cumplir con tus expectativas. Valoramos tu honestidad y trabajaremos para mejorar.",
        "1": "Sentimos mucho no haber estado a la altura. Nos contactaremos contigo para conocer más detalles."
    };
    return mensajes[valor] || "Agradecemos tu feedback honesto.";
}

function mostrarResultados(analisis) {
    document.getElementById('resultadoFrecuencia').textContent = analisis.frecuencia;
    document.getElementById('resultadoAtencion').textContent = analisis.atencion;
    document.getElementById('resultadoServicios').textContent = analisis.servicios;
    document.getElementById('resultadoRecomendacion').textContent = analisis.recomendacion;
    document.getElementById('resultadoMejoras').textContent = analisis.mejoras;

    document.getElementById('seccionResultados').style.display = 'block';
    document.getElementById('seccionResultados').scrollIntoView({ behavior: 'smooth' });

    Swal.fire({
        title: '¡Encuesta completada!',
        html: `
             <div style="text-align:left; margin-bottom:20px;">
                 <p>Gracias por tu tiempo, ${document.getElementById('nombre').value}.</p>
                 <p>Hemos enviado un resumen a tu correo electrónico.</p>
             </div>
        
             <iframe src="https://lottie.host/embed/95e96c3c-165b-4ecc-8234-61aaa8135f3d/rM5VnsYNNP.json" width="350" height="350"></iframe>
         `,
        confirmButtonText: 'Entendido',
        background: 'white',
        backdrop: `
             rgba(0, 102, 204, 0.6)
             url("https://lottie.host/95e96c3c-165b-4ecc-8234-61aaa8135f3d/rM5VnsYNNP.json")
             center top
             no-repeat
         `
        });

}

function enviarResultadosPorEmail(nombre, email, analisis, comentarios) {
    const templateParams = {
        to_name: nombre,
        to_email: email,
        frecuencia: analisis.frecuencia,
        atencion: analisis.atencion,
        servicios: analisis.servicios,
        recomendacion: analisis.recomendacion,
        mejoras: analisis.mejoras,
        comentarios: comentarios || 'No se proporcionaron comentarios adicionales'
    };

    emailjs.send('service_vvce1tv', 'template_elg982o', templateParams)
        .then(() => console.log('Correo enviado exitosamente'))
        .catch(error => console.error('Error al enviar el correo:', error));

}


function limpiarFormularioFarmacia() {
    // Limpiar campos de texto
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('domicilio_exp').value = '';
    document.getElementById('mejora_atencion').value = '';
    document.getElementById('comentarios').value = '';

    // Limpiar radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);

    // Limpiar checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);

    // Ocultar resultados
    document.getElementById('seccionResultados').style.display = 'none';
}


function mostrarEncuesta() {
    const encuesta = document.getElementById('ventanaEncuesta');
    encuesta.style.display = encuesta.style.display === 'block' ? 'none' : 'block';
}