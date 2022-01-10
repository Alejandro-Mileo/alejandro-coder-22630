let carrito = [];

let divContainer = document.getElementById("row")      //agarramos el input donde va a cargarse el código html

function rellenarPagina(arrayProductos) {             //una vez creada, le creamos una función y le pasamos un parámetro (arrayProductos)

    for (let producto of arrayProductos) {                      // acá recorremos/iteramos cada item/producto de la función (arrayproductos)

        let div = document.createElement("div");                //creamos una nueva clase y le asignamos un valor. El valor es crear un elemento mediante un document.createElement("div"). Podría ser un Section, H1, etc.
        div.classList = "col-2 mt-3";                           // le asigno una clase mediante un classList. "col-4 mt-3". 4 columnas y un margin top de 3. (Usamos bootstrap. DIOS BENDIGA A BOOTSTRAP)

        div.innerHTML = `                                       
        <div class="card" style="width: 100%;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.id}">
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text fs-4"> $ <strong>${producto.precio}</strong></p>
                            <button class="btn btn-danger anadirCarrito comprarItem">¡Comprar ahora!</button>
        
                </div>
        </div>        
        `                                                                                                       //al div le agrego contenido mediante .innerHTML = y escribo cómo va a ser mi bloque de código en html. La gracia es crearla una vez desde JS 
                                                                                                               // al iterarla, va a crear tantas Cards como productos 
        divContainer.appendChild(div)
    }

    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

    if(carritoLocalStorage){
        carritoNav(carritoLocalStorage);
    }



}

rellenarPagina(productos);                   // finalizamos llamando a la función y le pasamos un parámetro. ¿cuál? le pasamos productos porque es la "base" de cada card. Esto va a entrar a productos.js y va a leer el array de objeto uno por uno. De principio a fin.

class Productocarrito{                                      //Hacemos esta clase previo al pusheo de la función anadirCarrito. Se va a pushear al array productos []  (es el array de objetos que contiene la info de cada card.)
    constructor(nombre,precio,cantidad,id,subtotal){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 1;
    this.id = id;  
    this.subtotal = precio;
    }
}

let botones = document.querySelectorAll(".anadirCarrito"); //selecciono todas las clases que tengan "anadirCarrito" con el uso de QUERYSELECTORALL (si fuese uno solo, pondría queryselector) (Para seleccionar la clase, pongo . como en css--> ".clase")

botones.forEach(elemento =>{
    elemento.addEventListener("click", anadirCarrito)  //recorro cada botón y le agrego una función
})

function anadirCarrito(e){                                  //esta función va a servir para recorrer cada nodo y cada hijo

    // console.log(e.target.parentNode.children[0].textContent);                 //Busco el NOMBRE de la Card.
    // console.log(e.target.parentNode.children[1].children[0].textContent);    //Busco el PRECIO de la Card.
    // console.log(e.target.parentNode.parentNode.children[0].src);            //Busco la IMAGEN de la Card.
    // console.log(e.target.parentNode.parentNode.children[0].alt)            //Busco el ID de la Card.

    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito")); // Parseo la información que contiene carrito. Si no hago esto, cada vez que actualice la página, el navegador va a leer el array carrito [] pero vacío. (el array está vacío, pero le pusheo la información línea 64)

    if(carritoLocalStorage){
        carrito = carritoLocalStorage;        // de esta forma, aún si actualizo la página, la info va a quedar guardada dentro del localstorage, y en la variable carrito. (Carrito era una constante, pero me tiraba error)
    } 

    let index = carrito.findIndex(producto => producto.id == e.target.parentNode.parentNode.children[0].alt);  // Buscamos el index del array. Específicamente el ID. -> parentNode -> parentNoda -> children 0 (la posición que ocupa la información que necesito) y accedo al "alt"

    let nombre = e.target.parentNode.children[0].textContent;              // dentro de mi card, accedo al padre y busco al hijo en la posición 0, y el contenido textual. Es decir, el NOMBRE del producto.
    let precio = e.target.parentNode.children[1].children[0].textContent; // dentro de mi card, accedo al padre y busco al hijo en la posición 1, y el contenido textual. Es decir, el PRECIO del producto
    let imagen = e.target.parentNode.parentNode.children[0].src;         // acá es más rebuscado. Accedo al padre del padre y luego al hijo en la posición 0 y con src agarro la información de la IMAGEN
    let id = e.target.parentNode.parentNode.children[0].alt;             // lo mismo que la IMAGEN, solo que con esto consigo el ID del producto.

    
    if(index == -1){                                              

        const producto = new Productocarrito(nombre, precio, imagen, id); // Creo un condicional. Si el index es -1 (Es decir, que no existe), lo va a crear con las propiedades del objeto (nombre, precio, imagen, id)
        carrito.push(producto);    // luego pusheamos al carrito (línea 1) el nuevo producto creado (línea 84);
    }
    else{
        carrito[index].cantidad++;                          // Pero si el valor del index SI exíste, entonces le agrega +1 ---> lo veo reflejado en carrito.html---> "cantidad"
        carrito[index].subtotal = carrito[index].precio * carrito[index].cantidad;
    }


    localStorage.setItem("carrito", JSON.stringify(carrito));       // uso localstorage para almacenar la información, aún si actualizo la página. Almacena CLAVE-VALOR

    carritoNav(carrito);  // llamo a la función carritoNav para que se visualice la cantidad de items del carrito (en el nav!) *el parámetro es el array carrito de la línea 1*

}

function carritoNav (arrayCarrito){                      //  creamos una función con su parámetro

    let textoCarrito = document.getElementById("carrito_id");        // igualamos una variable y tomamos el ID mediante el getelement

    let totalProductos = 0;           // inicializa en 0 ya que el usuario se encarga de añadir items.

    for (let producto of arrayCarrito){                         // uso el For para recorrer el  array
        
        totalProductos += producto.cantidad;                // totalProductos toma el valor inicial de 0 pero el valor va cambiando según el usuario elija nuevos productos. Igual y suma la cantidad de producto.cantidad

    }

    textoCarrito.innerHTML = "";                             // empieza vacío para no generar problemas si el usuario ya cargó items previamente
    
    textoCarrito.innerHTML = `<i class="fas fa-shopping-cart d-flex gap-3 text-warning"><p class="text-success textLine">(${totalProductos})</p></i> `        // el valor que va a tomar el output. entre paréntesis está el valor  de n cantidad de items.

    // revisar líneas 27-28. Para que el carrito "no desaparezca" cuando actualizo la página
}
