// Traducciones en español e inglés
const translations = {
    // objeto de idioma español
    es: {
        inicio: "Inicio",
        menu: "menu",
        inicio: "Inicio",
        farmaciaOnline: "Farmacia Online",
        productosDestacados: "Productos Destacados",
        servicios: "Servicios",
        contactanos: "Contactanos",
        iniciarSesion: "Iniciar Sesion",
        registrarse: "Registrarse",
        carritoCompras: "Carrito de Compras",
        agregarEnvio: "Agregar envio ($5.00)",
        vaciarCarrito: "Vaciar Carrito",
        pagar: "Pagar",
        nuestrosProductos: "Nuestros Productos Destacados",
        precio: "Precio: $10.00",
        agregarCarrito: "Agregar al carrito",
        info: "Informacion",
        cerrar: "Cerrar",
        infoEnvioH1: "Servicio de Entregas a Domicilio",
        infoEnvioP: "Estimado paciente, te informamos que por políticas de la farmacia no brindamos el servicio de entrega a domicilio después de las 4 p.m. en las siguientes zonas:",
        infoEnvioSpan: "*Barrio San Martin, El coco, Cocal, Cuatro Reinas, San Alberto, Los Carmenes*",
        nuestrosServicios: "Nuestros Servicios",
        nuestrosServiciosB: "Dispensación de Medicamentos",
        nuestrosServiciosBoton: "Más Información",
        name: "Nombre Completo",
        email: "Correo Electronico",
        phone: "Numero de Telefono",
        message: "Asunto",
        enviar: "Enviar",
        whatsapp: "O contactanos por Whatsapp",
        direccion: "Dirección: Calle Falsa 123, Ciudad, País",
        siguenos: "Siguenos en",
        copyr: "2021 Farmacia Emma. Todos los derechos reservados.",
        rapidos: "Enlaces Rapidos",
        nuestrosServiciosB1: "Asesoría Farmacéutica",
        nuestrosServiciosB2: "Servicios de Salud Preventiva",
        nuestrosServiciosB3: "Preparacion de Medicamentos Personalizados",
        nuestrosServiciosB4: "Venta de Productos para el Cuidado de la Salud ",
        nuestrosServiciosB5: "Servicios Adicionales",
        tourVirtual: "Tour Virtual 360°",
        farmaciaEmma: "Farmacia Emma",
        title: "Iniciar Sesión",
        email: "Correo Electrónico",
        contraseña: "Contraseña",

        productos: "Productos",
        instrumentos: "Instrumentos Farmaceuticos",
        consultoria: "Consultoria",
        acercaDe: "Acerca de",
        nosotros: "Nosotros",
        proyectos: "Proyectos",
        farmaciasDisponibles: "Ubicaciones",
        farmaciaVirtual: "Farmacia Virtual 360°",
        Suscribete: "Suscribete y Ahorra",

        Descripcion1: "Descripcion: Proponcionamos medicamentos recetados y de venta libre, asegurándonos de que los pacientes reciban el tratamiento adecuado.",

        beneficio1: "Beneficios: Garantizamos que los medicamentos sean seguros, efectivos y estén correctamente etiquetados con instrucciones claras para su uso.",

        Descripcion2: "Descripción: Ofrecemos asesoramiento personalizado sobre el uso correcto de medicamentos, posibles efectos secundarios, interacciones y recomendaciones para el manejo de enfermedades.",

        beneficio2: "Beneficios: Ayudamos a los pacientes a entender su tratamiento y a usarlo de manera segura y efectiva.",

        Descripcion3: "Descripción: Ofrecemos vacunación (por ejemplo, contra la gripe, el COVID-19 o el virus del papiloma humano), pruebas de detección de enfermedades (como diabetes, hipertensión o colesterol) y programas de deshabituación tabáquica.",

        beneficio3: "Beneficios: Contribuimos a la prevención de enfermedades y promuevemos estilos de vida saludables.",

        Descripcion4: "Descripción: Contamos con servicio de farmacia magistral, donde preparamos medicamentos específicos según las necesidades individuales del paciente, como fórmulas pediátricas, cremas dermatológicas o medicamentos sin ciertos excipientes.",

        beneficio4: "Beneficios: Ofrecemos soluciones personalizadas para pacientes con necesidades especiales.",

        Descripcion5: "Descripción: Además de medicamentos, tambien vendemos productos como vitaminas, suplementos alimenticios, productos de higiene personal, dispositivos médicos (tensiómetros, glucómetros) y artículos de primeros auxilios.",

        beneficio5: "Beneficios: Facilitamos el acceso a productos esenciales para el cuidado diario de la salud.",

        Adicionales1: "Entrega a Domicilio: Ofrecemos entregas de medicamentos domicilio, especialmente para pacientes con movilidad reducida.",

        Adicionales2: "Programas de Fidelización: Descuentos o beneficios para clientes frecuentes.",

        Adicionales3: "Educación para la Salud: Charlas o talleres sobre temas de salud, como nutrición, manejo del estrés o prevención de enfermedades.",

        // envio:"¿Desea envío? ($5.00)",

        encuestaSatisfaccion: "Encuesta de Satisfaccion",

        opinion: "Farmacia Emma - Tu opinión nos ayuda a mejorar",

        nombreCompleto: "1. Nombre completo",

        correoElectronicoEncuesta: "2. Correo electrónico",

        edad: "3. Edad",

        pregunta4: "4. ¿Con qué frecuencia visita nuestra farmacia?",

        pregunta4A: "Diario o casi diario",
        pregunta4B: "Semanal",
        pregunta4C: "Mensual",
        pregunta4D: "Ocasionalmente",




        pregunta5: "5. ¿Qué productos suele comprar en nuestra farmacia? (Seleccione todos los que apliquen)",

        pregunta5A: "Medicamentos con receta",
        pregunta5B: "Medicamentos genéricos",
        pregunta5C: "Productos cosméticos",
        pregunta5D: "Artículos de cuidado personal",
        pregunta5E: "Suplementos vitamínicos",
        pregunta5F: "Otros (especifique abajo)",


        pregunta6: "6. Califique la variedad de productos que ofrecemos",

        pregunta6A: "Excelente - Gran variedad para todas mis necesidades",
        pregunta6B: "Muy buena - Casi siempre encuentro lo que busco",
        pregunta6C: "Buena - A veces falta algún producto",
        pregunta6D: "Regular - Frecuentemente no encuentro lo que necesito",
        pregunta6E: "Mala - Muy poca variedad",

        pregunta7: "7. ¿Cómo calificaría los precios de nuestros productos?",

        pregunta7A: "Muy económicos - Los mejores precios de la zona",
        pregunta7B: "Económicos - Precios competitivos",
        pregunta7C: "Comparables a la competencia - Similares a otras farmacias",
        pregunta7D: "Algo elevados - Más caros que en otros lugares",
        pregunta7E: "Muy elevados - Precios significativamente más altoss",

        pregunta8: "8. ¿Qué métodos de pago utiliza con más frecuencia? (Seleccione todos los que apliquen)",

        pregunta8A: "Efectivo",
        pregunta8B: "Tarjeta de débito",
        pregunta8C: "Tarjeta de crédito",
        pregunta8D: "Transferencia bancaria",
        pregunta8E: "Aplicaciones móviles (Mercado Pago, etc.)",

        pregunta9: "9. ¿Ha utilizado nuestro servicio de entrega a domicilio?",

        pregunta9A: "Sí",
        pregunta9B: "No",


        pregunta10: "10. Si respondió 'Sí' a la pregunta anterior, ¿cómo fue su experiencia con el servicio a domicilio?",

        pregunta11: "11. ¿Cómo calificaría la atención de nuestro personal?",

        pregunta11A: "Excelente - Muy amables, conocedores y serviciales",
        pregunta11B: "Muy buena - Atentos y resolvieron mis dudas",
        pregunta11C: "Buena - Correcta pero sin destacar",
        pregunta11D: "Regular - Algunos empleados podrían mejorar",
        pregunta11E: "Mala - Poco amables o desinteresados",

        pregunta12: "12. ¿Qué sugerencias tiene para mejorar nuestra atención al cliente?",

        pregunta13: "13. ¿Conoce nuestros servicios adicionales? (Seleccione todos los que conozca)",

        pregunta13A: "Medición de presión arterial/glucosa",
        pregunta13B: "Vacunación",
        pregunta13C: "Asesoría farmacéutica",
        pregunta13D: "Programas de fidelización",
        pregunta13E: "No conozco ninguno",

        pregunta14: "14. ¿Recomendaría nuestra farmacia a familiares o amigos?",

        pregunta14A: "Definitivamente sí - Siempre la recomiendo",
        pregunta14B: "Probablemente sí - En general es buena",
        pregunta14C: "No estoy seguro - Depende de lo que necesiten",
        pregunta14D: "Probablemente no - Prefiero otras opciones",
        pregunta14E: "Definitivamente no - No la recomendaría",

        pregunta15: "15. ¿Tiene algún comentario adicional sobre nuestros productos o servicios?",

        limpiarForm: "Limpiar Formulario",

        //CONSULTARIADO

        Consultoriah1: "Consultoría Farmacéutica de Excelencia",

        Consultoriap: "Soluciones integrales para la industria farmacéutica, desde desarrollo de productos hasta cumplimiento regulatorio.",

        consultoriaA: "Conozca más",

        Consultoriah2: "Encuentre su Solución",

        consultoriah3: "Seleccione su necesidad:",

        startup: "Startup Farmacéutica",

        genericos: "Genéricos",

        biotecnologia: "Biotecnología",

        cumplimiento: "Cumplimiento",

        expansion: "Expansión de Mercado",

        consultoriah4: "Soluciones para Startups Farmacéuticas",

        Consultoriap2: "Ofrecemos un paquete integral para empresas emergentes que incluye asesoramiento regulatorio inicial, diseño de estrategias de desarrollo de productos, conexión con CROs/CMOs calificados y planificación de rutas críticas para acelerar el tiempo al mercado.",

        li1: "Evaluación regulatoria inicial gratuita",

        li2: "Diseño de estrategia de desarrollo",

        li3: "Conexión con socios estratégicos",

        li4: "Planificación de rutas críticas",

        startuph4: "Soluciones para Startups Farmacéuticas",

        startupP: "Ofrecemos un paquete integral para empresas emergentes que incluye asesoramiento regulatorio inicial, diseño de estrategias de desarrollo de productos, conexión con CROs/CMOs calificados y planificación de rutas críticas para acelerar el tiempo al mercado.",

        startupli1: "Evaluación regulatoria inicial gratuita",

        startupli2: "Diseño de estrategia de desarrollo",

        startupli3: "Conexión con socios estratégicos",

        startupli4: "Planificación de rutas críticas",

        // NOSOTROS

        nuestraHistoria: "Nuestra Historia",

        nuestraHistoriaP1: "Farmacia Emma fue fundada en 2021 por la Dra. Emma Méndez, un farmacéutico apasionado por brindar atención personalizada y medicamentos de calidad a la comunidad. Lo que comenzó como una pequeña farmacia de barrio en el corazón de la ciudad, hoy se ha convertido en una red de 12 establecimientos que sirven a más de 50,000 pacientes al mes.",

        nuestraHistoriaP2: "En 2022, bajo la dirección de la hija de la fundadora, la Dra. Laura Hernandez, implementamos nuestro programa de farmacia digital, siendo pioneros en la integración de tecnología para mejorar el servicio al cliente. Hoy seguimos innovando con nuestra aplicación móvil y servicio de entrega a domicilio.",

        mision: "Misión",

        misionP: "Proporcionar productos farmacéuticos y servicios de salud de la más alta calidad, con un equipo profesional comprometido en ofrecer atención personalizada, consejos expertos y soluciones integrales para el bienestar de nuestros clientes.",

        vision: "Visión",

        visionP: "Ser reconocidos como la cadena de farmacias líder en innovación y servicio al cliente, expandiendo nuestra presencia a nivel nacional mientras mantenemos nuestros valores fundamentales de integridad, excelencia y compromiso con la comunidad.",

        valores: "Nuestros Valores",

        valor1Strong: "Integridad:",

        valor1Li: "Actuamos con honestidad y transparencia en todas nuestras relaciones.",

        valor2Li: "Buscamos la mejora continua en nuestros productos y servicios.",

        valor2Strong: "Excelencia:",

        valor3Li: "Escuchamos y comprendemos las necesidades de cada paciente.",

        valor3Strong: "Empatía:",

        valor4Li: " Adoptamos tecnologías y métodos que mejoran la experiencia del cliente.",

        valor4Strong: "Innovación:",

        valor5Li: "Contribuimos activamente al bienestar de nuestra comunidad.",

        valor5Strong: "Responsabilidad social:",

        nuestroEquipo: "Nuestro Equipo",

        laborEmma: "Directora General",

        equipoEmma1: "Farmacéutica con más de 20 años de experiencia y especialización en farmacología clínica.",

        laborJavier: "Jefe de Área Clínica",

        equipoJavier: "Experto en atención farmacéutica y programas de adherencia terapéutica.",

        laborAna: "Responsable de Servicios al Cliente",

        equipoAna: "Especialista en experiencia del paciente y programas de fidelización.",

        servicioB1: "Nuestros farmacéuticos están disponibles para resolver todas tus dudas sobre medicamentos y tratamientos.",

        dosificaion: "Programa de Dosificación Personalizada",

        dosificaionDescripcion: "Preparamos tus medicamentos en dosis exactas y organizadas según tu tratamiento.",

        domicilio: "Entrega rápida y segura de tus medicamentos en la comodidad de tu hogar.",

        controlParametros: "Control de Parámetros Básicos",

        descripcionParametros: "Medición gratuita de presión arterial, glucosa y otros parámetros de salud.",

        farmaciaDigital: "Farmacia Digital",

        DigitalDecrip: "Gestiona tus recetas, pedidos y recordatorios de medicación a través de nuestra app.",

        adherencia: "Programas de Adherencia Terapéutica",

        adherenciaDescrip: "Seguimiento personalizado para asegurar el correcto cumplimiento de tus tratamientos."

























































































































    },






    en: {
        inicio: "Home",
        menu: "Menu",
        inicio: "Home",
        farmaciaOnline: "Online Pharmacy",
        productosDestacados: "Featured Products",
        servicios: "Services",
        contactanos: "Contact Us",
        iniciarSesion: "Login",
        registrarse: "Register",

        carritoCompras: "Shopping Cart",
        subtotal: "Subtotal: $",
        total: "Total: $",
        agregarEnvio: "Add shipping ($5.00)",
        vaciarCarrito: "Empty Cart",
        pagar: "Checkout",
        nuestrosProductos: "Our Featured Products",
        precio: "Price: $10.00",
        agregarCarrito: "Add to cart",
        info: "Information",
        info2: "Information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum earum, dignissimos aperiam consequatur debitis, ab repellendus quaerat eveniet magnam illo molestias cumque id autem quisquam quae corrupti, impedit tenetur. Placeat",
        cerrar: "Close",
        infoEnvioH1: "Home Delivery Service",
        infoEnvioP: "Dear patient, we inform you that due to pharmacy policies, we do not provide home delivery service after 4 p.m. in the following areas:",
        infoEnvioSpan: "*San Martin Neighborhood, El Coco, Cocal, Cuatro Reinas, San Alberto, Los Carmenes*",
        nuestrosServicios: "Our Services",
        nuestrosServiciosB: "Medication Dispensing",
        nuestrosServiciosBoton: "More Information",
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        message: "Subject",
        enviar: "Send",
        whatsapp: "Or contact us via WhatsApp",
        direccion: "Address: 123 Fake Street, City, Country",
        siguenos: "Follow Us",
        copyr: "2021 Emma Pharmacy. All rights reserved.",
        rapidos: "Quick Links",
        nuestrosServiciosB1: "Pharmaceutical Counseling",
        nuestrosServiciosB2: "Preventive Health Services",
        nuestrosServiciosB3: "Custom Medication Preparation",
        nuestrosServiciosB4: "Sale of Health Care Products",
        nuestrosServiciosB5: "Additional Services",
        tourVirtual: "360° Virtual Tour",
        farmaciaEmma: "Emma Pharmacy",
        title: "Login",
        email: "Email",
        contraseña: "Password",

        productos: "Products",
        instrumentos: "Pharmaceutical Instruments",
        consultoria: "Consulting",
        acercaDe: "About",
        nosotros: "About Us",
        proyectos: "Projects",
        farmaciasDisponibles: "Locations",
        farmaciaVirtual: "360° Virtual Pharmacy",
        Suscribete: "Subscribe and Save",

        Descripcion1: "Description: We provide both prescription and over-the-counter medications, ensuring that patients receive the appropriate treatment.",

        beneficio1: "Benefits: We ensure that medications are safe, effective, and properly labeled with clear instructions for use.",

        Descripcion2: "Description: We offer personalized advice on the proper use of medications, possible side effects, interactions, and recommendations for managing illnesses.",

        beneficio2: "Benefits: We help patients understand their treatment and use it safely and effectively.",

        Descripcion3: "Description: We provide vaccinations (e.g., for flu, COVID-19, or HPV), disease screenings (such as for diabetes, hypertension, or cholesterol), and smoking cessation programs.",

        beneficio3: "Benefits: We contribute to disease prevention and promote healthy lifestyles.",

        Descripcion4: "Description: We offer compounding pharmacy services, preparing specific medications tailored to individual patient needs, such as pediatric formulas, dermatological creams, or medications without certain excipients.",

        beneficio4: "Benefits: We provide personalized solutions for patients with special needs.",

        Descripcion5: "Description: In addition to medications, we also sell products such as vitamins, dietary supplements, personal hygiene items, medical devices (blood pressure monitors, glucose meters), and first aid supplies.",

        beneficio5: "Benefits: We facilitate access to essential products for daily health care.",

        Adicionales1: "Home Delivery: We offer home delivery of medications, especially for patients with limited mobility.",

        Adicionales2: "Loyalty Programs: Discounts or benefits for frequent customers.",

        Adicionales3: "Health Education: Talks or workshops on health topics such as nutrition, stress management, or disease prevention.",

        // envio: "Would you like delivery? ($5.00)",

        encuestaSatisfaccion: "Satisfaction Survey",

        opinion: "Emma Pharmacy - Your feedback helps us improve",

        nombreCompleto: "1. Full Name",

        correoElectronicoEncuesta: "2. Email address",

        edad: "3. Age",

        pregunta4: "4. How often do you visit our pharmacy?",

        pregunta4A: "Daily or almost daily",
        pregunta4B: "Weekly",
        pregunta4C: "Monthly",
        pregunta4D: "Occasionally",

        pregunta5: "5. What products do you usually purchase at our pharmacy? (Select all that apply)",

        pregunta5A: "Prescription medications",
        pregunta5B: "Generic medications",
        pregunta5C: "Cosmetic products",
        pregunta5D: "Personal care items",
        pregunta5E: "Vitamin supplements",
        pregunta5F: "Other (please specify below)",

        pregunta6: "6. Rate the variety of products we offer",

        pregunta6A: "Excellent – Great variety for all my needs",
        pregunta6B: "Very Good – I almost always find what I'm looking for",
        pregunta6C: "Good – Sometimes a product is missing",
        pregunta6D: "Fair – I often can't find what I need",
        pregunta6E: "Poor – Very limited variety",

        pregunta7: "7. How would you rate our product prices?",

        pregunta7A: "Very affordable – Best prices in the area",
        pregunta7B: "Affordable – Competitive prices",
        pregunta7C: "Comparable to competitors – Similar to other pharmacies",
        pregunta7D: "Somewhat high – More expensive than other places",
        pregunta7E: "Very high – Significantly more expensive",

        pregunta8: "8. Which payment methods do you use most frequently? (Select all that apply)",

        pregunta8A: "Cash",
        pregunta8B: "Debit card",
        pregunta8C: "Credit card",
        pregunta8D: "Bank transfer",
        pregunta8E: "Mobile apps (e.g., Mercado Pago)",

        pregunta9: "9. Have you used our home delivery service?",

        pregunta9A: "Yes",
        pregunta9B: "No",

        pregunta10: "10. If you answered 'Yes' to the previous question, how was your experience with the home delivery service?",

        pregunta11: "11. How would you rate the attention provided by our staff?",

        pregunta11A: "Excellent – Very friendly, knowledgeable, and helpful",
        pregunta11B: "Very Good – Attentive and answered my questions",
        pregunta11C: "Good – Adequate but nothing outstanding",
        pregunta11D: "Fair – Some staff members could improve",
        pregunta11E: "Poor – Unfriendly or uninterested",

        pregunta12: "12. What suggestions do you have to improve our customer service?",

        pregunta13: "13. Are you aware of our additional services? (Select all that apply)",

        pregunta13A: "Blood pressure/glucose monitoring",
        pregunta13B: "Vaccination",
        pregunta13C: "Pharmaceutical advice",
        pregunta13D: "Loyalty programs",
        pregunta13E: "I’m not aware of any",

        pregunta14: "14. Would you recommend our pharmacy to family or friends?",

        pregunta14A: "Definitely yes – I always recommend it",
        pregunta14B: "Probably yes – Overall it’s good",
        pregunta14C: "Not sure – Depends on what they need",
        pregunta14D: "Probably not – I prefer other options",
        pregunta14E: "Definitely not – I wouldn’t recommend it",

        pregunta15: "15. Do you have any additional comments about our products or services?",

        limpiarForm: "Clear Form",



        // CONSULTARIADO

        Consultoriah1: "Pharmaceutical Consulting Excellence",
        Consultoriap: "Comprehensive solutions for the pharmaceutical industry, from product development to regulatory compliance.",
        consultoriaA: "Learn more",
        Consultoriah2: "Find Your Solution",
        consultoriah3: "Select your need:",
        startup: "Pharmaceutical Startup",
        genericos: "Generics",
        biotecnologia: "Biotechnology",
        cumplimiento: "Compliance",
        expansion: "Market Expansion",
        consultoriah4: "Solutions for Pharmaceutical Startups",
        Consultoriap2: "We offer a comprehensive package for emerging companies that includes initial regulatory advice, product development strategy design, connection with qualified CROs/CMOs, and planning of critical paths to accelerate time to market.",
        li1: "Free initial regulatory evaluation",
        li2: "Development strategy design",
        li3: "Connection with strategic partners",
        li4: "Critical path planning",

        startuph4: "Solutions for Pharmaceutical Startups",

        Consultoriap2: "We offer a comprehensive package for emerging companies that includes initial regulatory advice, product development strategy design, connection with qualified CROs/CMOs, and critical path planning to accelerate time to market.",

        li1: "Free initial regulatory evaluation",
        li2: "Development strategy design",
        li3: "Connection with strategic partners",
        li4: "Critical path planning",

        startuph4: "Solutions for Pharmaceutical Startups",
        startupP: "We offer a comprehensive package for emerging companies that includes initial regulatory advice, product development strategy design, connection with qualified CROs/CMOs, and critical path planning to accelerate time to market.",

        startupli1: "Free initial regulatory evaluation",
        startupli2: "Development strategy design",
        startupli3: "Connection with strategic partners",
        startupli4: "Critical path planning",

        // NOSOTROS

        nuestraHistoria: "Our History",

        nuestraHistoriaP1: "Emma Pharmacy was founded in 2021 by Dr. Emma Méndez, a pharmacist passionate about providing personalized care and quality medications to the community. What began as a small neighborhood pharmacy in the heart of the city has now become a network of 12 locations serving over 50,000 patients per month.",

        nuestraHistoriaP2: "In 2022, under the leadership of the founder's daughter, Dr. Laura Hernandez, we implemented our digital pharmacy program, becoming pioneers in integrating technology to enhance customer service. Today, we continue to innovate with our mobile app and home delivery service.",


        mision: "Mission",

        misionP: "To provide pharmaceutical products and healthcare services of the highest quality, with a professional team committed to offering personalized care, expert advice, and comprehensive solutions for the well-being of our customers.",

        vision: "Vision",

        visionP: "To be recognized as the leading pharmacy chain in innovation and customer service, expanding our presence nationwide while maintaining our core values of integrity, excellence, and commitment to the community.",

        valores: "Our Values",

        valor1Strong: "Integrity:",
        valor1Li: "We act with honesty and transparency in all our relationships.",

        valor2Li: "We strive for continuous improvement in our products and services.",

        valor2Strong: "Excellence:",

        valor3Li: "We listen to and understand the needs of each patient.",

        valor3Strong: "Empathy:",

        valor4Li: "We adopt technologies and methods that enhance the customer experience.",

        valor4Strong: "Innovation:",

        valor5Li: "We actively contribute to the well-being of our community.",

        valor5Strong: "Social Responsibility:",

        nuestroEquipo: "Our Team",

        laborEmma: "General Director",
        equipoEmma1: "Pharmacist with over 20 years of experience and specialization in clinical pharmacology.",

        laborJavier: "Head of Clinical Area",
        equipoJavier: "Expert in pharmaceutical care and therapeutic adherence programs.",

        laborAna: "Customer Service Manager",
        equipoAna: "Specialist in patient experience and loyalty programs.",

        servicioB1: "Our pharmacists are available to answer all your questions about medications and treatments.",

        dosificaion: "Personalized Dosing Program",

        dosificaionDescripcion: "We prepare your medications in exact doses and organized according to your treatment.",

        domicilio: "Fast and secure delivery of your medications to the comfort of your home.",

        controlParametros: "Basic Parameter Monitoring",

        descripcionParametros: "Free measurement of blood pressure, glucose, and other health parameters.",

        farmaciaDigital: "Digital Pharmacy",

        DigitalDecrip: "Manage your prescriptions, orders, and medication reminders through our app.",

        adherencia: "Therapeutic Adherence Programs",

        adherenciaDescrip: "Personalized follow-up to ensure proper compliance with your treatments."


























    }

};





// function para cambiar el idioma
function changeLanguage() {
    // conversion del lenguaje html
    const lang = document.documentElement.lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;

    // cambiar texto de los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        // asignacion de atributo data-translate
        const key = element.getAttribute('data-translate');
        // elementos html sean traducidos por las llaves lang - key
        element.innerHTML = translations[lang][key];
    });
}

