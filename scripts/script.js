$(document).ready(function() {
    
/* Click event for ENTER */

    $("#btt").click(function() {
      $("#bio").slideDown("slow");
    });

/* Animate scroll to body div content Page 1 */

    $("#btt").click(function() {
      $('body').animate({scrollTop:'+=650px'}, 800);
    });

/* Click event for About Me */

    $("#btt3").click(function() {
      $("#about").fadeIn("slow");
    });

/* Animate scroll to body div content on Page 2 */

    $("#btt3").click(function() {
      $('body').animate({scrollTop:'+=650px'}, 800);
    });

/* Fade out Enter button on #bttn click! */

    $("#btt, #btt3").click(function(){
      $(this).fadeOut("slow");
    });

/* Click event for All Good! */

    $("#btt2").click(function() {
      $("#bio").slideUp("slow");
    });

/* Fade in Enter Button on #bttn2 click! */

    $("#btt2").click(function() {
      $("#btt").fadeIn("slow");
    });

/* Animate scroll to top of page */

    $("#btt2").click(function() {
      $('body').animate({scrollTop:'-=650px'}, 800);
    });

});