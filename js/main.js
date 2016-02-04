// add scripts

$(document).ready(function() {

  // Hide returning user button if there is no stored information

  if (JSON.parse(localStorage.getItem("user")) === null) {
    $('#returninguser').remove();
  }

  $('#introenter, #returninguser')
    .show()
    .addClass('animated bounceInDown');

  $('#introenter').on('hover', function() {
        $(this).add
        $(this).addClass('animated pulse');
  });



  $('nav').addClass('animated bounceInDown');


 $('#introenter').on('click', function () {
      localStorage.clear();
 });


});
