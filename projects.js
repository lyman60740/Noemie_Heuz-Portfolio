import { projets } from "./module.js";
  // Récupérer le titre dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const titre = urlParams.get('titre');

// Trouver le projet correspondant au titre
const projet = projets.find((p) => p.titre === titre);
const carrouselSlides = projet.carrousel
  .map((imgSrc) => `<div class="slide"><img src="${imgSrc}" alt=""></div>`)
  .join('');
  const outilsSpans = projet.outils
  .map((outil) => `<span>${outil}</span>`)
  .join('');


$(document).ready(function () {
  $('main').prepend(`
  <article class="about">
            <div class="about-catBox">
            <div class="about-catBox-tiret"></div>
            <h3 data-cat=${projet.categorie}></h3>
            </div>
              
              <h1 id="about">${projet.titre}</h1>
              <div class="about_bloc">
                  <section class="about_bloc_content">
                  <div class="mockupBox-${projet.id}">
                          <img src="${projet.mockup}" alt="">
                  </div>
                      <div class="project_description_bloc">
                          <div class="project_description_part">
                              <p>Type</p>
                              <p>${projet.type}</p>
                          </div>
                          <div class="project_description_part">
                              <p>Descriptif</p>
                              <p>${projet.description}</p>
                          </div>
                          <div class="project_description_part">
                              <p>Outils</p>
                              <p>${outilsSpans}</p>
                          </div>
                      </div>
                  </section>

                  <div class="project_presentation presentation-${projet.id}">
                  <video width="1200" height="auto" loop autoplay muted>
                    <source src="${projet.video}" type="video/mp4" >
                    Votre navigateur ne prend pas en charge la vidéo HTML5.
                  </video>
                  </div>
                  
                  <div class="carrousel">
                  <img src="./assets/arrowCarrousel.svg" class="arrowCarrousel-left" >
                  <div class="carrousel-box">
                    ${carrouselSlides}
                  </div>
                  <img src="./assets/arrowCarrousel.svg"  class="arrowCarrousel-right">
                  </div>

                  <section class="palette palette-${projet.id}">
                     
                  </section>
              </div>
          </article>

          `)
          addCarrousel();

if ($.trim($('.carrousel-box').html())) {
  const carrousel = $(".carrousel");
  const slides = carrousel.find(".slide");
  const numSlides = slides.length;
  let currentSlide = 0;
  const duration = 1;
  const hammer = new Hammer(carrousel[0]);
  
  gsap.set(slides, { autoAlpha: 0 });
  gsap.to(slides[currentSlide], { 
    autoAlpha: 1, 
    duration: duration ,
    ease: "elastic.out(1, 0.9)"
  });
  
  function changeSlide(direction) {
    const currentSlideElement = slides[currentSlide];
    if (direction === "next") {
      currentSlide = (currentSlide + 1) % numSlides;
    } else {
      currentSlide = (currentSlide - 1 + numSlides) % numSlides;
    }
    const nextSlideElement = slides[currentSlide];
    const slideDirection = direction === "next" ? "-100%" : "100%";
  
    gsap.to(currentSlideElement, {
      x: slideDirection,
      autoAlpha: 0,
      duration: duration,
      onComplete: () => {
        gsap.set(currentSlideElement, { x: "0%" });
      },
      ease: "elastic.out(1, 0.9)"
    });
  
    gsap.fromTo(
      nextSlideElement,
      { x: slideDirection === "-100%" ? "100%" : "-100%", autoAlpha: 0 },
      { x: "0%", autoAlpha: 1,
       duration: duration,
      ease: "elastic.out(1, 0.9)" }
    );
  }
  hammer.on('swipeleft', () => {
    changeSlide('next');
  });
  hammer.on('swiperight', () => {
    changeSlide('previous');
  });
  $('body').on('click', '.arrowCarrousel-left', function() {
    changeSlide('previous');
  });
  
  $('body').on('click', '.arrowCarrousel-right', function() {
    changeSlide('next');
  });
}




// Appelez la fonction addCarrousel pour ajouter le carrousel et effectuer la vérification


const paletteSection = $('.palette');
paletteSection.empty();

const paletteKeys = Object.keys(projet.palette);
const paletteLength = paletteKeys.length;

if (paletteLength === 0) {
  paletteSection.css('height', '0');
}
const Pink_Gradient = "linear-gradient(15deg, #A6BFFF 27.46%, #F58085 74.66%)";
const Purple_Gradient = "linear-gradient(210deg, #A6E8FF 29.79%, #B380F5 72.11%)";
const Cyan_Gradient = "linear-gradient(45deg, #37ECBA 14.64%, #5799F7 85.36%)";

function setBackground(element, text) {
  switch (text) {
    case "Pink Gradient":
      element.css("background", Pink_Gradient);
      break;
    case "Purple Gradient":
      element.css("background", Purple_Gradient);
      break;
    case "Cyan Gradient":
      element.css("background", Cyan_Gradient);
      break;
  }
}

function isValidCSSColor(color) {
  return color.startsWith("#") || color.startsWith("rgb");
}

function applyWhiteBorder(element) {
  const backgroundColor = element.css('background-color');
  if (backgroundColor === 'rgb(0, 0, 0)') {
    element.css('border', '1px solid white');
  }
}
for (let i = 1; i <= paletteLength; i++) {
  if (projet.palette[`carac${i}`]) {
    if (projet.palette[`carac${i}`].trim() === "") {
      continue;
    }
    
    const color = isValidCSSColor(projet.palette[`carac${i}`].trim()) ? projet.palette[`carac${i}`] : projet.palette[`carac${1}`];

    if (i === 2) {
      const backgroundColor = paletteSection.children().eq(0).css('background-color');
      const newDiv = $(`<div style="color:${backgroundColor}; background-color:${color};"><span style="font-family:${projet.fontFamily}">${projet.palette[`carac${i}`]}</span></div>`);
      setBackground(newDiv, projet.palette[`carac${i}`]);
      applyWhiteBorder(newDiv);
      paletteSection.append(newDiv);
    } else {
      const newDiv = $(`<div style="color:${projet.palette[`carac${2}`]};background-color:${color};"><span style="font-family:${projet.fontFamily}">${projet.palette[`carac${i}`]}</span></div>`);
      setBackground(newDiv, projet.palette[`carac${i}`]);
      applyWhiteBorder(newDiv);
      paletteSection.append(newDiv);
    }
  }
}


  var cat = $(".about h3").attr("data-cat");

  if (cat === "uxui") {
    $(".about h3").text("UI - UX Design");
  } else if (cat === "illustration") {
    $(".about h3").text("Illustration");
  }

  $('.mockupBox-paiement').prepend(`
  <div class="kagebunshin-no-jutsu"></div>
  <div class="kagebunshin-no-jutsu"></div>
  <div class="kagebunshin-no-jutsu"></div>
  <div class="kagebunshin-no-jutsu"></div>
`)


// Animation mockup calculette
$(".mockupBox-calculatrice").prepend(`
  <div class="halo-calc">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  
  </div>
`)


$('.presentation-landing').after(`
<section class="selection-landing">
  <div>
  <img src="./assets/maquette_landing_page.png" alt="">
  </div>
</section>

`);
$('.palette-developpeur div:nth-child(5) span').after(`
  <span>Open Sans</span>
`)

$('.presentation-baiser,.presentation-perso').html(`
<img src="${projet.view}" alt="Image">
`);

$('.palette-baiser, .palette-perso').remove();


function addCarrousel() {
  if (!$.trim($('.carrousel-box').html())) {
    $('.carrousel').remove();
  }
  
}


  $('.presentation-baiser img').on('load', function() {
    $('.presentation-baiser-loader').hide();
    $('.presentation-baiser img').show();
  });



function getTransformValuesFromMatrix(matrix) {
  var values = matrix.split('(')[1].split(')')[0].split(',');
  var a = parseFloat(values[0]);
  var b = parseFloat(values[1]);
  var c = parseFloat(values[2]);
  var d = parseFloat(values[3]);

  var scaleX = Math.sqrt(a * a + b * b);
  var scaleY = Math.sqrt(c * c + d * d);
  var rotate = Math.atan2(b, a) * (180 / Math.PI);

  return { scaleX: scaleX, scaleY: scaleY, rotate: rotate };
}

function updateParallax(mouseX, mouseY) {
  $(".halo-calc").css({
    "transform": "translate(" + ((-mouseX * 0.05) + 100) + "px, " + ((-mouseY * 0.05) + 100) + "px)",
  });

  $(".mockupBox-connexion div:nth-child(1), .mockupBox-connexion div:nth-child(2), .mockupBox-connexion div:nth-child(3), .mockupBox-connexion div:nth-child(4), .mockupBox-connexion div:nth-child(5), .mockupBox-connexion div:nth-child(6), .mockupBox-connexion div:nth-child(7), .mockupBox-connexion div:nth-child(8), .mockupBox-connexion div:nth-child(9)").each(function() {
    var currentTransform = $(this).css("transform");
    var transformValues = getTransformValuesFromMatrix(currentTransform);

    $(this).css({
      "transform": "translate(" + ((-mouseX * 0.05)+50) + "px, " + ((-mouseY * 0.05)+0) + "px) rotate(" + transformValues.rotate + "deg) scale(" + transformValues.scaleX + ", " + transformValues.scaleY + ")"
    });
  });
}

$(document).on("mousemove", function (event) {
  var mouseX = event.pageX;
  var mouseY = event.pageY;

  requestAnimationFrame(function() {
    updateParallax(mouseX, mouseY);
  });
});




setInterval(function() {
  var scrollY = $(window).scrollTop();

  $(".halo-calc div").each(function () {
    var randomX = Math.floor(Math.random() * 76) - 32;
    var randomY = Math.floor(Math.random() * 76) - 32;

    $(this).css({
      "transform":
        "translate(" +
        randomX +
        "px, " +
        ((-scrollY * 0.05) + randomY) +
        "px)",
    });
  });
},2000)
  
// Anime hover presentation landing

$('.presentation-landing').on('mouseenter', function(){
  $('.custom-cursor-github').css({
    'opacity': '1',
    'transform': 'scale(1)'
  })
});
$('.presentation-landing').on('mouseleave', function(){
  $('.custom-cursor-github').css({
    'opacity': '0',
    'transform': 'scale(0)'
  })
});
$('.presentation-landing').on("mousemove", function (e) {
  var mouseX = e.pageX;
  var mouseY = e.pageY;
  $(".custom-cursor-github").css({
    "top": mouseY - 52 + "px", // Soustraire la moitié de la taille du cercle pour centrer le curseur
    "left": mouseX - 52 + "px", // Soustraire la moitié de la taille du cercle pour centrer le curseur
  });
});
//TODO ajouter lien github quand dispo
$('.presentation-landing').click(function() {
  window.location.href = '#';
});
$(`
<div class="landing-github"> 
<img src="./assets/icon_github-white.svg" alt="">
</div>
`).insertBefore('.palette-landing');
var presentationLanding = $('.presentation-landing');
if (presentationLanding.length) {
  var presentationLandingOffset = presentationLanding.offset().top;
  var presentationLandingHeight = presentationLanding.height();
  $('.landing-github').css('top', 'min(' + (presentationLandingOffset + presentationLandingHeight * 0.75) + 'px, ' + (presentationLandingOffset + presentationLandingHeight - 150) + 'px)');
}

//Anim flowers

$(".mockupBox-connexion").prepend(`
  
  <div><img src="./assets/cercle_middle.svg" alt=""></div>
  <div><img src="./assets/cercle_middle.svg" alt=""></div>
  <div><img src="./assets/cercle_middle.svg" alt=""></div>
  <div><img src="./assets/tube_middle.svg" alt=""></div>
  <div><img src="./assets/tube_middle.svg" alt=""></div>
  <div><img src="./assets/tube_middle.svg" alt=""></div>
  <div><img src="./assets/feuille_middle.svg" alt=""></div>
  <div><img src="./assets/feuille_middle.svg" alt=""></div>
  <div><img src="./assets/feuille_middle.svg" alt=""></div>
  
 
`)
$(".mockupBox-developpeur").prepend(` 
  <div></div>
  <img class="imac-dark" src="./assets/mockups/imac-dark.png" alt="">
`)
$(".mockupBox-developpeur").mouseleave(function(){
  $(".mockupBox-developpeur div").addClass('mockup-developpeur-neon')
  setTimeout(function(){
    $('.imac-dark').css('opacity', '0')
  }, 500)
})
$(".mockupBox-developpeur").mouseenter(function(){
  $(".mockupBox-developpeur div").removeClass('mockup-developpeur-neon')
    $('.imac-dark').css('opacity', '1')
  
  
})

});
// $(document).ready(function() {
//   $('.palette div').each(function() {
//     if (rgb2hex($(this).css('background-color')) == '#000000') {
//       $(this).css('color', 'white');
//       $(this).css('border', '1px solid white');
//     }
//   });
// });

// function rgb2hex(rgb) {
//   // Conversion d'une valeur RGB en valeur hexadécimale
//   var rgbArray = rgb.replace(/[^\d,]/g, '').split(',');
//   var r = parseInt(rgbArray[0], 10).toString(16).padStart(2, '0');
//   var g = parseInt(rgbArray[1], 10).toString(16).padStart(2, '0');
//   var b = parseInt(rgbArray[2], 10).toString(16).padStart(2, '0');
//   return '#' + r + g + b;
// }

