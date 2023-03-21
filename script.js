import { projets } from "./module.js";

const cvButton = $('.cvButton');
$( document ).ready(function(){
  var navHeight = $('header nav').height();
  $('header nav span').css('height', `${navHeight}px`);
    $('.cvButton_circleWhite').css('transform', 'scale(0)');
    $('.contactButton_circleWhite').css('transform', 'scale(0)');

//     var elem = document.documentElement; // obtenir l'élément HTML

//   $('h1').on('click', function() {
//     if (elem.requestFullscreen) {
//       elem.requestFullscreen();
//     } else if (elem.mozRequestFullScreen) { /* Firefox */
//       elem.mozRequestFullScreen();
//     } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari et Opera */
//       elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE/Edge */
//       elem.msRequestFullscreen();
//     }
//   });
})
var cvButtonAnimations = []; // créer un tableau pour stocker les animations

cvButton.on('mouseenter', function(e){
  // Mettre en pause toutes les animations en cours
  for (var i = 0; i < cvButtonAnimations.length; i++) {
    cvButtonAnimations[i].pause();
  }

  var eyeAnimation = anime({
    targets: '.landing_eyeContain_eyeBox_paupieres-top', 
    translateY: -40,
    easing: 'easeOutQuart',
    duration: 300
  });
  cvButtonAnimations.push(eyeAnimation);

  var eyeAnimation1 = anime({
    targets: '.landing_eyeContain_eyeBox_paupieres-bottom', 
    translateY: 40,
    easing: 'easeOutQuart',
    duration: 300
  });
  cvButtonAnimations.push(eyeAnimation1);

  var eyeAnimation3 = anime({
    targets: '.landing_eyeContain_eyeBox_paupieres-iris-pupille', 
    scale: 0.8,
    duration: 1200,
    easing: 'easeOutQuart'
  });
  cvButtonAnimations.push(eyeAnimation3);

//TODO trouver comment animer seulement le bouton ciblé 
  // Animer .cvButton_circleWhite
  var animation1 = anime({
    targets: '.cvButton_circleWhite', 
    scale: 1,
    easing: 'easeOutElastic(1, .9)',
    duration: 700
  });
  cvButtonAnimations.push(animation1);

  // Animer .arrowCv et .cvButton_arrowBox div
  var animation2 = anime({
    targets:'.arrowCv, .cvButton_arrowBox div',
    opacity: 1,
    delay: 200,
    easing: 'easeInOutSine',
    duration: 200
  });
  cvButtonAnimations.push(animation2);

  // Animer .cvButton span
  var animation3 = anime({
    targets: '.cvButton span', 
    opacity: 0,
    easing: 'easeInOutSine',
    duration: 500
  });
  cvButtonAnimations.push(animation3);
});

cvButton.on('mouseleave', function(e){
  // Mettre en pause toutes les animations en cours
  for (var i = 0; i < cvButtonAnimations.length; i++) {
    cvButtonAnimations[i].pause();
  }
  anime({
    targets: '.landing_eyeContain_eyeBox_paupieres-top', 
    translateY: -55,
    easing: 'easeOutQuart',
  });
  anime({
    targets: '.landing_eyeContain_eyeBox_paupieres-bottom', 
    translateY: 55,
    easing: 'easeOutQuart',
  });
   anime({
    targets: '.landing_eyeContain_eyeBox_paupieres-iris-pupille', 
    scale: 1,
    duration: 1200,
    easing: 'easeOutQuart'
  });
  // Réinitialiser .cvButton_circleWhite
  anime({
    targets:'.cvButton_circleWhite', 
    scale: 0,
    easing: 'easeInOutSine',
    duration: 500
  });
  anime({
    targets: '.contactButton_circleWhite',
    scale: 0,
    easing: 'easeInOutSine',
    duration: 500
  });

  // Réinitialiser .arrowCv et .cvButton_arrowBox div
  anime({
    targets:'.arrowCv, .cvButton_arrowBox div', 
    duration: 1,
    opacity: 0,
    easing: 'easeInOutSine'
  });

  // Réinitialiser .cvButton span
  anime({
    targets:'.cvButton span', 
    opacity: 1,
    easing: 'easeInOutSine',
    duration: 500,
    delay: 200
  });
  anime({
    targets: '.arrowCv',
    translateY: 0,
    easing: 'easeInOutSine' ,
    duration : 1,
    
  });
  anime({
    targets:  '.validate',
    translateY: 0,
    easing: 'easeInOutSine' ,
    duration: 100,
    opacity: 0, 
  });
  anime({
    targets: '.cvButton_largeCircle', 
    borderColor: '#000000', 
    easing: 'easeInOutSine' ,
    duration : 300,
  });
//TODO regarder pq le this marche pas



  // Vider le tableau d'animations
  cvButtonAnimations = [];
});

