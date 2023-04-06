import { projets } from "./module.js";

const cvButton = $('.cvButton');
$( document ).ready(function(){
  var navHeight = $('header nav').height();
  $('header nav span').css('height', `${navHeight}px`);
    $('.cvButton_circleWhite').css('transform', 'scale(0)');
    $('.contactButton_circleWhite').css('transform', 'scale(0)');

    

})
var cvButtonAnimations = []; // créer un tableau pour stocker les animations

const paupTop = $('.landing_eyeContain_eyeBox_paupieres-top')
const paupBottom = $('.landing_eyeContain_eyeBox_paupieres-bottom')
const iris = $('.landing_eyeContain_eyeBox_paupieres-iris-pupille')
var isCvButtonHovered = false;

cvButton.on('mouseenter', function(e){
  isCvButtonHovered = true;
  // Mettre en pause toutes les animations en cours
  for (var i = 0; i < cvButtonAnimations.length; i++) {
    cvButtonAnimations[i].pause();
  }

          gsap.to(paupTop, {
              // this is the vars object
              // it contains properties to animate
              height: 175,
              // and special properties
              
              
              
            })
            gsap.to(paupBottom, {
              // this is the vars object
              // it contains properties to animate
              height: 175,
              // and special properties
              
              
              
            })

  var eyeAnimation3 = anime({
    targets: '.landing_eyeContain_eyeBox_paupieres-iris-pupille', 
    scale: 0.8,
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
  isCvButtonHovered = false;
  // Mettre en pause toutes les animations en cours
  for (var i = 0; i < cvButtonAnimations.length; i++) {
    cvButtonAnimations[i].pause();
  }
  
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
  isCvButtonHovered = true;
    // Mettre en pause toutes les animations en cours
    for (var i = 0; i < contactButtonAnimations.length; i++) {
      contactButtonAnimations[i].pause();
    }
    gsap.to(paupTop, {
      // this is the vars object
      // it contains properties to animate
      height: 175,
      // and special properties
      
      
      
    })
    gsap.to(paupBottom, {
      // this is the vars object
      // it contains properties to animate
      height: 175,
      // and special properties
      
      
      
    })
    var eyeAnimation13 = anime({
      targets: '.landing_eyeContain_eyeBox_paupieres-iris-pupille', 
      scale: 0.8,
      easing: 'easeOutQuart'
    });
    cvButtonAnimations.push(eyeAnimation13);
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
    isCvButtonHovered = false;
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
  if ($(window).width() < 600) {
  $('.project_bloc_right_blocLine').append(`
    <a href="./projects.html?titre=${encodeURIComponent(projets[i].titre)}" class="project_bloc_right_line ${disabledClass} " data=${mockup} data-cat=${projets[i].categorie}>
      <div><h2>${projets[i].titre}</h2><div class="custom-cursor  custom-cursor-mobile"><img src="./assets/arrow.svg" alt=""></div></div>
      <span>${projets[i].type}</span>
      <div></div>
    </a>
  `);
  
  $(`
  <div class="project_bloc_left_section">
    <div></div>
    <h3 class="uxuiCategorie" >UI - UX Design</h3>
  </div>
  `).insertBefore('.project_bloc_right_blocLine a:nth-child(1)');
  $(`
  <div class="project_bloc_left_section">
    <div></div>
    <h3 class="uxuiCategorie" >Illustration 3D</h3>
  </div>
  `).insertBefore('.project_bloc_right_blocLine a:nth-child(7)');
  $(`
  <div class="project_bloc_left_section">
    <div></div>
    <h3 class="uxuiCategorie" >Illustration</h3>
  </div>
  `).insertBefore('.project_bloc_right_blocLine a:nth-child(9)');
  $('.disabled-project .custom-cursor-mobile').html('<p class="circleDisabled"></p>');
  } else {
    $('.project_bloc_right_blocLine').append(`
    <a href="./projects.html?titre=${encodeURIComponent(projets[i].titre)}" class="project_bloc_right_line ${disabledClass} " data=${mockup} data-cat=${projets[i].categorie}>
      <h2>${projets[i].titre}</h2>
      <span>${projets[i].type}</span>
      <div></div>
    </a>
  `);
  }
}



if ($(window).width() > 600) {
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
}
$(document).ready(function() {
$(window).on('scroll', function () {

  if ($("#about").offset().top - $(window).scrollTop() <= 100) {
    $(".arrowScroll").css("transform", "rotate(180deg)");
    $(".arrowScroll").on('click', function(){
      $(window).scrollTop(0);
    })

  } else {
    $(".arrowScroll").css("transform", "rotate(0deg)");
    $(".arrowScroll").on('click', function(event){
      event.preventDefault();
      $(window).scrollTop(($("#about").offset().top)-70);
    })
  }

  var scrollPos = $(window).scrollTop();
  var blocPos = $('.project_bloc').offset().top;
  
  var windowHeight = $(window).height();
  var centerPos = scrollPos + (windowHeight / 2);
  var blocLeftHeight = $('.project_bloc_left').outerHeight();

  var centerOffset = centerPos - blocPos;
  var newTranslateY = '0';

  var blocRightPos = $('.project_bloc_right').offset().top;
 
  var topLimit = blocRightPos - blocLeftHeight / 2;
  var blocLineBottom = $('.project_bloc_right_blocLine').offset().top + $('.project_bloc_right_blocLine').outerHeight();
  var bottomLimit = (blocLineBottom - windowHeight + blocLeftHeight / 2);

  
  var projectBlocHeight = $('.project_bloc_right_blocLine').outerHeight();

  if (scrollPos >= topLimit && scrollPos <= bottomLimit) {
    if (blocLeftHeight <= windowHeight) {
      newTranslateY = Math.min(centerOffset - blocLeftHeight / 2, projectBlocHeight - blocLeftHeight - 10) + 'px';
    } else {
      newTranslateY = Math.min((windowHeight - blocLeftHeight) / 2, projectBlocHeight - blocLeftHeight - 10) + 'px';
    }
  } else if (scrollPos > bottomLimit) {
    newTranslateY = Math.min((bottomLimit - topLimit) * 1.28, projectBlocHeight - blocLeftHeight - 10) + 'px';
  }

  $('.project_bloc_left').css('transform', 'translateY(' + newTranslateY + ')');
});
});





$(document).ready(function() {
  var originalElement;

  $('.project_bloc_right_line[data-cat="3d"]').hover(
    function() {
      // Lorsque le curseur survole l'élément
      var $customCursor = $('.custom-cursor');
      originalElement = $customCursor.html();
      $customCursor.html('<span>SOON</span>');
      $(this).on('click', function(event) {
        event.preventDefault();
      });
    },
    function() {
      // Lorsque le curseur sort de l'élément
      $('.custom-cursor').html(originalElement);
      $(this).off('click');
    }
  );
});



$(document).ready(function() {


  
  var lastScrollTop = 0;

  function isElementEnteringViewport(el) {
      if (!el) return false;
      var rect = el.getBoundingClientRect();
      return (
          (rect.top >= 0 &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
          (rect.bottom >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
  }

  function isElementLeavingViewport(el) {
      if (!el) return false;
      var rect = el.getBoundingClientRect();
      return (
          (rect.top < 0 && rect.bottom < 0) ||
          (rect.top > (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom > (window.innerHeight || document.documentElement.clientHeight))
      );
  }

  function getInitialTranslateX(el) {
      var transformMatrix = window.getComputedStyle(el).transform;
      if (transformMatrix !== 'none') {
          var matrixValues = transformMatrix.split('(')[1].split(')')[0].split(',');
          return parseFloat(matrixValues[4]);
      }
      return 0;
  }

  function onScroll() {
      var scrollTop = $(window).scrollTop();
      var scrollDirection = scrollTop > lastScrollTop ? "down" : "up";
      lastScrollTop = scrollTop;

      // Sélectionner tous les éléments avec la classe .your-element-class
      var targetElements = $('.project_description_bloc p');

      targetElements.each(function() {
          var element = $(this);
          var tl = gsap.timeline();
          if (isElementEnteringViewport(element[0])) {
              // Animation d'apparition
              tl.to(element, {
                  duration: 1,
                  x: 0,
                  opacity: 1,
                  ease: 'power1.out'
              });
          }

          if (isElementLeavingViewport(element[0])) {
              // Animation de disparition
              tl.to(element, {
                  duration: 1,
                  x: -100,
                  opacity: 0,
                  ease: 'power1.in'
              });
          }
          
      });
  }

  // Ajouter l'événement de défilement
  $(window).on('scroll', onScroll);
});













 
  
  