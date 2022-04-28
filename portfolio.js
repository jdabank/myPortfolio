$(() => {
  $('.title').slideDown(4000)
  $('.name').slideDown(4000)
  $('a').mouseover(function(){
    $('a').css('color', 'white').css('text-shadow', '1px 1px 5px gray')
  })
    $('a').mouseout(function(){
    $('a').css('color', 'black').css('text-shadow', 'none')
  })
  $('img').slideDown(4000)
})
