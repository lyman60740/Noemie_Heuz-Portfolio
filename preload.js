$(document).ready(function() {

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
  