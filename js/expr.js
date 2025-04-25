// Función principal para evaluar un paciente
function evaluarPaciente(datosPaciente) {
    // Calcular métricas
    const pesoIdeal = calcularPesoIdeal(datosPaciente.genero, datosPaciente.altura, datosPaciente.contextura);
    const imc = calcularIMC(datosPaciente.peso, datosPaciente.altura);
    const categoria = determinarCategoriaIMC(imc);
    const rangoSaludable = calcularRangoSaludable(datosPaciente.altura);
    const recomendaciones = generarRecomendaciones(datosPaciente, pesoIdeal, imc, categoria);

    // Crear objeto con resultados
    const resultados = {
        datosPaciente,
        pesoIdeal,
        imc,
        categoria,
        rangoSaludable,
        recomendaciones,
        fechaEvaluacion: new Date().toLocaleDateString()
    };

    // Guardar en la base de datos
    agregarPaciente(datosPaciente);

    return resultados;
}

// Función para mostrar resultados en HTML
function mostrarResultados(resultados, elementoHTML) {
    const { datosPaciente, pesoIdeal, imc, categoria, rangoSaludable, recomendaciones } = resultados;
    
    const html = `
        <div class="card mb-4">
            <div class="card-header bg-primary text-white">
                <h3>Resultados de la Evaluación</h3>
                <p class="mb-0">Fecha: ${new Date().toLocaleDateString()}</p>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <h4>Datos del Paciente</h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item"><strong>Género:</strong> ${datosPaciente.genero === 'hombre' ? 'Hombre' : 'Mujer'}</li>
                            <li class="list-group-item"><strong>Edad:</strong> ${datosPaciente.edad} años</li>
                            <li class="list-group-item"><strong>Altura:</strong> ${datosPaciente.altura} cm</li>
                            <li class="list-group-item"><strong>Peso actual:</strong> ${datosPaciente.peso} kg</li>
                            <li class="list-group-item"><strong>Contextura:</strong> ${datosPaciente.contextura === 'pequena' ? 'Pequeña' : datosPaciente.contextura === 'grande' ? 'Grande' : 'Mediana'}</li>
                            <li class="list-group-item"><strong>Actividad:</strong> ${datosPaciente.actividad.charAt(0).toUpperCase() + datosPaciente.actividad.slice(1)}</li>
                            <li class="list-group-item"><strong>Objetivo:</strong> ${datosPaciente.objetivo === 'bajar' ? 'Bajar de peso' : datosPaciente.objetivo === 'subir' ? 'Subir de peso' : 'Mantener peso'}</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h4>Resultados</h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item"><strong>Peso ideal:</strong> ${pesoIdeal} kg</li>
                            <li class="list-group-item"><strong>IMC:</strong> ${imc} (${categoria})</li>
                            <li class="list-group-item"><strong>Rango saludable:</strong> ${rangoSaludable.minimo} - ${rangoSaludable.maximo} kg</li>
                        </ul>
                    </div>
                </div>
                
                <div class="mt-4">
                    <h4>Recomendaciones Personalizadas</h4>
                    <ul class="list-group">
                        ${recomendaciones.map(rec => `<li class="list-group-item">• ${rec}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="alert alert-info mt-4">
                    <strong>Nota:</strong> Estas recomendaciones son generales. Para un plan personalizado, consulte con un profesional de la salud.
                </div>
            </div>
        </div>
    `;

    elementoHTML.innerHTML = html;
}