import { projets } from "./module.js";
  // Récupérer le titre dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const titre = urlParams.get('titre');

// Trouver le projet correspondant au titre
const projet = projets.find((p) => p.titre === titre);



    $('main').prepend(`
    <article class="about">
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
                                <p>${projet.outils}</p>
                            </div>
                        </div>
                    </section>

                    <div class="project_presentation presentation-${projet.id}">
                    <video width="1200" height="auto" loop autoplay muted>
                      <source src="${projet.video}" type="video/mp4" >
                      Votre navigateur ne prend pas en charge la vidéo HTML5.
                    </video>
                    </div>
                    
                    <section class="palette">
                       
                    </section>
                </div>
            </article>

            `)



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

// Animation mockup calculette
$(".mockupBox-calculatrice").prepend(`
  <div class="halo-calc">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  </div>
`)
$(document).on("mousemove", function (event) {
  var mouseX = event.pageX;
  var mouseY = event.pageY;



  $(".halo-calc").css({
    "transform": "translate(" + ((-mouseX * 0.05) + 100) + "px, " + ((-mouseY * 0.05) + 100) + "px)",
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

