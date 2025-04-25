
// Variables carrito de compras
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

    if (carrito.length === 0) { /// si el carrito su longitud es estrictamente igual a cero
        listaCarrito.innerHTML = '<p>Tu carrito está vacío</p>'; // se muesta al carrito esta vacio
        resetearTotales();
        return;
    }
// creamos una variable subtotal y le asignamos un valor de cero
    let subtotal = 0;

    // recorremos el carrito con un forEach y una funcion flecha
   // item = elemento actual del array
  // index = posición del elemento (comienza en 0)
    carrito.forEach((item, index) => { 
        const itemCarrito = document.createElement('div');
        itemCarrito.className = 'item-carrito';

        const precioTotalItem = item.precio * item.cantidad; // precio total sin iva o envio

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


// la listaCarrito es el div donde se va a almacenar los productos agregados, sino tiene ningun producto va a aparecer el mensaje de "Tu carrito está vacío", lo cual lo que hacemos aqui es a la listadoCarrito le agregamos el itemCarrito, este es el que contiene el div con la informacion del producto agregado una ves que el usuario hace clic en agregar
        listaCarrito.appendChild(itemCarrito);
    });

    // llamamos a la funcion actualizarTotales () con el parametro subtotal, para que se actualice en el carrito
    actualizarTotales(subtotal);
}

// crreamos la funcion resetearTotales() la cual elimina datos del carrito, esta funcion lo que realiza es un formateo a los datos, subtotal, iva, envio y total del carrito una ves que el usuario elimina el producto, vacia el carrito o confirma la compra
function resetearTotales() {
    document.getElementById('subtotal').textContent = '$0.00';
    document.getElementById('iva').textContent = '$0.00';
    document.getElementById('envio').textContent = '$0.00';
    document.getElementById('total').textContent = '$0.00';
}

