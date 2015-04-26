$(document).ready(function() {
  	// ryu is in his ready to fight position
	$('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })

  .mouseleave(function() {
  	// ryu mouseleave
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })

  .mousedown(function() {
  	// ryu mousedown
    console.log('mousedown');
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    // show hadouken and animate it to the right of the screen
  })

  .mouseup(function() {
    // ryu goes back to his ready position
  	$('ryu-throwing').hide();
  	$('ryu-ready').show();
  });
});