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

 var projets = [
    {
      categorie: 'uxui',
      titre: 'Landing page',
      numero: 1,
      type: 'Site web',
      image: './assets/imagesTest/jerem.jpg',
      description: `Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.`,
      outils: 'Figma, HTML, CSS',
      view: './assets/imagesTest/jerem.jpg',
      palette: {
        carac1: '#FFFFFF',
        carac2: '#1B1B1E',
        carac3: '#C9F0FF',
        carac4: 'Roboto',
        carac5: 'Visuels',
      }
    },
    {
      categorie: 'uxui',
      titre: 'Calculatrice',
      numero: 2,
      type: 'Application mobile',
      image: './assets/imagesTest/jupiter.png',
      description: `Le projet consiste à concevoir l'UI-UX Design d'une application mobile de calculatrice personnalisable.`,
      outils: 'Figma',
      view: './assets/imagesTest/jerem.jpg',
      palette: {
        carac1: '#E6E6F0',
        carac2: '#000000',
        carac3: 'Pink Gradient',
        carac4: 'Purple Gradient',
        carac5: 'Cyan Gradient',
        carac6: 'Heebo',
      }
    },
    {
      categorie: 'uxui',
      titre: 'Page de connexion',
      numero: 3,
      type: 'Application mobile',
      image: './assets/imagesTest/future.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une application de calculatrice personnalisable.`,
      outils: 'Figma',
      view: './assets/imagesTest/jerem.jpg',
      palette: {
        carac1: '#000000',
        carac2: '#EEEBDA',
        carac3: '#F2AF9F',
        carac4: '#EC7D69',
        carac5: '#ABD0BF',
        carac5: '#065143',
        carac5: 'Syne Inter',
        carac5: 'Visuels',
      } },
    {
      categorie: 'uxui',
      titre: 'Page de paiement',
      numero: 1,
      type: 'Application mobile',
      image: './assets/imagesTest/graphiste.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.`,
      outils: 'Figma, HTML, CSS',
      view: './assets/imagesTest/jerem.jpg',
      palette: {
        carac1: '#FFFFFF',
        carac2: '#1B1B1E',
        carac3: '#C9F0FF',
        carac4: 'Roboto',
        carac5: 'Visuels',
      } },
    {
      categorie: 'uxui',
      titre: 'Projet - 5',
      numero: 2,
      type: 'Type de projet',
      image: './assets/imagesTest/logocomp.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.`,
      outils: 'Figma, HTML, CSS',
      view: './assets/imagesTest/jerem.jpg',
      palette: {
        carac1: '#FFFFFF',
        carac2: '#1B1B1E',
        carac3: '#C9F0FF',
        carac4: 'Roboto',
        carac5: 'Visuels',
      } },
    {
      categorie: '3d',
      titre: 'Le cube',
      numero: 3,
      type: 'Illustration 3D',
      image: './assets/imagesTest/graphiste.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.`,
      outils: 'Figma, HTML, CSS',
      view: './assets/imagesTest/jerem.jpg',
      palette: {
        carac1: '#FFFFFF',
        carac2: '#1B1B1E',
        carac3: '#C9F0FF',
        carac4: 'Roboto',
        carac5: 'Visuels',
      } },
    {
      categorie: 'illustration',
      titre: 'Le baiser',
      numero: 3,
      type: 'Illustration',
      image: './assets/imagesTest/graphiste.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.`,
      outils: 'Figma, HTML, CSS',
      view: './assets/imagesTest/jerem.jpg',
      palette: {
        carac1: '#FFFFFF',
        carac2: '#1B1B1E',
        carac3: '#C9F0FF',
        carac4: 'Roboto',
        carac5: 'Visuels',
      } },
    {
      categorie: 'illustration',
      titre: 'Perso. 01',
      numero: 3,
      type: 'Illustration',
      image: './assets/imagesTest/graphiste.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une application de calculatrice personnalisable.`,
      outils: 'Procreate',
      view: './assets/imagesTest/jerem.jpg',
      palette: {
        
      } },
  ];
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

  anime({
    targets: '.project_bloc_right_line img', 
    left: (targetX + 150) + 'px',
    top: (targetY - 100) + 'px',
    easing: 'easeInOutSine',
    duration: 1,
  });

  requestAnimationFrame(moveImage);
}


moveImage();
//TODO continuer d'implémenter la page projet dynamique via la tech url
for(let i = 0; i < projets.length; i++){
  $('.project_bloc_right_blocLine').append(`
  <a href="./projects.html?titre=${encodeURIComponent(projets[i].titre)}" class="project_bloc_right_line">
    <h2>${projets[i].titre}</h2>
    <span>${projets[i].type}</span>
    <div></div>
  </a>
`);


  $('.project_bloc_right_line').eq(i).on('mouseenter', function(){
    $(this).append(`<img class="project_bloc_right_line_img" src="${projets[i].image}" alt="">`);
    targetX = mouseX;
    targetY = mouseY;
    anime({
      targets: '.project_bloc_right_line img', 
      opacity: 1,
      delay: 100,
    });

    // Vérifier si la catégorie est "uxui" et ajouter la classe blue en conséquence
    if (projets[i].categorie === 'uxui') {
      $('.uxuiCategorie').addClass('blue');
      $('.uxuiCategorie').prev().css({
        'transform': 'scaleX(1.2)',
        'background': '#84A3D2'
      })
    }
    if (projets[i].categorie === '3d') {
      $('.3dCategorie').addClass('blue');
      $('.3dCategorie').prev().css({
        'transform': 'scaleX(1.2)',
        'background': '#84A3D2'
      })
    }
    if (projets[i].categorie === 'illustration') {
      $('.illustrationCategorie').addClass('blue');
      $('.illustrationCategorie').prev().css({
        'transform': 'scaleX(1.2)',
        'background': '#84A3D2'
      })
      
    }
  });

  $('.project_bloc_right_line').on('mouseleave', function(){
    $(this).find('.project_bloc_right_line_img').remove();
    
    // Vérifier si la catégorie est "uxui" et supprimer la classe blue en conséquence
    if (projets[i].categorie === 'uxui') {
      $('.uxuiCategorie').removeClass('blue');
      $('.uxuiCategorie').prev().css({
        'transform': 'scaleX(1)',
        'background': '#F1EFE3'
      })
    }
    if (projets[i].categorie === '3d') {
      $('.3dCategorie').removeClass('blue');
      $('.3dCategorie').prev().css({
        'transform': 'scaleX(1)',
        'background': '#F1EFE3'
      })
    }
    if (projets[i].categorie === 'illustration') {
      $('.illustrationCategorie').removeClass('blue');
      $('.illustrationCategorie').prev().css({
        'transform': 'scaleX(1)',
        'background': '#F1EFE3'
      })
    }
  });
  
}


$(window).on('scroll', function() {
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
  var bottomLimit = (blocRightPos + blocRightHeight - windowHeight + blocLeftHeight / 2)+150;

  if (scrollPos >= topLimit && scrollPos <= bottomLimit) {
    if (blocLeftHeight <= windowHeight) {
      newTranslateY = (centerOffset - blocLeftHeight / 2) + 'px';
    } else {
      newTranslateY = ((windowHeight - blocLeftHeight) / 2) + 'px';
    }
  }

  $('.project_bloc_left').css('transform', 'translateY(' + newTranslateY + ')');

});






 
  
  