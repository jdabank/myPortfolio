$(() => {
  $('.nav').hover(
    function () {
      $(this).fadeOut()
    },
    function () {
      $(this).fadeIn()
    }
  )
})
