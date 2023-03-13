var projets = [
    {
      categorie: 'uxui',
      titre: 'Landing page',
      numero: 1,
      type: 'Site web',
      mockup: './assets/mockups/mockup_landing_page.png',
      description: `Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.`,
      outils: 'Figma, HTML, CSS',
      view: './assets/mockupsTest/jerem.jpg',
      palette: {
        carac1: '#FFFFFF',
        carac2: '#1B1B1E',
        carac3: '#C9F0FF',
        carac4: 'Roboto',
        carac5: 'Visuels',
      },
      fontFamily: "'Roboto', sans-serif;"
      
    },
    {
      categorie: 'uxui',
      titre: 'Calculatrice',
      numero: 2,
      type: 'Application mobile',
      mockup: './assets/mockups/content_mockup.png',
      description: `Le projet consiste à concevoir l'UI-UX Design d'une application mobile de calculatrice personnalisable.`,
      outils: 'Figma',
      view: './assets/mockupsTest/jerem.jpg',
      palette: {
        carac1: '#000000',
        carac2: '#E6E6F0',
        carac3: 'Pink Gradient',
        carac4: 'Purple Gradient',
        carac5: 'Cyan Gradient',
        carac6: 'Heebo',
      },
      fontFamily: "'Heebo', sans-serif;"
    },
    {
      categorie: 'uxui',
      titre: 'Page de connexion',
      numero: 3,
      type: 'Application mobile',
      mockup: './assets/mockups/page_de_connexion_1.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une application de calculatrice personnalisable.`,
      outils: 'Figma',
      view: './assets/mockupsTest/jerem.jpg',
      palette: {
        carac1: '#000000',
        carac2: '#EEEBDA',
        carac3: '#F2AF9F',
        carac4: '#EC7D69',
        carac5: '#ABD0BF',
        carac6: '#065143',
        carac7: 'Syne Inter',
        carac8: 'Visuels',
      },
      fontFamily: "'Syne', sans-serif;" },
    {
      categorie: 'uxui',
      titre: 'Page de paiement',
      numero: 1,
      type: 'Application mobile',
      mockup: './assets/mockups/maquette_page_de_paiement.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.`,
      outils: 'Figma, HTML, CSS',
      view: './assets/mockupsTest/jerem.jpg',
      palette: {
        carac1: '#FFFFFF',
        carac2: '#1B1B1E',
        carac3: '#C9F0FF',
        carac4: 'Roboto',
        carac5: 'Visuels',
      },
      fontFamily: "'Roboto', sans-serif;" },
    {
      categorie: 'uxui',
      titre: 'Portfolio developpeur web',
      numero: 2,
      type: 'Type de projet',
      mockup: './assets/mockups/imac.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.`,
      outils: 'Figma, HTML, CSS',
      view: './assets/mockupsTest/jerem.jpg',
      palette: {
        carac1: '#FFFFFF',
        carac2: '#1B1B1E',
        carac3: '#C9F0FF',
        carac4: 'Roboto',
        carac5: 'Visuels',
      },
      fontFamily: "'Dela Gothic One', cursive;",
     },
      
    {
      categorie: '3d',
      titre: 'Le cube',
      numero: 3,
      type: 'Illustration 3D',
      mockup: './assets/mockupsTest/graphiste.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.`,
      outils: 'Figma, HTML, CSS',
      view: './assets/mockupsTest/jerem.jpg',
      palette: {
        carac1: '#FFFFFF',
        carac2: '#1B1B1E',
        carac3: '#C9F0FF',
        carac4: 'Roboto',
        carac5: 'Visuels',
      },
      fontFamily: "'Roboto', sans-serif;" },
    {
      categorie: 'illustration',
      titre: 'Le baiser',
      numero: 3,
      type: 'Illustration',
      mockup: './assets/mockupsTest/graphiste.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.`,
      outils: 'Figma, HTML, CSS',
      view: './assets/mockupsTest/jerem.jpg',
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
      mockup: './assets/mockups/mockup_perso_01.png',
    description: `Le projet consiste à concevoir l'UI-UX Design d'une application de calculatrice personnalisable.`,
      outils: 'Procreate',
      view: './assets/mockupsTest/jerem.jpg',
      palette: {
        
      } },
  ];

  // Récupérer le titre dans l'URL
const urlParams = new URLSearchParams(window.location.search);
const titre = urlParams.get('titre');

// Trouver le projet correspondant au titre
const projet = projets.find((p) => p.titre === titre);



    $('main').append(`
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

            <article class="project">
                <h2 id="projets" >Voir d'autres projets</h2>
                <div class="project_bloc">
                    <section class="project_bloc_left">
                        <div class="project_bloc_left_section">
                            <div></div>
                            <h3 class="uxuiCategorie" >UI - UX Design</h3>
                        </div>

                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>

                        <div class="project_bloc_left_section">
                            <div></div>
                            <h3 class="3dCategorie" >Illustration 3D</h3>
                        </div>

                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>
                        <div class="project_bloc_left_point" ></div>

                        <div class="project_bloc_left_section">
                            <div></div>
                            <h3 class="illustrationCategorie" >Illustration</h3>
                        </div>
                    </section>
                    <section class="project_bloc_right">
                        
                        <div class="project_bloc_right_blocLine">
                            <!--To integrate JS-->
                        </div>
                        <a href="./index.html#contact" class="contactButton">
                            <div class="contactButton_bg" >
                                <div class="contactButton_largeCircle">
                                    <button class="contactButton_blue">
                                        <div class="contactButton_circleWhite"></div>
                                    
                                        
                                    </button>
                                </div>
                            </div>
                        </a>
                    </section>
                    
                </div>
            </article>`)



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

