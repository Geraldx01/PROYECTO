/// Menu desplegable 

// Utilizamos el método classList.toggle() para alternar (activar o desactivar) una clase CSS en un elemento HTML.

function MenuDesplegable() {
    document.getElementById('menu').classList.toggle('active');

}

// Botones del menu combo interactivo URL

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos con submenú
    const menuItems = document.querySelectorAll('.has-submenu > a');
    
    // Agregar evento click a cada elemento del menú principal
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Si tiene submenú, manejamos el click
            if(this.nextElementSibling && this.nextElementSibling.classList.contains('submenu')) {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                
                // Cerrar otros submenús abiertos
                document.querySelectorAll('.submenu').forEach(sm => {
                    if(sm !== submenu) sm.classList.remove('active');
                });
                
                // Alternar el submenú actual
                submenu.classList.toggle('active');
            }
        });
    });
    
    // Cerrar botones al hacer click fuera
    document.addEventListener('click', function(e) {
        if(!e.target.closest('.has-submenu')) {
            document.querySelectorAll('.submenu').forEach(submenu => {
                submenu.classList.remove('active');
            });
        }
    });
  });



// Iniciar Session o Registrarse 
//Elementos seleccionados del DOM a utilizar los hacemos costantes para utilizarlos

const Abrir = document.getElementById('botonAbrir');
const seccionDesplegable = document.getElementById('seccionDesplegable');
const Cerrar = document.getElementById('botonCerrar');
const Inicio = document.getElementById('formularioInicio');
const Registrarse = document.getElementById('botonRegistrarse');

// Abrir la sección desplegable
Abrir.addEventListener('click', () => {
    seccionDesplegable.style.display = 'flex';
});

// Cerrar la sección desplegable
Cerrar.addEventListener('click', () => {
    seccionDesplegable.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === seccionDesplegable) {
        seccionDesplegable.style.display = 'none';
    }
});

// Simular inicio de sesión
Inicio.addEventListener('submit', (event) => {
    event.preventDefault(); // eliminamos el evento por defecto submit del boton
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Iniciando Sesion, espere....",
        showConfirmButton: false,
        timer: 3000
    });
    seccionDesplegable.style.display = 'none';
    event.target.reset();

});


  // Función para mostrar el formulario de inicio de sesión
  function mostrarIniciarSesion() {
    Swal.fire({
      html: ` <h1>Iniciar Sesion</h1>
              <input data-translate="email" type="email" id="email" class="swal2-input" placeholder="Correo Electrónico">
              <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
          `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Iniciar Sesión",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        // creamos constantes y utilizamos metodos de la libreria SweetAlert como Swal.getPopup para optener una ventana emergente
        const email = Swal.getPopup().querySelector("#email").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!email || !password) { // realizamos la validacion para ver si los espacios estan vacios o son diferentes, si estan vacios con Swal.showValidationMessage mostramos el mensaje correspondiente
          Swal.showValidationMessage("Por favor, completa todos los campos.");
        }
        return { email, password };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Inicio de Sesión Exitoso",
          //Mostramos el email con el cual se inicio sesion
          text: `Bienvenido, ${result.value.email}`,
        });
      }
    });
  }
  
  // Función para mostrar el formulario de registro
  function mostrarRegistrarse() {
    Swal.fire({
      html: `<h1>Registrarse</h1>
              <input type="text" id="nombre" class="swal2-input" placeholder="Nombre Completo">
              <input type="email" id="email" class="swal2-input" placeholder="Correo Electrónico">
              <input type="password" id="password" class="swal2-input" placeholder="Contraseña">
              <input type="password" id="confirmPassword" class="swal2-input" placeholder="Confirmar Contraseña">
          `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Registrarse",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const nombre = Swal.getPopup().querySelector("#nombre").value;
        const email = Swal.getPopup().querySelector("#email").value;
        const password = Swal.getPopup().querySelector("#password").value;
        const confirmPassword = Swal.getPopup().querySelector("#confirmPassword").value;
  
        if (!nombre || !email || !password || !confirmPassword) {
          Swal.showValidationMessage("Por favor, completa todos los campos.");
        }
        if (password !== confirmPassword) {
          Swal.showValidationMessage("Las contraseñas no coinciden.");
        }
        return { nombre, email, password };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Registro Exitoso",
          text: `Bienvenido, ${result.value.nombre}`,
        });
      }
    });
  }

