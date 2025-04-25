

// Función para manejar el envío del formulario
function manejarEnvioFormulario(event) {
    event.preventDefault();
    
    // Obtener valores del formulario
    const datosPaciente = {
        genero: document.getElementById('genero').value,
        edad: document.getElementById('edad').value,
        altura: parseInt(document.getElementById('altura').value),
        peso: parseFloat(document.getElementById('peso').value),
        contextura: document.getElementById('contextura').value,
        actividad: document.getElementById('actividad').value,
        objetivo: document.getElementById('objetivo').value
    };

    // Validar datos
    if (Object.values(datosPaciente).some(val => !val)) {
        alert('Por favor complete todos los campos del formulario.');
        return;
    }

    // Evaluar paciente
    const resultados = evaluarPaciente(datosPaciente);
    
    // Mostrar resultados
    mostrarResultados(resultados, document.getElementById('resultado'));
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Configurar evento del formulario
    document.getElementById('calculadora').addEventListener('submit', manejarEnvioFormulario);
    
    // Configurar botón de limpiar
    document.getElementById('btnLimpiar').addEventListener('click', function() {
        document.getElementById('calculadora').reset();
        document.getElementById('resultado').innerHTML = `
            <div class="alert alert-info">
                Complete el formulario para calcular su peso ideal y obtener recomendaciones personalizadas.
            </div>
        `;
    });
});

// Función para calcular peso ideal basado en fórmulas médicas
function calcularPesoIdeal(genero, altura, contextura) {
    let pesoIdeal;
    
    // Fórmula de Lorentz modificada
    if (genero === 'hombre') {
        pesoIdeal = (altura - 100) - ((altura - 150) / 4);
    } else {
        pesoIdeal = (altura - 100) - ((altura - 150) / 2.5);
    }
    
    // Ajuste por contextura
    switch(contextura) {
        case 'pequena':
            pesoIdeal *= 0.95;
            break;
        case 'grande':
            pesoIdeal *= 1.05;
            break;
    }
    
    return parseFloat(pesoIdeal.toFixed(1));
}

// Función para calcular IMC
function calcularIMC(peso, altura) {
    const alturaMetros = altura / 100;
    return parseFloat((peso / (alturaMetros * alturaMetros)).toFixed(1));
}

// Función para determinar categoría de peso según IMC
function determinarCategoriaIMC(imc) {
    if (imc < 18.5) return 'Bajo peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Sobrepeso';
    if (imc < 35) return 'Obesidad grado I';
    if (imc < 40) return 'Obesidad grado II';
    return 'Obesidad grado III';
}

// Función para calcular rango de peso saludable
function calcularRangoSaludable(altura) {
    const imcMin = 18.5;
    const imcMax = 24.9;
    const alturaMetros = altura / 100;
    
    return {
        minimo: parseFloat((imcMin * alturaMetros * alturaMetros).toFixed(1)),
        maximo: parseFloat((imcMax * alturaMetros * alturaMetros).toFixed(1))
    };
}

// Función para generar recomendaciones personalizadas
function generarRecomendaciones(paciente, pesoIdeal, imc, categoria) {
    const recomendaciones = [];
    const { edad, actividad, objetivo } = paciente;
    const diferencia = paciente.peso - pesoIdeal;

    // Recomendaciones según objetivo
    if (objetivo === 'bajar' && diferencia <= 0) {
        recomendaciones.push('Su peso ya está por debajo del ideal para su objetivo');
    } else if (objetivo === 'subir' && diferencia >= 0) {
        recomendaciones.push('Su peso ya está por encima del ideal para su objetivo');
    } else {
        switch(objetivo) {
            case 'bajar':
                recomendaciones.push(`Reducir aproximadamente ${Math.abs(diferencia).toFixed(1)} kg para alcanzar peso ideal`);
                break;
            case 'subir':
                recomendaciones.push(`Aumentar aproximadamente ${Math.abs(diferencia).toFixed(1)} kg para alcanzar peso ideal`);
                break;
            case 'mantener':
                if (Math.abs(diferencia) > 2) {
                    recomendaciones.push(`Ajustar ${(diferencia).toFixed(1)} kg para mantener peso ideal`);
                } else {
                    recomendaciones.push('Mantener hábitos actuales para conservar peso saludable');
                }
                break;
        }
    }

    // Recomendaciones por categoría IMC
    switch(categoria) {
        case 'Bajo peso':
            recomendaciones.push('Consumir alimentos ricos en nutrientes y calorías');
            recomendaciones.push('Realizar entrenamiento de fuerza para ganar masa muscular');
            break;
        case 'Peso normal':
            recomendaciones.push('Mantener dieta balanceada y variada');
            break;
        case 'Sobrepeso':
        case 'Obesidad grado I':
            recomendaciones.push('Reducir consumo de alimentos procesados y azúcares');
            recomendaciones.push('Aumentar consumo de frutas, verduras y fibra');
            break;
        default:
            recomendaciones.push('Consulta con especialista en nutrición requerida');
    }

    // Recomendaciones por edad
    if (edad.includes('+') || edad.split('-')[0] > 50) {
        recomendaciones.push(
            'Control regular de presión arterial y glucosa',
            'Asegurar adecuado consumo de calcio y vitamina D'
        );
    }

    // Recomendaciones por actividad
    switch(actividad) {
        case 'sedentario':
            recomendaciones.push('Iniciar con 30 minutos de caminata diaria');
            break;
        case 'ligero':
            recomendaciones.push('Incluir 2-3 días de ejercicio moderado por semana');
            break;
        case 'moderado':
            recomendaciones.push('Mantener rutina actual de ejercicio');
            break;
        case 'intenso':
        case 'atleta':
            recomendaciones.push('Asegurar adecuada hidratación y recuperación');
            break;
    }

    return recomendaciones;
}


function agregarPaciente(paciente) {
    return pacientesDB[pacientesDB.push({
        ...paciente,
        id: pacientesDB.length + 1,
        fechaRegistro: new Date().getFullYear()
    }) - 1];
}

