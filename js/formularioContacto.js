
// Formulario de contacto

'use extrict';

//carga de la funcion init 
window.addEventListener('load', init, false);


document.getElementById('formulario-contacto').addEventListener('submit', (e) => {
    e.preventDefault();
    
});

//funcion inicial
function init() {
    //declaracion de
    let nombre = document.getElementById('nombreCompleto');
    let email = document.getElementById('correoElectronico');
    let numero = document.getElementById('phone');
    let mensaje = document.getElementById('message');
    let btnEnviar = document.getElementById('btn-enviar');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


    //funcion del boton Enviar
    btnEnviar.onclick = function () {
        nombre = nombreCompleto.value;
        email = correoElectronico.value;
        numero = phone.value;
        mensaje = message.value;

        //condicionales anidadas para validar cada campo del form 
        if (nombre === '' && email === '' && numero === '' && mensaje === '') {
            Swal.fire({
                text: "Debe llenar todos los campos",
                icon: "error"
            });
           
        } else if (nombre === '') {
            Swal.fire({
                text: "El campo nombre esta vacíos",
                icon: "error"
            });
            
        } else if (email === '') {

            Swal.fire({
                text: "El campo email esta vacío",
                icon: "error"
            });
           
        } else if (expressionEmail.test(email) === false) {

            Swal.fire({
                text: "Email invalido",
                icon: "error"
            });
        
        } else if (numero === '') {
    
            Swal.fire({
                text: "El campo teléfono esta vacío",
                icon: "error"
            });
           

        } else if (mensaje === '') {
  
            Swal.fire({
                text: "El campo Asunto esta vacío",
                icon: "error"
            });
            

        } else {
            const Form = Swal.mixin({
                Form: true,
                position: "center",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (Form) => {
                    Form.onmouseenter = Swal.stopTimer;
                    Form.onmouseleave = Swal.resumeTimer;
                }
            });
            Form.fire({
                icon: "success",
                title: "Enviando informacion, te estaremos contactando pronto"
            });
                        
            emailjs.sendForm('service_fdw1ki8', 'template_4byt1yk', '#formulario-contacto', 'TkAaUPS3ogaBHSuPt');
            //carga de la funcion limpiar
            limpiar();
            
        }
        

    }

    function limpiar() {
        nombreCompleto.value = '';
        correoElectronico.value = '';
        phone.value = '';
        message.value = '';
    }
}