// Simular registro
Registrarse.addEventListener('click', () => {
    Swal.fire({
        title: "Deseas continuar con el registro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                text: "Se ha regristrado correctamente",
                icon: "success"
            });
        }
    });
    seccionDesplegable.style.display = 'none';
});

// Variables globales
let carrito = [];
let carritoVisible = false;
const IVA = 0.16; // 16% de IVA
const ENVIO = 5.00; // Costo de envío

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('carritoDesplegable').style.display = 'none';
    carritoVisible = false;

    // Recuperar carrito desde localStorage
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarContadorCarrito();
    }
});

// Mostrar/ocultar el carrito
function toggleCarrito() {
    const carritoDesplegable = document.getElementById('carritoDesplegable');
    carritoVisible = !carritoVisible;

    if (carritoVisible) {
        carritoDesplegable.style.display = 'block';
        actualizarCarrito();
    } else {
        carritoDesplegable.style.display = 'none';
    }
}

// Guardar el carrito en localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Agregar productos al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    const productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        // agregamos un producto al carrito y la cantiadad la incrementamos  
        productoExistente.cantidad++;
    } else {
        // permite agregando un nuevo producto al array del carrito de compras, mediante .push añade elementos al final del  array carrito
         carrito.push({ nombre, precio, imagen, cantidad: 1 });
    }
// llamamos a la funcion actualizarContadorCarrito() la cual nos permite que el numero del carrito antes de desplegarse vea reflejada y aumente cada que se agrega un producto 
    actualizarContadorCarrito();
    // de la misma manera llamamos a la funcion guardarCarritoEnLocalStorage(), la cual permite almacenar los productos agregados localmente, si usuario refresca la pagina los productos no se eliminan 
    guardarCarritoEnLocalStorage();

    // creamos una alerta para cuando el usuario agrega productos al carrito

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado al carrito",
        showConfirmButton: false,
        timer: 2000
    });

// si el carrito esta visible  llamamos a la funcion actualizarCarrito()
    if (carritoVisible) {
        actualizarCarrito();
    }
}

// Actualizar contador de productos en el carrito
// funcion actualizarContadorCarrito() la cual nos permite que el numero del carrito antes de desplegarse vea reflejada y aumente cada que se agrega un producto 
//utilizamos .reduce para calcular la cantidad total de productos en el carrito y actualiza un elemento en el DOM en este caso el contador numerico de productos agregados
function actualizarContadorCarrito() {
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    document.getElementById('contadorCarrito').textContent = totalItems;
}

