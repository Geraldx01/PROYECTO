        // Combo tabs PESTAÑAS
        document.addEventListener('DOMContentLoaded', function() {
            const opciones = document.querySelectorAll('.OpcionCombo');
            
            // Resultados para cada PESTAÑA
            const resultados = {
                startup: `
                    <h4 data-translate="startuph4">Soluciones para Startups Farmacéuticas</h4>
                    <p data-translate="startupP">Ofrecemos un paquete integral para empresas emergentes que incluye asesoramiento regulatorio inicial, diseño de estrategias de desarrollo de productos, conexión con CROs/CMOs calificados y planificación de rutas críticas para acelerar el tiempo al mercado.</p>
                    <ul>
                        <li data-translate="startupli1">Evaluación regulatoria inicial gratuita</li>
                        <li data-translate="startupli2">Diseño de estrategia de desarrollo</li>
                        <li data-translate="startupli3">Conexión con socios estratégicos</li>
                        <li data-translate="startupli4">Planificación de rutas críticas</li>
                    </ul>
                `,
                generic: `
                    <h4>Soluciones para Medicamentos Genéricos</h4>
                    <p>Servicios especializados para el desarrollo y registro de medicamentos genéricos, incluyendo estudios de bioequivalencia, estrategias de exclusividad y gestión de patentes.</p>
                    <ul>
                        <li>Estudios de bioequivalencia</li>
                        <li>Estrategias de exclusividad</li>
                        <li>Gestión de patentes</li>
                        <li>Optimización de procesos</li>
                    </ul>
                `,
                biotech: `
                    <h4>Soluciones para Biotecnología</h4>
                    <p>Asesoramiento especializado para productos biotecnológicos, incluyendo desarrollo de biosimilares, estrategias regulatorias para terapias avanzadas y diseño de plantas biotech.</p>
                    <ul>
                        <li>Desarrollo de biosimilares</li>
                        <li>Terapias avanzadas</li>
                        <li>Diseño de plantas</li>
                        <li>Caracterización analítica</li>
                    </ul>
                `,
                compliance: `
                    <h4>Soluciones para Cumplimiento Regulatorio</h4>
                    <p>Servicios completos para asegurar el cumplimiento con regulaciones locales e internacionales, incluyendo auditorías GMP, preparación para inspecciones y remediación regulatoria.</p>
                    <ul>
                        <li>Auditorías GMP</li>
                        <li>Preparación para inspecciones</li>
                        <li>Remediación regulatoria</li>
                        <li>Sistemas de calidad</li>
                    </ul>
                `,
                expansion: `
                    <h4>Soluciones para Expansión de Mercado</h4>
                    <p>Apoyo estratégico para la expansión internacional de productos farmacéuticos, incluyendo estrategias de registro, requerimientos locales y planificación de lanzamiento.</p>
                    <ul>
                        <li>Estrategias de registro internacional</li>
                        <li>Requerimientos locales</li>
                        <li>Planificación de lanzamiento</li>
                        <li>Estudios de mercado</li>
                    </ul>
                `
            };
            
            opciones.forEach(opcion => {
                opcion.addEventListener('click', function() {
                    // Remover clase Activo de todas las opciones
                    opciones.forEach(opt => opt.classList.remove('Activo'));
                    // Agregar clase Activo a la opción clickeada
                    this.classList.add('Activo');
                    // Actualizar el contenido del resultado
                    document.getElementById('resultadoCombo').innerHTML = resultados[this.dataset.resultado];
                });
            });
        });