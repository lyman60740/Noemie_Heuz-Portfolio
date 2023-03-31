var flyer = $('.flyButton svg');
var flyButton = $('.flyButton');

flyButton.click(function(){
    var tl = gsap.timeline();

    tl.to(flyer, {
        y: -40,
        duration: 1
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
