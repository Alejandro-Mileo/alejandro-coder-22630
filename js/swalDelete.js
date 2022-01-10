$("button").on("click", function(){             ///SWAL al botón de eliminar item en el carrito (html).

   
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Item eliminado con éxito.',
    showConfirmButton: false,
    timer: 1500
  })
})