// Actualizar la vista del carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito'); // se valida el div que contiene los productos agregados
    listaCarrito.innerHTML = ''; // se inicializa como vacio

    if (carrito.length === 0) { /// si el carrito su longitud es igual a cero
        listaCarrito.innerHTML = '<p>Tu carrito está vacío</p>'; // se muesta el parafo 
        resetearTotales();
        return;
    }

    let subtotal = 0;

    // recorremos el carrito con un forEach y una funcion flecha

    carrito.forEach((item, index) => { // item es el parámetro que representa cada elemento del array carrito, item.precio, item.cantidad y el index representa la posición del item en el array carrito
        const itemCarrito = document.createElement('div');
        itemCarrito.className = 'item-carrito';

        const precioTotalItem = item.precio * item.cantidad;
        subtotal += precioTotalItem;

        itemCarrito.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" width="50">
            <div class="info-item">
                <h4>${item.nombre}</h4>
                <p>$${item.precio.toFixed(2)} x ${item.cantidad} = $${precioTotalItem.toFixed(2)}</p>
            </div>
            <div class="controles-item">
                <button class="sumaResta resta" onclick="modificarCantidad(${index}, -1)">-</button>
                <span>${item.cantidad}</span>
                <button class="sumaResta suma" onclick="modificarCantidad(${index}, 1)">+</button>
                <button class="eliminarProducto" onclick="eliminarDelCarrito(${index})">🗑️</button>
            </div>
        `;


// la listaCarrito es el div donde se va a almacenar los productos agregados, sino tiene ningun producto va a aparecer el mensaje de "Tu carrito está vacío", lo cual lo que hacemos aqui es al listadoCarrito le agregamos el itemCarrito, este es el que contiene el div con la informacion del producto agregado una ves que el usuario hace clic en agregar
        listaCarrito.appendChild(itemCarrito);
    });

    // llamamos a la funcion actualizarTotales () con el parametro subtotal, para que se actualice en el carrito
    actualizarTotales(subtotal);
}

// Eliminar datos de carrito, esta funcion lo que realice es un formateo a los datos, subtotal, iva, envio y total del carrito una ves que el usuario elimina el producto o vacia el carrito
function resetearTotales() {
    document.getElementById('subtotal').textContent = '$0.00';
    document.getElementById('iva').textContent = '$0.00';
    document.getElementById('envio').textContent = '$0.00';
    document.getElementById('total').textContent = '$0.00';
}

// creamos la funcion actualizarTotales() para los calculos matematicos y mostrar subtotal, iva, envio y total
function actualizarTotales() {
    // creamos la constante subtotal y lo igualamos al carrito el arreglo, utilizamos la funcion .reduce para itera sobre cada producto (item) en el array carrito y le asignamos una funcion fleha la cual nos va a ayudar a calcular el total el cual acumula la suma parcial en cada iteración y cero es el valor iniciar de cada iteracion
    const subtotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    // se crea la constante iva, la cual es el subtotal * IVA ,  ya definido anteriormente como 0.16
    const iva = subtotal * IVA;
    // se crea la constante envio, Si el checkbox (envioCheckbox) está marcado (checked), asigna el valor de ENVIO ($5) asignado anteriormente al inicio. Si no está marcado, el envío es $0.
    const envio = document.getElementById('envioCheckbox').checked ? ENVIO : 0;
    // se crea la constante total, la cual va a almacenar todos estos datos, subtotal+iva+envio
    const total = subtotal + iva + envio;

    // llamamos a los ID definidos en el HTML y les establecemos texto con la funcion .textContent, las constantes creadas en la funcion actualizarTotales() para que se actualicen una ves que el usuario agrega un producto.
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('iva').textContent = `$${iva.toFixed(2)}`;
    document.getElementById('envio').textContent = `$${envio.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// creamos la funcion modificarCantidades(), esta es la que nos permite hacer los cambios de cantidades ya sea sumar o restar
function modificarCantidad(index, cambio) {
    const item = carrito[index];
    item.cantidad += cambio; //  se crea una variable de incremento o decrementa a la propiedad catidad 
     // validamos si la cantidad es menor o igual a cero
    if (item.cantidad <= 0) {
        // si es menor con .splice() modificamos el carrito, comenzando desde el indice 0 (index) y 1 como cantidad de elementos a eliminar, esto lo que hace es que se eliminen cantidades o que se eliminen elementos, en este caso productos, nos ayuda a no eliminar todos los elementos, solo los que estan en cero
        carrito.splice(index, 1);
    }

    actualizarContadorCarrito();
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
}

// Eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarContadorCarrito();
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
}

// Vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarContadorCarrito();
    actualizarCarrito();
    guardarCarritoEnLocalStorage();

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Carrito vaciado",
        showConfirmButton: false,
        timer: 1000
    });
}


// Procesar pago
function pagar() {
    if (carrito.length === 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Tu carrito está vacío!",
        });
        return;
    }

    Swal.fire({
        title: "Confirma tu compra",
        html: `
            <p>Total a pagar: $${calcularTotal().toFixed(2)}</p>
            <input id="emailCliente" class="swal2-input" placeholder="Tu correo electrónico" type="email">
            <select id="metodoPago" class="swal2-select">
                <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
                <option value="Tarjeta de Débito">Tarjeta de Débito</option>
                <option value="Efectivo">Efectivo</option>
            </select>
        `,
        showCancelButton: true,
        confirmButtonText: "Pagar",
        cancelButtonText: "Cancelar",
        preConfirm: () => {
            const email = document.getElementById('emailCliente').value;
            if (!email) {
                Swal.showValidationMessage("El correo es obligatorio");
                return false;
            }
            return { email };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const metodoPago = document.getElementById('metodoPago').value;
            const emailCliente = result.value.email;
            const total = calcularTotal().toFixed(2);
            
            // resumen de productos recorriendo el carrito con la funcion .map
            const productosResumen = carrito.map(item => `
                <div style="display: flex; align-items: center; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                    <img src="${item.imagen}" alt="${item.nombre}" 
                         style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px; border-radius: 4px;">
                    <div>
                        <strong>${item.nombre}</strong><br>
                        ${item.cantidad} x $${item.precio.toFixed(2)} = $${(item.cantidad * item.precio).toFixed(2)}
                    </div>
                </div>
            `).join('');
            
            //resumen de compra alerta final 
            Swal.fire({
                icon: "success",
                title: "¡Pago exitoso!",
                html: `
                    <p>Resumen de tu compra:</p>
                    <div style="max-height: 300px; overflow-y: auto; margin: 10px 0;">
                        ${productosResumen}
                    </div>
                    <p><strong>Total:</strong> $${total}</p>
                    <p><strong>Método de pago:</strong> ${metodoPago}</p>
                    <p>Se ha registrado la compra con el correo: ${emailCliente}</p>
                `,
                footer: '<a href="encuesta.html">Encuesta de Satisfacción</a>'
            });

            // Vacía el carrito
            carrito = [];
            actualizarCarrito();
            actualizarContadorCarrito();
            guardarCarritoEnLocalStorage();
        }
    });
}

