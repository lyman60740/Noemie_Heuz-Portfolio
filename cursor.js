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

$(document).ready(function() {
  var parentWidth = $('.landing_eyeContain_eyeBox_paupieres-iris').width();
  var parentHeight = $('.landing_eyeContain_eyeBox_paupieres-iris').height();

  function updateAnimation(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;

    var distanceX = mouseX - $('.landing_eyeContain_eyeBox_paupieres-iris').offset().left - parentWidth / 2;
    var distanceY = mouseY - $('.landing_eyeContain_eyeBox_paupieres-iris').offset().top - parentHeight / 2;
    var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    var pupilX = distanceX / distance * (parentWidth / 2 - iris.width() / 2);
    var pupilY = distanceY / distance * (parentHeight / 2 - iris.height() / 2);

    // Nouveau code pour gérer l'animation des paupières
    var minDistance = 100; // Distance minimale pour fermer complètement les paupières
var maxDistance = 300; // Distance maximale pour déclencher l'animation
var eyelidBottomY;

if (distance < minDistance) {
    eyelidBottomY = 202; // Paupière complètement fermée
} else if (distance < maxDistance) {
    var ratio = 1 - (distance - minDistance) / (maxDistance - minDistance); // Pourcentage de fermeture des paupières
    eyelidBottomY = 148 + (202 - 148) * ratio; // Interpolation linéaire entre 148 (ouvert) et 202 (fermé)
} else {
    eyelidBottomY = 148; // Paupière complètement ouverte
}


    gsap.to(paupTop, {
      // this is the vars object
      // it contains properties to animate
      height: eyelidBottomY,
      // and special properties
      duration: "10ms",
      ease: "power1.inOut",
      
    })
    gsap.to(paupBottom, {
      // this is the vars object
      // it contains properties to animate
      height: eyelidBottomY,
      // and special properties
      duration: "10ms",
      ease: "power1.inOut",
      
    })
    // Fin du nouveau code
    gsap.to(iris, {
      // this is the vars object
      // it contains properties to animate
      x: pupilX,
      y: pupilY,
      // and special properties
      duration: '100ms',
      ease: "power1.inOut",
      
    })
    
  }  
  // Utilisez la fonction throttle pour limiter le nombre d'appels à updateAnimation
  var throttledUpdateAnimation = _.throttle(updateAnimation, 16);

  $(document).on('mousemove', function(event) {
    if (!isCvButtonHovered) {
      throttledUpdateAnimation(event);
    }
  });
  
});
