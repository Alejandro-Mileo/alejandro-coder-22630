const carrito = JSON.parse(localStorage.getItem("carrito"));  // traigo la información del localstorage. Hago uso de la información del carrito.


let tbody = document.querySelector(".tbody")     //señecciono la clase mediante el selector query

function compraCarrito(infoCarrito){        // creo la función con el parámetro infoCarrito.

    for(producto of infoCarrito){           // hago uso del for para iterar cada uno de los valores del array (precio, cantidad, id, etc, etc.)

        let row = document.createElement("tr");         // creo una variable y le asigno un valor a crear en html.

        row.innerHTML = `                              
        <td>${producto.nombre}.</td>
        <td>$${producto.precio}.-</td>
        <td>${producto.cantidad}</td>
        <td>${producto.id}</td>
        <td><button class="btn btn-danger eliminarProducto btn-query" id="${producto.id} eliminarProductos">x</button</td>

        `                                               // conecto con la clase constructor de los items del carrito, así se añaden al html del carrito.

        tbody.appendChild(row);                         // le indico que a tbody, se le añada su hijo (row) --> la variable (línea 10) puede llamarse de cualquier forma.
    }

}

compraCarrito(carrito);

let botonesEliminar = document.querySelectorAll(".eliminarProducto"); //selecciono todos los botones con id eliminar

botonesEliminar.forEach(elemento => {
    elemento.addEventListener("click", eliminarProducto)         // creo una función y le agrego un eventlistener el cual es "click" y lo conecto con la función
})

function eliminarProducto(e){

    let index = carrito.findIndex (producto => producto.id == e.target.id);      // una vez conectada la función accedo al ID del item el cual puede ser eliminado de la lista.

    carrito.splice(index, 1);  //elimina el item que el usuario elija. NO REMUEVE HTML, SOLO EL VALOR INTERNO.

    e.target.parentNode.parentNode.remove();     // accedo al padre del padre del target. Es decir, al TR (html) del item seleccionado previamente

    localStorage.setItem("carrito", JSON.stringify(carrito));    // de esta forma modifico el localStorage para que se elimine el TR (html). Sin eso, el localstorage no recibe esa nueva indicación y aunque clickee 1231231 veces, el item NO va a eliminarse.
}