cvButton.on('click', function(){
    anime({
        targets: '.arrowCv',
        translateY: 40,
        easing: 'easeInOutSine' ,
        duration : 300
      });
      anime({
        targets: '.validate',
        translateY: -15,
        easing: 'easeInOutSine' ,
        duration : 300,
        delay: 500,
        opacity: 1, 
      });
      anime({
        targets: '.cvButton_largeCircle', 
        borderColor: '#F1EFE3', 
        easing: 'easeInOutSine' ,
        duration : 400,
        delay : 800,
      });
})



// CONTACT BUTTON
var contactButtonAnimations = []; // créer un tableau pour stocker les animations
$('.contactButton_blue').on('mouseenter', function(){
    // Mettre en pause toutes les animations en cours
    for (var i = 0; i < contactButtonAnimations.length; i++) {
      contactButtonAnimations[i].pause();
    }
  
    // Animer .contactButton_circleWhite
    var animation11 = anime({
      targets: '.contactButton_circleWhite',
      scale: 1,
      easing: 'easeOutElastic(1, 0.9)',
      duration: 700
    });
    contactButtonAnimations.push(animation11);
    
    var animation12 = anime({
        targets: '.contactButton_largeCircle', 
        borderColor: '#F1EFE3', 
        easing: 'easeInOutSine' ,
        duration : 400,
        delay : 100,
      });
      contactButtonAnimations.push(animation12);
    
  });

  $('.contactButton_blue').on('mouseleave', function(){
    // Mettre en pause toutes les animations en cours
    for (var i = 0; i < contactButtonAnimations.length; i++) {
      contactButtonAnimations[i].pause();
    }
  
    // Réinitialiser .contactButton_circleWhite
    anime({
      targets: '.contactButton_circleWhite',
      scale: 0,
      easing: 'easeInOutSine',
      duration: 500
    });
    anime({
        targets: '.contactButton_largeCircle', 
        borderColor: '#000000', 
        easing: 'easeInOutSine' ,
        duration : 300,
      });
  
  
    // Vider le tableau d'animations
    contactButtonAnimations = [];
  });

  // Insertion data section projet 

  
  var mouseX = 0;
var mouseY = 0;
var targetX = 0;
var targetY = 0;

