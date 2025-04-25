
'use extrict';

window.addEventListener('load', init, false);

document.getElementById('Suscribete').addEventListener('submit', (e) => {
    e.preventDefault();

});


function init() {
    let email = document.getElementById('inputEmail');
    let btnEnviar = document.getElementById('submit');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('messageAlert');

    btnEnviar.onclick = function () {
        email = inputEmail.value;
        if (email === '') {
            Swal.fire({
                text: "El campo email esta vacío",
                icon: "error"
            });
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            Swal.fire({
                text: "Email inválido",
                icon: "error"
            });
            alerta.classList.remove('alertaVerde');
        } else {
            Swal.fire({
                title: "Suscripcion realizada correctamente",
                text: "Recibiras un correo electronico con toda la informacion de la suscripcion",
                icon: "success"
            });
            emailjs.sendForm('service_fdw1ki8', 'template_8l59hfw', '#Suscribete', 'TkAaUPS3ogaBHSuPt');
            cleanInputs();

        }

    }


    function cleanInputs() {
        inputEmail.value = '';
    }

}



    