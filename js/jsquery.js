$(function(){


$("button").click(function(){
    
    let timerInterval
    Swal.fire({
      title: '<p class="text-light">Montura añadida con <span class="text-warning">éxito</span><p>',
      icon: 'success',
      html: '<p class="text-center text-success">Item agregado al carrito. <br class="pt-5">Gracias por comprar.</p>',
      background: 'rgb(29, 29, 29)',
      timer: 2500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
})


})


