//variable de arreglo
let micarrusel = {};
let foto = 0;
let total = 0;


//arreglo para cargar las imagenes y título de cada foto.
micarrusel = [

{imageurl: "img/DoctoraEmma.jpg", nombre: "Dra. Emma Méndez", puesto:"Directora General", informacion:"Farmacéutica con más de 10 años de experiencia y especialización en farmacología clínica"},
{ imageurl: "img/doctorJavier.png", nombre: "Dr. Javier Rojas", puesto:"Jefe de Área Clínica", informacion:"Experto en atención farmacéutica y programas de adherencia terapéutica." },
{ imageurl: "img/CSAna.avif", nombre: "Lic. Ana Torres", puesto:"Responsable de Servicios al Cliente", informacion:"Especialista en experiencia del paciente y programas de fidelización." }

];


    //function que permite cambiar las imagenes (anterior y siguiente)
    let cambiar = function (mas) {
        //almacena la cantidad total de imagenes
        total = micarrusel.length;
        //almacena la proxima foto
        foto = foto + mas;
        //condicionales para determinar la imagen a presentar
        if (foto > total) {
            foto = 1
        }
        if (foto < 1) {
            //tiene la cantidad total de imagenes
            foto = total;
        }

    

    //instrucciones que apuntan a cada imagen y título que brinda cada logotipo
//permite apuntar al arreglo de las fotos con la ruta da cada una
document.thumb.src = micarrusel[foto - 1].imageurl;


//asignacion del ID titulo
nombre = document.getElementById('nombre');


puesto = document.getElementById('puesto');
informacion = document.getElementById('informacion');

//asignacion del arreglo para para referenciar la foto con el titulo
nombre.innerText = micarrusel[foto - 1].nombre;
puesto.innerText = micarrusel[foto - 1].puesto;
informacion.innerText = micarrusel[foto - 1].informacion;




}