// Función para calcular el total
function calcularTotal() {
    const subtotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    return subtotal + (subtotal * IVA) + (document.getElementById('envioCheckbox').checked ? ENVIO : 0);
}



//Seccion de inicio promociones

document.addEventListener('DOMContentLoaded', () => {
    const nextImage = document.querySelector('.BtnInicio');
    const imagenes = document.querySelectorAll('.imagenInicio');
    const flechaIzquierda = document.querySelector('.flechaIzquierda');
    const flechaDerecha = document.querySelector('.flechaDerecha');

    let indiceActual = 0;
    // se crea una const para recorrer la longitud del arreglo de las imagenes
    const totalImagenes = imagenes.length;

    function moverImagenes() {
        nextImage.style.transform = `translateX(-${indiceActual * 100}%)`;
    }

    function siguienteImagen() {
        indiceActual = (indiceActual + 1) % totalImagenes;
        moverImagenes();
    }

    function imagenAnterior() {
        indiceActual = (indiceActual - 1 + totalImagenes) % totalImagenes;
        moverImagenes();
    }

    flechaDerecha.addEventListener('click', siguienteImagen);
    flechaIzquierda.addEventListener('click', imagenAnterior);

    // Cambiar automáticamente las imágenes cada 4 segundos
    setInterval(siguienteImagen, 4000);
});



// Función para mostrar información del producto
function mostrarInfo(nombre, descripcion) {
    Swal.fire({
        title: nombre,
        text: descripcion,
        // utilizamos un expresion para buscar la imagen correcta, ejemplo: Acetaminofen-removebg-preview.png
        imageUrl: `img/${nombre.replace(/\s+/g, '')}-removebg-preview.png`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: nombre,
    });
}





// SERVICIOS

// utilizamos  querySelectorAll para seleccionar todos los elementos del DOM
// que coinciden con el selector (.NuestrosServicios)
const servicio = document.querySelectorAll('.NuestrosServicios');

// Iteramos sobre cada elemento del array (servicio)
// Para cada tarjeta (tarjetaRotativa), seleccionamos elementos específicos dentro de ella directamente del (DOM)
servicio.forEach(tarjetaRotativa => {
    const botonMasInfo = tarjetaRotativa.querySelector('.botonMasInfo');
    const botonVolver = tarjetaRotativa.querySelector('.botonVolver');
    const infoAdicional = tarjetaRotativa.querySelector('.infoAdicional');
    const imagen = tarjetaRotativa.querySelector('.imagenInfo');

    // Evento para mostrar más información
    botonMasInfo.addEventListener('click', () => {
        imagen.style.display = 'none';
        botonMasInfo.style.display = 'none';
        botonVolver.style.display = 'inline-block';
        infoAdicional.style.display = 'block';
    });

    // Evento para volver a la imagen
    botonVolver.addEventListener('click', () => {
        imagen.style.display = 'block';
        botonMasInfo.style.display = 'inline-block';
        botonVolver.style.display = 'none';
        infoAdicional.style.display = 'none';
    });


});



// Animacion de desplazamiento para las secciones al momento que el usuario desliza hacia abajo

document.addEventListener("scroll", function () {
    const secciones = document.querySelectorAll(".Desplazamiento"); // Selecciona todas las secciones

    secciones.forEach((seccion) => {
        const rect = seccion.getBoundingClientRect(); // Obtiene la posición de la sección

        // Verifica si la sección está visible en la ventana
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            seccion.classList.add("slide-in"); // Añade la clase para activar la animación
        }
    });
});