$(document).on('mousemove', function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function moveImage() {
  var diffX = targetX - mouseX;
  var diffY = targetY - mouseY;
  targetX -= diffX / 10;
  targetY -= diffY / 10;

  var img = $('.project_bloc_right_line img');
  var imgWidth = img.width();
  var imgHeight = img.height();

  anime({
    targets: '.project_bloc_right_line img', 
    left: (targetX - imgWidth / 2) + 'px',
    top: (targetY - imgHeight / 2) + 'px',
    easing: 'easeInOutSine',
    duration: 1,
  });

  requestAnimationFrame(moveImage);
}


moveImage();

// Récupérer le titre du projet à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const titreUrl = decodeURIComponent(urlParams.get("titre"));

for (let i = 0; i < projets.length; i++) {
  const isCurrentProject = projets[i].titre === titreUrl;
  const disabledClass = isCurrentProject ? 'disabled-project' : '';

  // Ajouter une condition pour vérifier si l'id du projet est 'baiser'
  const mockup = projets[i].id === 'baiser' ? './assets/mockup_le_baiser2.png' : projets[i].mockup;
  
  $('.project_bloc_right_blocLine').append(`
    <a href="./projects.html?titre=${encodeURIComponent(projets[i].titre)}" class="project_bloc_right_line ${disabledClass} " data=${mockup} data-cat=${projets[i].categorie}>
      <h2>${projets[i].titre}</h2>
      <span>${projets[i].type}</span>
      <div></div>
    </a>
  `);
}



$('.project_bloc_right_line').on('mouseenter', function(){
  $('.custom-cursor').css({
    'opacity': '1',
    'transform': 'scale(1)'
  })
  var mockup = $(this).attr('data')
  var categorie = $(this).attr('data-cat')
  $(this).append(`<img class="project_bloc_right_line_img" src="${mockup}" alt="">`);
  targetX = mouseX;
  targetY = mouseY;
  
  anime({
    targets: '.project_bloc_right_line img', 
    opacity: 1,
    delay: 100,
  });

  // Vérifier si la catégorie est "uxui" et ajouter la classe blue en conséquence
  if (categorie === 'uxui') {
    $('.uxuiCategorie').addClass('blue');
    $('.uxuiCategorie').prev().css({
      'transform': 'scaleX(1.2)',
      'background': '#84A3D2'
    })
  }
  if (categorie === '3d') {
    $('.3dCategorie').addClass('blue');
    $('.3dCategorie').prev().css({
      'transform': 'scaleX(1.2)',
      'background': '#84A3D2'
    })
  }
  if (categorie === 'illustration') {
    $('.illustrationCategorie').addClass('blue');
    $('.illustrationCategorie').prev().css({
      'transform': 'scaleX(1.2)',
      'background': '#84A3D2'
    })
    
  }
});
$('.project_bloc_right_line').on('mouseleave', function(){
  $('.custom-cursor').css({
    'opacity': '0',
    'transform': 'scale(0)'
  })
  $(this).find('.project_bloc_right_line_img').remove();
  var categorie = $(this).attr('data-cat')
  // Vérifier si la catégorie est "uxui" et supprimer la classe blue en conséquence
  if (categorie === 'uxui') {
    $('.uxuiCategorie').removeClass('blue');
    $('.uxuiCategorie').prev().css({
      'transform': 'scaleX(1)',
      'background': '#F1EFE3'
    })
  }
  if (categorie === '3d') {
    $('.3dCategorie').removeClass('blue');
    $('.3dCategorie').prev().css({
      'transform': 'scaleX(1)',
      'background': '#F1EFE3'
    })
  }
  if (categorie === 'illustration') {
    $('.illustrationCategorie').removeClass('blue');
    $('.illustrationCategorie').prev().css({
      'transform': 'scaleX(1)',
      'background': '#F1EFE3'
    })
  }
});





$(window).on('scroll', function () {
  var scrollPos = $(window).scrollTop();
  var blocPos = $('.project_bloc').offset().top;
  var blocHeight = $('.project_bloc').outerHeight();
  var windowHeight = $(window).height();
  var centerPos = scrollPos + (windowHeight / 2);
  var blocLeftHeight = $('.project_bloc_left').outerHeight();
  var blocLeftOffset = $('.project_bloc_left').offset().top;
  var centerOffset = centerPos - blocPos;
  var newTranslateY = '0';

  var blocRightPos = $('.project_bloc_right').offset().top;
  var blocRightHeight = $('.project_bloc_right').outerHeight();
  var topLimit = blocRightPos - blocLeftHeight / 2;
  var blocLineBottom = $('.project_bloc_right_blocLine').offset().top + $('.project_bloc_right_blocLine').outerHeight();
  var bottomLimit = (blocLineBottom - windowHeight + blocLeftHeight / 2);

  if (scrollPos >= topLimit && scrollPos <= bottomLimit) {
    if (blocLeftHeight <= windowHeight) {
      newTranslateY = (centerOffset - blocLeftHeight / 2) + 'px';
    } else {
      newTranslateY = ((windowHeight - blocLeftHeight) / 2) + 'px';
    }
  } else if (scrollPos > bottomLimit) { // Add this condition to handle the case when the scroll position goes beyond the bottom limit
    newTranslateY = (bottomLimit - topLimit)*1.28 + 'px';
  }

  $('.project_bloc_left').css('transform', 'translateY(' + newTranslateY + ')');
});



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

  $(document).on('mousemove', function(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;

    var distanceX = mouseX - $('.landing_eyeContain_eyeBox_paupieres-iris').offset().left - parentWidth / 2;
    var distanceY = mouseY - $('.landing_eyeContain_eyeBox_paupieres-iris').offset().top - parentHeight / 2;
    var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    var pupilX = distanceX / distance * (parentWidth / 2 - $('.landing_eyeContain_eyeBox_paupieres-iris-pupille').width() / 2);
    var pupilY = distanceY / distance * (parentHeight / 2 - $('.landing_eyeContain_eyeBox_paupieres-iris-pupille').height() / 2);

    // Nouveau code pour gérer l'animation des paupières
    var minDistance = 100; // Distance minimale pour fermer complètement les paupières
    var maxDistance = 400; // Distance maximale pour déclencher l'animation
    var eyelidTopY, eyelidBottomY;
    
    if (distance < minDistance) {
      eyelidTopY = 0;
      eyelidBottomY = 0;
    } else if (distance < maxDistance) {
      var ratio = 1 - (distance - minDistance) / (maxDistance - minDistance); // Pourcentage de fermeture des paupières
      eyelidTopY = -55 + ratio * 55;
      eyelidBottomY = 55 - ratio * 55;
    } else {
      eyelidTopY = -55;
      eyelidBottomY = 55;
    }

    $('.landing_eyeContain_eyeBox_paupieres-top').css({
      transform: 'translateY(' + eyelidTopY + 'px)'
    });
    $('.landing_eyeContain_eyeBox_paupieres-bottom').css({
      transform: 'translateY(' + eyelidBottomY + 'px)'
    });
    // Fin du nouveau code

    $('.landing_eyeContain_eyeBox_paupieres-iris-pupille').css({
      transform: 'translate(' + pupilX + 'px,' + pupilY + 'px)'
    });
  });
});
















 
  
  