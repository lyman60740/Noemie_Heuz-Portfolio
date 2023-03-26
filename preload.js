$(document).ready(function() {
  $(window).scrollTop(0);
  $("body > *:not(.compteurBox, .landing_eyeContain, header, .landing_bloc_text, .bloc_cta, .container  )").addClass("preload-opacity")
  
  setTimeout(function(){
    $('.name div').each(function(index) {
      setTimeout(function() {
        $(this).addClass('letterAnime');
      }.bind(this), index * 40);
    });
    $('body').css('overflow', 'visible')
    setTimeout(function(){
        $('.metier div').each(function(index) {
            setTimeout(function() {
              $(this).addClass('letterAnime');
            }.bind(this), index * 40);
          });
    },500)
  },5000)
    
     // Créez un objet pour stocker la valeur actuelle du compteur
  var compteur = { value: 0 };

  // Utilisez GSAP pour animer la valeur du compteur de 0 à 100 en 5 secondes
  gsap.to(compteur, {
    duration: 4,
    value: 100,
    ease: "linear",
    onUpdate: function() {
      // Calculez la valeur des dizaines et des unités
      var dizaines = Math.floor(compteur.value / 10);
      var unites = Math.floor(compteur.value % 10);

      // Mettez à jour les éléments HTML avec les valeurs actuelles des dizaines et des unités
      $('#compteurDizaines').text(dizaines);
      $('#compteurUnites').text(unites);
    },
    onComplete: function() {
      // Lorsque l'animation est terminée, définissez les valeurs de compteurDizaines et compteurUnites sur 100
      $('#compteurDizaines').text(10);
      $('#compteurUnites').text(0);
      $('#compteurUnites').css('filter', 'none')
    }
  });


  });
  

// Zoom animation
  // $(document).ready(function() {
  //   // Sélectionnez l'élément à animer, remplacez '.your-element' par le sélecteur de votre élément
  //   var $element = $('.landing_eyeContain_eyeBox');
  
  //   // Appliquez une perspective initiale à l'élément
  //   gsap.set($element, {
  //     transformPerspective: 800,
  //     transformOrigin: '23% 50%',
  //     scale: 18 // Zoom initial sur l'élément
  //   });
  //   var timeline = gsap.timeline();
  //   setTimeout(function(){
  //   // Créez l'animation
   
  //   timeline.to($element, {
  //     duration: 4, // Durée de l'animation en secondes
  //     scale: 1, // La caméra se recule pour voir l'ensemble de la page
  //     ease: 'power1.out' // Type d'accélération pour l'animation
  //   });
  //   },2000)
    
  
  //   // Lancez l'animation
  //   timeline.play();
  // });
  