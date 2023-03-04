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

cvButton.on('mouseenter', function(){
  // Mettre en pause toutes les animations en cours
  for (var i = 0; i < cvButtonAnimations.length; i++) {
    cvButtonAnimations[i].pause();
  }

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
    targets: '.arrowCv, .cvButton_arrowBox div',
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

cvButton.on('mouseleave', function(){
  // Mettre en pause toutes les animations en cours
  for (var i = 0; i < cvButtonAnimations.length; i++) {
    cvButtonAnimations[i].pause();
  }

  // Réinitialiser .cvButton_circleWhite
  anime({
    targets: '.cvButton_circleWhite',
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
    targets: '.arrowCv, .cvButton_arrowBox div',
    duration: 1,
    opacity: 0,
    easing: 'easeInOutSine'
  });

  // Réinitialiser .cvButton span
  anime({
    targets: '.cvButton span',
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
    targets: '.validate',
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
      titre: 'Projet',
      numero: 1,
      type: 'Type de projet',
      image: './assets/imagesTest/jerem.jpg'
    },
    {
      titre: 'Projet',
      numero: 2,
      type: 'Type de projet',
      image: './assets/imagesTest/jupiter.png'
    },
    {
      titre: 'Projet',
      numero: 3,
      type: 'Type de projet',
      image: './assets/imagesTest/future.png'
    },
    {
      titre: 'Projet',
      numero: 1,
      type: 'Type de projet',
      image: './assets/imagesTest/graphiste.png'
    },
    {
      titre: 'Projet',
      numero: 2,
      type: 'Type de projet',
      image: './assets/imagesTest/logocomp.png'
    },
    {
      titre: 'Projet',
      numero: 3,
      type: 'Type de projet',
      image: 'chemin/vers/imageC.png'
    },
    // Pour ajouter un nouveau projet copiez le code ci dessous
    // ecrit en vert et collez le juste aprés la virgule du dernier projet
    // ( attention à bien retirer les '//')
    // {
    //  titre: 'Projet C',
    //  numero: 3,
    //  type: 'Type 1',
    //  image: 'chemin/vers/imageC.png'
    //},
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

for(let i = 0; i < projets.length; i++){
  $('.project_bloc_right').append(`
    <div class="project_bloc_right_line">
      <h2>${projets[i].titre} - ${projets[i].numero}</h2>
      <span>${projets[i].type}</span>
      <div></div>
    </div>
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
  });

  $('.project_bloc_right_line').eq(i).on('mouseleave', function(){
    $(this).find('.project_bloc_right_line_img').remove();
  });
}






 
  
  