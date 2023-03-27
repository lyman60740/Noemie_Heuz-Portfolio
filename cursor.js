var mouseXBlend = 0;
var mouseYBlend = 0;

$(document).on('mousemove', function(e) {
  mouseXBlend = e.pageX;
  mouseYBlend = e.pageY;
   
});

function moveCursor() {
  $('.cursor').css({
    left: mouseXBlend - 15,
    top: mouseYBlend- 15
  });
  
  $('.cursor').siblings().each(function() {
    if ($(this).is(':hover')) {
      $(this).css('mix-blend-mode', 'normal');
    } else {
      $(this).css('mix-blend-mode', 'difference');
    }
  });

  requestAnimationFrame(moveCursor);
}

moveCursor();

$('.project_bloc_right_line').on("mousemove", function (e) {
  var mouseX = e.pageX;
  var mouseY = e.pageY;
  $(".custom-cursor").css({
    "top": mouseY - 52 + "px", // Soustraire la moitié de la taille du cercle pour centrer le curseur
    "left": mouseX - 52 + "px", // Soustraire la moitié de la taille du cercle pour centrer le curseur
  });
});

