window.addEventListener('scroll', (e) => {
    checkFade(e)
})

function checkFade(e){
    var elementsToFade = document.querySelectorAll('.fade-in')
    elementsToFade.forEach(el => {
        var rect = el.getBoundingClientRect()
        if(window.innerHeight >= rect.y + 100 && rect.y >  0 - rect.height + 50){
            el.classList.add('visible')
        }else if(window.innerHeight < rect.y){
            el.classList.remove('visible')
        }else if(rect.y <  0 - rect.height){
            el.classList.remove('visible')
        }
    })
}
checkFade()

function parallax() {
    var s = document.querySelectorAll(".slow");
    s.forEach(t => {
        var yPos = 0 - window.pageYOffset/4;

        var startingPoint = Number(t.dataset.scrollStartingPoint.split('%')[0])
        if(window.innerWidth < 600){
            if(startingPoint == 25) startingPoint = 15
        }
        t.style.top = startingPoint - yPos/t.dataset.scrollSpeed + "%";
    })
}

window.addEventListener("scroll", function(){
    parallax();
});

const coverTitle = document.querySelector('.cover-title')

var text = coverTitle.innerHTML
text = text.split('')
function typeCover(){
    coverTitle.innerHTML = ''
    for (let i=0; i<text.length; i++) { 
        updateText(i); 
    }
    setTimeout(() => {
        document.querySelector('.cover-description').classList.add('visible')
    }, 3500)
}

function updateText(char){
    setTimeout(() => {
        coverTitle.innerHTML += text[char]
    }, Math.random()*100 + 100 * char)
}
typeCover()