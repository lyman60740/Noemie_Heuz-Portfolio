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

for(let i = 0; i < projets.length; i++){
    $('main').append(`
    <article class="about">
                <h1 id="about">Landing page</h1>
                <div class="about_bloc">
                    <section class="about_bloc_content">
                            <img src="./assets/mockup_landing_page.png" alt="">
                        <div class="project_description_bloc">
                            <div class="project_description_part">
                                <p>Type</p>
                                <p>${projets.type}</p>
                            </div>
                            <div class="project_description_part">
                                <p>Descriptif</p>
                                <p>Le projet consiste à concevoir l'UI-UX Design d'une landing page pour un site de coaching personnalisé.</p>
                            </div>
                            <div class="project_description_part">
                                <p>Outils</p>
                                <p>Figma, HTML, CSS</p>
                            </div>
                        </div>
                    </section>

                    <div class="project_presentation"><img src="./assets/video_landing_page.png" alt=""></div>
                    
                    <section class="palette">
                       <div><span>#FFFFFF</span></div>
                       <div><span>#FFFFFF</span></div>
                       <div><span>#FFFFFF</span></div>
                       <div><span>#FFFFFF</span></div>
                       <div><span>#FFFFFF</span></div>
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
}
