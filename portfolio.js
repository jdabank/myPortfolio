$(() => {
  $('.title').slideDown(4000)
  $('.name').slideDown(4000)
  $('#1').mouseover(function(){
    $('#1').css('color', 'white').css('text-shadow', '1px 1px 5px gray')
  })
    $('#1').mouseout(function(){
    $('#1').css('color', 'black').css('text-shadow', 'none')
  })
  $('#2').mouseover(function(){
    $('#2').css('color', 'white').css('text-shadow', '1px 1px 5px gray')
  })
    $('#2').mouseout(function(){
    $('#2').css('color', 'black').css('text-shadow', 'none')
  })
  $('#3').mouseover(function(){
    $('#3').css('color', 'white').css('text-shadow', '1px 1px 5px gray')
  })
    $('#3').mouseout(function(){
    $('#3').css('color', 'black').css('text-shadow', 'none')
  })
  $('#4').mouseover(function(){
    $('#4').css('color', 'white').css('text-shadow', '1px 1px 5px gray')
  })
    $('#4').mouseout(function(){
    $('#4').css('color', 'black').css('text-shadow', 'none')
  })
  $('#5').mouseover(function(){
    $('#5').css('color', 'white').css('text-shadow', '1px 1px 5px gray')
  })
    $('#5').mouseout(function(){
    $('#5').css('color', 'black').css('text-shadow', 'none')
  })
  $('#linkedin').mouseover(function(){
    $('#linkedin').css('color', 'white').css('background-color', '#0077b5').css('padding', '2px').css('border-radius', '5px')
  })
    $('#linkedin').mouseout(function(){
    $('#linkedin').css('color', 'black').css('background-color', 'white')
  })
  $('#instagram').mouseover(function(){
    $('#instagram').css('color', 'white').css('background-color', '#8A3AB9').css('padding', '2px').css('border-radius', '5px')
  })
    $('#instagram').mouseout(function(){
    $('#instagram').css('color', 'black').css('background-color', 'white')
  })
  $('#me').slideDown(4000)

  let currentImgIndex = 0
  const numOfImages = $('.carousel').children().length - 1

  $('button').on('click', () => {
    $('.carousel').children().eq(currentImgIndex).css('display', 'none')
    if(currentImgIndex < numOfImages) {
      currentImgIndex ++
    } else {
      currentImgIndex = 0
    }
    $('.carousel').children().eq(currentImgIndex).css('display', 'block')
  })
})