// creamos la funcion actualizarTotales() para los calculos matematicos y mostrar subtotal, iva, envio y total
function actualizarTotales() {
    // creamos la constante subtotal y le asignamos el array carrita, utilizamos la funcion .reduce para itera sobre cada producto (item) y su total y le asignamos una funcion fleha la cual nos va a ayudar a calcular el total el cual acumula la suma parcial en cada iteración y cero es el valor iniciar de cada iteracion el subtotal por defecto de cada producto
    const subtotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    // se crea la constante iva, la cual es el subtotal * IVA , el el IVA  ya definido anteriormente como constante de 0.16
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
    // la constante item le asignamos el objeto carrito y en el indice 0, indice inicial 
    const item = carrito[index];
    item.cantidad += cambio; //  se crea una variable de incremento a la propiedad cantidad, la cual va realizar el cambio de sumar o restar
     // validamos si la cantidad es menor o igual a cero
    if (item.cantidad <= 0) {
        // si es menor con .splice() modificamos la cantidad de cada producto del carrito, comenzando desde el indice 0 (index) y 1 como cantidad de elementos a eliminar, esto lo que hace es que se eliminen cantidades o que se eliminen elementos, en este caso productos, nos ayuda a no eliminar todos los elementos, solo los que estan en cero, sumar o restar
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

    // Calculamos el subtotal 
    const subtotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    // Calculamos el total con IVA y envío
    const total = subtotal + (subtotal * IVA) + (document.getElementById('envioCheckbox').checked ? ENVIO : 0);

    Swal.fire({
        title: "Confirma tu compra",
        html: `
            <p>Total a pagar: $${total.toFixed(2)}</p>
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
            
            Swal.fire({
                icon: "success",
                title: "¡Pago exitoso!",
                html: `
                    <p>Resumen de tu compra:</p>
                    <div style="max-height: 300px; overflow-y: auto; margin: 10px 0;">
                        ${carrito.map(item => `
                            <div style="display: flex; align-items: center; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                                <img src="${item.imagen}" alt="${item.nombre}" 
                                     style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px; border-radius: 4px;">
                                <div>
                                    <strong>${item.nombre}</strong><br>
                                    ${item.cantidad} x $${item.precio.toFixed(2)} = $${(item.cantidad * item.precio).toFixed(2)}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <p><strong>Total:</strong> $${total.toFixed(2)}</p>
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


   // Función para mostrar información del producto

    function mostrarInfo(nombre, descripcion, imagenNombre) {
        Swal.fire({
            title: nombre,
            text: descripcion,
            imageUrl: imagenNombre,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: nombre,
        });
    }


// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
    // Resetear el buscador
    document.getElementById('buscadorProductos').value = '';
    document.body.classList.remove('modo-busqueda');
    
    // Mostrar todas las categorías si es 'todos'
    if (categoria === 'todos') {
        document.querySelectorAll('.categoria-slide').forEach(section => {
            section.style.display = 'block';
        });
        document.querySelectorAll('.producto').forEach(producto => {
            producto.style.display = 'block';
        });
    } else {
        // Ocultar todas las categorías primero
        document.querySelectorAll('.categoria-slide').forEach(section => {
            section.style.display = 'none';
        });
        
        // Mostrar solo la categoría seleccionada
        //Busca todos los elementos con la clase .producto que tengan un atributo data-categoria igual al valor de la variable categoria, mediante una forEach y la funcion flecha recorremos cada producto con atributo data-categoria. 
        document.querySelectorAll(`.producto[data-categoria="${categoria}"]`).forEach(producto => {
            // varible contenedor que es igualada al producto
            let contenedor = producto;
            // validamos que el contenedor sea valido y no NULL y que contenga la clase 'categoria-slide'
            while (contenedor && !contenedor.classList.contains('categoria-slide')) {
                // reasignamos la variable contenedor como contenedor.parentElement lo cual lo que hace es buscar el contenedor principal ejemplo   'categoria-slide' , devuelve etiquetas HTML definidas
                contenedor = contenedor.parentElement;
                // si el elemento actual (contenedor) eta dentro del body esto lo que nos ayuda es a que el bucle no continue infinitamente, si No existe un elemento con clase categoria-slide o si el elemento producto está directamente dentro, evita modificaciones
                if (contenedor === document.body) 
                // si se encuentra el contenedor detiene el bucle
                break; 
            }
            //Si se encontró el contenedor (if (contenedor)), lo muestra junto con el producto.
            if (contenedor) {
                contenedor.style.display = 'block';
                producto.style.display = 'block';
            }
        });
    }
    
    // Resaltar el botón de categoría seleccionada
    document.querySelectorAll('.categorias button').forEach(button => {
        button.classList.remove('active');
    });
    e.target.classList.add('active');
}

// Función para buscar productos
function buscarProducto() {
    const Busqueda = document.getElementById('buscadorProductos').value.toLowerCase().trim();
    let resultadosEncontrados = false;
    
    // Ocultar todas las categorías inicialmente
    document.querySelectorAll('.categoria-slide').forEach(categoria => {
        categoria.style.display = 'none';
    });
    
    // Si el campo de búsqueda está vacío, mostrar todo
    if (Busqueda === '') {
        document.querySelectorAll('.categoria-slide').forEach(categoria => {
            categoria.style.display = 'block';
        });
        document.querySelectorAll('.producto').forEach(producto => {
            producto.style.display = 'block';
        });
        document.body.classList.remove('modo-busqueda');
        return;
    }
    
    // Activar modo búsqueda
    document.body.classList.add('modo-busqueda');
    
    // Buscar en todos los productos
    document.querySelectorAll('.producto').forEach(producto => {
        const nombreProducto = producto.querySelector('h3').textContent.toLowerCase();
        const categoriaContenedora = producto.closest('.categoria-slide');
        
        if (nombreProducto.includes(Busqueda)) {
            producto.style.display = 'block';
            categoriaContenedora.style.display = 'block';
            resultadosEncontrados = true;
        } else {
            producto.style.display = 'none';
        }
    });
    
    // Manejar caso cuando no hay resultados
    if (!resultadosEncontrados) {
        Swal.fire({
            icon: "info",
            title: "Sin resultados",
            text: "No se encontraron productos que coincidan con tu búsqueda.",
        });
    }
}


// Inicialización al cargar la pagina
document.addEventListener('DOMContentLoaded', function() {


    // Prevenir el envío del formulario al presionar Enter
    document.getElementById('formulario-contacto').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
    
    // Mostrar todas las categorías al inicio
    filtrarProductos('todos');
});



// Función para mover el slide de productos
function moverSlide(categoria, direccion) {
    const slide = document.getElementById(`slide-${categoria}`);
    const scrollAmount = 300;
    
    slide.scrollBy({
        left: direccion === 1 ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
    });
}

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
