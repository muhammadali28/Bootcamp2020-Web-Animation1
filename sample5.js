var elem = document.querySelector('#clouds');
     
var elem1 = document.querySelector('#birds');

var elem2 = document.querySelector('#plane');


var animatedElem = elem.animate([
            
            {transform: 'translate(0,0)' },
            { transform: 'translate(600px,0)' },

        ], {
            duration: 20000,
            iterations: Infinity,
            playbackRate :-4,
})

var animatedElem1 = elem1.animate([
    { transform: 'translate(0,-100px)' },
    { transform: 'translate(500px,-150px)'},
    { transform: 'translate(1000px,0)' },

        ], {
            duration: 8000,
            iterations: Infinity
})

var animatedElem2 = elem2.animate([
    {transform: 'translate(1000px,-500px)'},
    {transform: 'translate(500px,-400px)'},
    {transform: 'translate(0px,-500px)'}

 ], {duration: 7000,
     iterations:
      Infinity
 })
