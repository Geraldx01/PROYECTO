document.addEventListener('DOMContentLoaded', function() {
    const iniciarTourBtn = document.getElementById('iniciarTour');

    iniciarTourBtn.addEventListener('click', function() {
        Swal.fire({
            title: '¡Bienvenido!',
            text: 'Estás a punto de iniciar el tour 360°. ¡Disfruta la experiencia!',
            icon: 'info',
            confirmButtonText: 'Comenzar',
            customClass: {
                popup: 'sweet-popup',
                icon: 'sweet-icon'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirigir al tour interactivo
                window.location.href = 'tour.html';
            }
        });
    });
});

// variable para mostrar la imagen panoramica
var vista = new PANOLENS.ImagePanorama('img/tour1.jpg');

// variable para mostrarla en el HTML 
var viewer = new PANOLENS.Viewer({
    container: document.querySelector('#fotoPanoramica'),
});

//declaracion de variables infospot
var infospot1 = new PANOLENS.Infospot(50, 'img/botonPlay.png');
var infospot2 = new PANOLENS.Infospot(75, 'img/info.png');
var infospot3 = new PANOLENS.Infospot(60, 'img/info2.png');
var infospot4 = new PANOLENS.Infospot(50, 'img/wallet.png');
var infospot5 = new PANOLENS.Infospot(50, 'img/dental.png');
var infospot6 = new PANOLENS.Infospot(50, 'img/doctores.png');
var infospot7 = new PANOLENS.Infospot(50, 'img/protector_solar.png');
var infospot8 = new PANOLENS.Infospot(50, 'img/laca_para_el_cabello.png');
var infospot9 = new PANOLENS.Infospot(100, 'img/presion_sanguinea.png');
var infospot10 = new PANOLENS.Infospot(60, 'img/caja_de_medicamentos.png');
var infospot11 = new PANOLENS.Infospot(60, 'img/salida.png');
var infospot12 = new PANOLENS.Infospot(60, 'img/sillon.png');
var infospot13 = new PANOLENS.Infospot(60, 'img/toys.png');



//ubicacion de las zonas infospot XYZ
infospot1.position.set(-2 ,11 , -500);
infospot2.position.set(289 ,85 , -500);
infospot3.position.set(499 ,-111 , -478);
infospot4.position.set(500 ,201 , -284);
infospot5.position.set(500 ,-83 , -41);
infospot6.position.set(500 ,-60 , 194);
infospot7.position.set(499 ,48 , -107);
infospot8.position.set(500 ,-28 , 445);
infospot9.position.set(-170 ,0 , 500);
infospot10.position.set(202 ,37 , 500);
infospot11.position.set(-334 ,118 , 500);
infospot12.position.set(-500 ,-137 , 161);
infospot13.position.set(-500 ,-66 , -103);





//agregar las zonas infospot
vista.add(infospot1);
vista.add(infospot2);
vista.add(infospot3);
vista.add(infospot4);
vista.add(infospot5);
vista.add(infospot6);
vista.add(infospot7);
vista.add(infospot8);
vista.add(infospot9);
vista.add(infospot10);
vista.add(infospot11);
vista.add(infospot12);
vista.add(infospot13);






//contenido vista 1
infospot1.addHoverText('Visita Cuidados de la piel', 1);
infospot1.element.innerHTML = '<div style="background-color:rgb(47, 86, 170); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px; text-align: center;">Cajas de Pago</div>';



//contenido vista 2
infospot2.addHoverText('Visita las Vitaminas');
infospot2.element.innerHTML = '<div class= "" style=""><iframe width="500" height="250" src="https://www.youtube.com/embed/Wx8sMzphSCc?si=eKNinRsfM25KG0Vm"></iframe> </div>';


//contenido vista 3
infospot3.addHoverText('Promociones');
infospot3.element.innerHTML = '<div class= ""><img  style="border-radius: 10px;" width="500" height="250" src="img/vitaminas.webp"></img> </div>';


//contenido vista 4

