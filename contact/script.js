var elementsToFade = document.querySelectorAll('.fade-in')
elementsToFade.forEach(el => {
    window.addEventListener('scroll', (e) => {
        if(window.scrollY >= el.scrollHeight - 100){
            el.classList.add('visible')
        }
    })
})

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


window.addEventListener('resize', sizeBg())
sizeBg()

function sizeBg(){
    if(window.innerHeight > window.innerWidth){
        document.getElementById('coverBackground').style.height = '100vh'
        document.getElementById('coverBackground').style.width = 'auto'
    }else if(window.innerHeight < window.innerWidth){
        document.getElementById('coverBackground').style.height = 'auto'
        document.getElementById('coverBackground').style.width = '100vw'
    }
}