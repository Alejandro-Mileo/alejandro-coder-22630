let carrito = []
let tbody = document.querySelector(".tbody")
let Clickbutton = document.querySelectorAll(".button")

Clickbutton.forEach( btn =>{
    btn.addEventListener("click", addToCartItem)
})

function addToCartItem(e){

    let button = e.target;
    let item = button.closest(".card")
    let itemTitle = item.querySelector(".card-title").textContent;
    let itemPrice = item.querySelector(".precio").textContent;
    let itemImg = item.querySelector(".card-img-top").src;
    
    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
    }
    addItemCarrito(newItem)   
}
function addItemCarrito(newItem){
    console.log(newItem)
    let ItemCarrito = document.getElementsByClassName('table__cantidad')
    
        for(let i=0; i < carrito.length; i++){
            if(carrito[i].title.trim() === newItem.title.trim()){
                carrito[i].cantidad ++;
                const inputValue = ItemCarrito[i].childNodes[1];
                inputValue.value++;
                CarritoTotal()
                return null;
            }
       
        }

    carrito.push(newItem);

    renderCarrito();
}
function renderCarrito(){
    tbody.innerHTML = "";

    carrito.map(item =>{

        let tr = document.createElement("tr");

        tr.classList.add("ItemCarrito");

        const Content = `                    
        <th scope="row"></th>
        <td class="table__productos">
            <img src=${item.img} alt="">
            <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__price"><p>${item.precio}</p></td>
        <td class="table__cantidad">
            <input type="number" min="1" value=${item.cantidad} class="input__elemento">
            <button class="delete btn btn-danger">x</button>
        </td>`

        tr.innerHTML = Content;
        tbody.append(tr)

        tr.querySelector(".delete").addEventListener("click", removeItemCarrito);
        tr.querySelector(".input__elemento").addEventListener("change", sumaCantidad)
    })
    CarritoTotal()
}

function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector(".itemCartTotal");
    carrito.forEach((item) =>{

        const precio = Number(item.precio.replace("$", " "));
        Total = Total + precio*item.cantidad;

    })
    itemCartTotal.innerHTML = `Total $${Total}.`
    addLocalStorage() 
    
}

function removeItemCarrito(e){
    let buttonDelete = e.target
    let tr = buttonDelete.closest(".ItemCarrito")
    let title = tr.querySelector('.title').textContent;
    for(let i=0; i<carrito.length ; i++){
  
      if(carrito[i].title.trim() === title.trim()){
        carrito.splice(i, 1)
      }
    }

    tr.remove();
    CarritoTotal();
}
function sumaCantidad(e){
    let sumaInput = e.target;
    let tr = sumaInput.closest(".ItemCarrito");
    let title = tr.querySelector(".title").textContent;

    carrito.forEach((item) =>{
        if(item.title.trim() === title.trim()){
            sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal()
        }
    })
}
function addLocalStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


window.onload = function(){
    let storage = JSON.parse(localStorage.getItem("carrito"));
    if(storage){
        carrito = storage;
        renderCarrito();
    }
}




//Botón para ir arriba//


window.onscroll = function(){
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 255){
        document.querySelector(".go-top-container")
        .classList.add("show");
    }
    else{
        document.querySelector(".go-top-container")
        .classList.remove("show");
    }
}

document.querySelector(".go-top-container")
.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