infospot4.addHoverText('Visita cuidado Dental');
infospot4.element.innerHTML = '<div style="background-color: rgb(47, 86, 170); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;">En Farmacia Emma, estamos comprometidos con tu salud. Por eso, te presentamos nuestras promociones del 20% de descuento, una opción segura y efectiva para cuidar de tu salud, por ejemplo: "aliviar los síntomas del resfriado" o "controlar la presión arterial".</div>';



//contenido vista 5

infospot5.addHoverText('Visita las Vitaminas');
infospot5.element.innerHTML = '<div class= "" style=""><iframe width="500" height="250" src="https://www.youtube.com/embed/IaeSj_-0PUo?si=vVwozhUvlispVKqp"></iframe> </div>';

//contenido vista 6
infospot6.addHoverText('Visita Asesoramiento farmacéutico personalizado');
infospot6.element.innerHTML = '<div style="background-color: rgb(47, 86, 170); color:#fff; border-radius: 5px; padding: 10px;  width: 600px;"> <h1 style="font-size:20px">📢 ¡En Farmacia Emma, estamos aquí para cuidar de ti! 📢</h1> <br> <p style="font-size: 15px;">No solo te ofrecemos medicamentos de calidad, sino también una amplia gama de servicios profesionales para acompañarte en tu camino hacia el bienestar. Nuestro equipo de expertos está listo para brindarte la atención personalizada que mereces.</p></div>';


//contenido vista 7
infospot7.addHoverText('Protectores Solares');
infospot7.element.innerHTML = '<div class= ""><img  style="border-radius: 10px;" width="500" height="250" src="img/cremas_solares2.jpg"></img> </div>';


//contenido vista 8
infospot8.addHoverText('Visita cuidados capilares');
infospot8.element.innerHTML = '<div style="background-color: rgb(47, 86, 170); color:#fff; border-radius: 5px; padding: 10px;  width: 600px;"> <p style="font-size:20px">¡En Farmacia Emma, contamos con variedad de producto para el cuidado capilar</p></div>';


//contenido vista 9
infospot9.addHoverText('Visita Instrumentos de medición y monitoreo');
infospot9.element.innerHTML = '<div style="background-color: #2f56aa; color:#fff; border-radius: 5px; padding: 10px;  width: 600px;"> <h1 style="font-size:20px">📢 ¡En Farmacia Emma, contamos con variedad de instrumentos de medicion y monitoreo! 📢</h1> <br>     <ul><li>Productos farmacéuticos no medicinales.</li><li>Artículos de ortopedia y movilidad.</li><li>Instrumentos de medición y diagnóstico.</li><li>Productos de higiene y cuidado personal.</li><li>Material de primeros auxilios.</li></ul></div>';

//contenido vista 10
infospot10.addHoverText('Visita el area de medicamentos');
infospot10.element.innerHTML = '<div style="background-color: rgb(47, 86, 170); color:#fff; border-radius: 5px; padding: 10px;  width: 600px;"> <h1 style="font-size:20px">📢 ¡En Farmacia Emma, tenemos una gran variedad de medicamentos! 📢</h1> </div>';

//contenido vista 11
infospot11.addHoverText('Exit / Salida');
infospot11.element.innerHTML = '<div style="background-color: #2f56aa; color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 190px; text-align: center;">Salida</div>';

//contenido vista 12

infospot12.addHoverText('Zona de descanso');
infospot12.element.innerHTML = '<div class= ""><img  style="border-radius: 10px;" width="250" height="250" src="img/cartel-zona-de-descanso.jpg"></img> </div>';

//contenido vista 13

infospot13.addHoverText('Zona Infantil');
infospot13.element.innerHTML = '<div style="background-color: #2f56aa; color:#fff; border-radius: 5px; padding: 10px;  width: 600px;"> <h1 style="font-size:20px">📢 ¡En Farmacia Emma, contamos con un espacio para los niños y las niñas! 📢</h1> <br>     <ul><li>Pueden Dibujar.</li><li> Pueden Pintar.</li></ul></div>';



//permiter mostrar/ocultar  la panoramica
viewer.add(vista);


