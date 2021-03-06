let carrito = [];
let tbody = document.querySelector('.tbody');
let Clickbutton = document.querySelectorAll('.button');

Clickbutton.forEach((btn) => {
	btn.addEventListener('click', addToCartItem);
});

function addToCartItem(e) {
	let button = e.target;
	let item = button.closest('.card');
	let itemTitle = item.querySelector('.card-title').textContent;
	let itemPrice = item.querySelector('.precio').textContent;
	let itemImg = item.querySelector('.card-img-top').src;

	const newItem = {
		title: itemTitle,
		precio: itemPrice,
		img: itemImg,
		cantidad: 1
	};
	addItemCarrito(newItem);
	contadorCarrito(carrito);
}

function contadorCarrito(arrayCarrito) {
	let totalCarrito = 0;

	for (let producto of arrayCarrito) {
		totalCarrito += producto.cantidad;
	}

	$('.contadorCarrito').html(` `);
	$('.contadorCarrito').html(`(${totalCarrito})`);
}
contadorCarrito(carrito);

function addItemCarrito(newItem) {
	console.log(newItem);
	let ItemCarrito = document.getElementsByClassName('table__cantidad');

	for (let i = 0; i < carrito.length; i++) {
		if (carrito[i].title === newItem.title) {
			carrito[i].cantidad++;
			const inputValue = ItemCarrito[i].childNodes[1];
			inputValue.value++;
			CarritoTotal();
			return null;
		}
	}

	carrito.push(newItem);

	renderCarrito();
}
function renderCarrito() {
	tbody.innerHTML = '';

	carrito.map((item) => {
		let tr = document.createElement('tr');

		tr.classList.add('ItemCarrito');

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
        </td>`;

		tr.innerHTML = Content;
		tbody.append(tr);

		tr.querySelector('.delete').addEventListener('click', removeItemCarrito);
		tr.querySelector('.input__elemento').addEventListener('change', sumaCantidad);
	});
	CarritoTotal();
}

function CarritoTotal() {
	let Total = 0;
	const itemCartTotal = document.querySelector('.itemCartTotal');
	carrito.forEach((item) => {
		const precio = Number(item.precio.replace('$', ' '));
		Total = Total + precio * item.cantidad;
	});
	itemCartTotal.innerHTML = `Total: $${Total}.`;
	addLocalStorage();
}

function removeItemCarrito(e) {
	let buttonDelete = e.target;
	let tr = buttonDelete.closest('.ItemCarrito');
	let title = tr.querySelector('.title').textContent;
	for (let i = 0; i < carrito.length; i++) {
		if (carrito[i].title === title) {
			carrito.splice(i, 1);
		}
	}

	tr.remove();
	CarritoTotal();
	contadorCarrito(carrito);
}
function sumaCantidad(e) {
	let sumaInput = e.target;
	let tr = sumaInput.closest('.ItemCarrito');
	let title = tr.querySelector('.title').textContent;

	carrito.forEach((item) => {
		if (item.title.trim() === title.trim()) {
			sumaInput.value < 1 ? (sumaInput.value = 1) : sumaInput.value;
			item.cantidad = sumaInput.value;
			CarritoTotal();
		}
	});
}

function addLocalStorage() {
	localStorage.setItem('carrito', JSON.stringify(carrito));
}

window.onload = function() {
	let storage = JSON.parse(localStorage.getItem('carrito'));
	if (storage) {
		carrito = storage;
		renderCarrito();
	}
};

//Bot??n para ir arriba//

window.onscroll = function() {
	if (document.documentElement.scrollTop > 255) {
		document.querySelector('.go-top-container').classList.add('show');
	} else {
		document.querySelector('.go-top-container').classList.remove('show');
	}
};
//go top button//

document.querySelector('.go-top-container').addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

//Jquery SWAL//

$(function() {
	$('.buttonBuy').click(function() {
		let timerInterval;
		Swal.fire({
			title: '<p class="text-light">Producto agregado con <span class="text-success">??xito</span>.<p>',
			icon: 'success',
			html:
				'<p class="text-center text-success">A??n hay mucho por comprar</p> <br><i class="far fa-laugh-wink fa-2x text-light mt-3"></i>',
			background: 'rgb(29, 29, 29)',
			timer: 2000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
				const b = Swal.getHtmlContainer().querySelector('b');
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft();
				}, 100);
			},
			willClose: () => {
				clearInterval(timerInterval);
			}
		}).then((result) => {
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log('I was closed by the timer');
			}
		});
	});
});

$(function() {
	$('#buyButton').click(function() {
		let timerInterval;
		Swal.fire({
			title: '<p class="text-light">Compra realizada con <span class="text-warning">??xito.</span><p>',
			icon: 'success',
			html:
				'<p class="text-center text-primary">Productos Blizzardi. Lo mismo pero m??s barato.</p>',
			background: 'rgb(29, 29, 29)',
			timer: 6000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
				const b = Swal.getHtmlContainer().querySelector('b');
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft();
				}, 100);
			},
			willClose: () => {
				clearInterval(timerInterval);
			}
		}).then((result) => {
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log('I was closed by the timer');
			}
		});
	});
});

//ajax//

const URLGETT = 'https://jsonplaceholder.typicode.com/users';

$('#recomendaciones').one('click', function() {
	$.get(URLGETT, function(rta, status) {
		if (status === 'success') {
			let datos = rta;
			for (const dato of datos) {
				$('.recomendacionesUsuarios').append(`<div class="recomendaciones">${dato.name}: ${dato.email}</div>`);
			}
		}
	});
});
