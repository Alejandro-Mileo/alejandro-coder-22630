const carrito = [];

let divContainer = document.getElementById("row")

function rellenarPagina(arrayProductos) {

    for (let producto of arrayProductos) {

        let div = document.createElement("div");
        div.classList = "col-4 mt-3";

        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text fs-4"> $ <strong>${producto.precio}</strong></p>
                            <button class="btn btn-danger anadirCarrito">¡Comprar ahora!</button>
        
                </div>
        </div>        
        `
        
        divContainer.appendChild(div)
    }

}

rellenarPagina(productos);

class Productocarrito{                                      //Hacemos esta clase previo al pusheo de la función anadirCarrito. Se va a pushear al array productos []  (es el array de objetos que contiene la info de cada card.)
    constructor(nombre,precio,imagen,id){
    this.nombre=nombre;
    this.precio=precio;
    this.imagen=imagen;
    this.id=id;
    }
}

let botones = document.querySelectorAll(".anadirCarrito"); //selecciono todas las clases que tengan "anadirCarrito" con el uso de QUERYSELECTORALL (si fuese uno solo, pondría queryselector) (Para seleccionar la clase, pongo . como en css--> ".clase")

botones.forEach(elemento =>{
    elemento.addEventListener("click", anadirCarrito)  //recorro cada botón y le agrego una función
})

function anadirCarrito(e){                                  //esta función va a servir para recorrer cada nodo y cada hijo

    // console.log(e.target.parentNode.children[0].textContent);                 //Busco el Nombre de la Card.
    // console.log(e.target.parentNode.children[1].children[0].textContent);    //Busco el PRECIO de la Card.
    // console.log(e.target.parentNode.parentNode.children[0].src);            //Busco la IMAGEN de la Card.
    // console.log(e.target.parentNode.parentNode.children[0].alt)            //Busco el ID de la Card.


    let nombre = e.target.parentNode.children[0].textContent;              // dentro de mi card, accedo al padre y busco al hijo en la posición 0, y el contenido textual. Es decir, el NOMBRE del producto.
    let precio = e.target.parentNode.children[1].children[0].textContent; // dentro de mi card, accedo al padre y busco al hijo en la posición 1, y el contenido textual. Es decir, el PRECIO del producto
    let imagen = e.target.parentNode.parentNode.children[0].src;         // acá es más rebuscado. Accedo al padre del padre y luego al hijo en la posición 0 y con src agarro la información de la IMAGEN
    let id = e.target.parentNode.parentNode.children[0].alt;             // lo mismo que la IMAGEN, solo que con esto consigo el ID del producto.

    const producto = new Productocarrito (nombre, precio, imagen, id); // el nuevo objeto que creamos con la clase de la línea 31 a 38. Reemplazamos valores con cada Card.
    
    carrito.push(producto);                                             //le pusheo el nuevo objeto "(producto)"" al array de carrito, línea 1.

    console.log(carrito);                                               //chequeo mediante un console.log el valor de mi nuevo objeto.

}

