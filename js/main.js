const carrito = [];

let divContainer = document.getElementById("row")

function rellenarPagina(arrayProductos) {

    for (let producto of arrayProductos) {

        let div = document.createElement("div");
        div.classList = "col-2 mt-3";

        div.innerHTML = `
        <div class="card" style="width: 17rem;">
            <img src="${producto.imagen}" class="card-img-top" alt=${producto.id}">
                <div class="card-body text-center">
                    <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text fs-4"> $ <strong>${producto.precio}</strong></p>
                            <button class ="btn btn-danger anadirCarrito"> <span class="text-warning fs-5">¡Comprar ahora!</span></button>
        
                </div>
        </div>        
        `
        
        divContainer.appendChild(div)
    }

}

rellenarPagina(productos);


let botones = document.querySelectorAll(".anadirCarrito");

botones.forEach(elemento =>{
    
})