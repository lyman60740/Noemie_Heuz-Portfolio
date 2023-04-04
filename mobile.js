var flyer = $('.flyButton svg');
var flyButton = $('.flyButton');
var navMobile = $('.nav-mobile');
const burger1 = $('.nav-mobile-burgerLine1');
const burger2 = $('.nav-mobile-burgerLine2');
const burger3 = $('.nav-mobile-burgerLine3');
const navMobileScreen = $('.nav-mobile-screen');
const burgerDuration = 0.65;

flyButton.click(function(){
    var tl = gsap.timeline();

    tl.to(flyer, {
        y: -40,
        duration: 1,
    })
    .to(flyer, {
        opacity: 0,
        x: 0,
        y: 40,
        duration: 0
    })
    .to(flyer, {
        opacity: 1,
        x: 0,
        y: 40,
        duration: 0
    })
    .to(flyer, {
        x: 0,
        y: 0,
        duration: 1
    });
});
var isOpen = false;
function toggleMenu() {

    var tl = gsap.timeline();

    tl.to(burger2, {
        x: "-100%",
        duration: burgerDuration,
        ease: "power2.in"
    })
    tl.to([burger1, burger3], {
        x: "-100%",
        duration: burgerDuration,
        ease: "power2.in"
    }, "-=0.5")

    // Téléporter les éléments burger en x: "+100%" sans animation
    tl.set([burger1, burger2, burger3], {
        x: "100%"
    })

    // Animer le retour de burger2 à x: 0%
    tl.to(burger2, {
        x: "-40%",
        duration: burgerDuration,
        ease: "power2.in"
    })

    // Animer le retour de burger1 et burger3 à x: 0% avec un léger décalage
    tl.to(burger1, {
        x: "0%",
        duration: burgerDuration,
        ease: "power2.in"
    }, "-=0.4")
    tl.to(burger3, {
        x: "40%",
        duration: burgerDuration,
        ease: "power2.in"
    }, "<")

    if (!isOpen) {
        // Ouvrir le menu
        // Vos animations existantes pour ouvrir le menu
        // ...
        
        // Animer l'ouverture de navMobileScreen
        gsap.to(navMobileScreen, {
            x: 0,
            duration: 1.25,
            ease: "elastic.out(1, 0.95)",
            
        })
        
        isOpen = true;
    } else {
        // Fermer le menu
        // Inverser les animations pour fermer le menu
        tl.reverse();

        // Animer la fermeture de navMobileScreen
       
        gsap.to(navMobileScreen, {
            x: "100vw",
            duration: 1.25,
            ease: "elastic.out(1, 0.95)",
        })
        isOpen = false;
        
    }
    
}
navMobile.click(toggleMenu);
$('.screen_top a').click(toggleMenu); // ou $('.scroll-top').click(toggleMenu);
