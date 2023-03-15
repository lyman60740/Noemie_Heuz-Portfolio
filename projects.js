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
                            <img src="${projet.mockup}" alt="">
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

                    <div class="project_presentation"><img src="./assets/video_landing_page.png" alt=""></div>
                    
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

for (let i = 1; i <= paletteLength; i++) {
  if (projet.palette[`carac${i}`]) {
    if (i === 2) {
      // Utiliser la couleur de fond du premier élément comme couleur de police pour le deuxième élément
      const backgroundColor = paletteSection.children().eq(0).css('background-color');
      paletteSection.append(`<div style="background-color:${projet.palette[`carac${i}`]}; color:${backgroundColor}" ><span style="font-family:${projet.fontFamily}" >${projet.palette[`carac${i}`]}</span></div>`);
    }
    else {
      paletteSection.append(`<div style="background-color:${projet.palette[`carac${i}`]}; color : ${projet.palette[`carac${2}`]}" ><span style="font-family:${projet.fontFamily}" >${projet.palette[`carac${i}`]}</span></div>`);
    }
  }
}


  
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

