window.addEventListener('scroll', (e) => {
    checkFade(e)
})

function checkFade(e) {
    var elementsToFade = document.querySelectorAll('.fade-in')
    elementsToFade.forEach(el => {
        var rect = el.getBoundingClientRect()
        if (window.innerHeight >= rect.y + 100 && rect.y > 0 - rect.height + 50) {
            el.classList.add('visible')
        } else if (window.innerHeight < rect.y) {
            el.classList.remove('visible')
        } else if (rect.y < 0 - rect.height) {
            el.classList.remove('visible')
        }
    })
}
checkFade()

function parallax() {
    var s = document.querySelectorAll(".slow");
    s.forEach(t => {
        var yPos = 0 - window.pageYOffset / 4;

        var startingPoint = Number(t.dataset.scrollStartingPoint.split('%')[0])
        if (window.innerWidth < 600) {
            if (startingPoint == 25) startingPoint = 15
        }
        t.style.top = startingPoint - yPos / t.dataset.scrollSpeed + "%";
    })
}

window.addEventListener("scroll", function () {
    parallax();
});

const coverTitle = document.querySelector('.cover-title')

var text = coverTitle.innerHTML
text = text.split('')
isTyping = false
function typeCover() {
    console.log("Already running? " + isTyping)
    if (isTyping) return
    isTyping = true
    coverTitle.innerHTML = ''
    var iterations = 0
    for (let i = 0; i < text.length; i++) {
        updateText(i);
        iterations++
    }
    if (iterations == text.length) isTyping = false
    setTimeout(() => {
        document.querySelector('.cover-description').classList.add('visible')
    }, 2500)
}

function updateText(char) {
    setTimeout(() => {
        coverTitle.innerHTML += text[char]
    }, Math.random() * 50 + 50 * char)
}
typeCover()


var isOpen = false

document.querySelector('.rune').onclick = e => {
    isOpen = !isOpen
    document.querySelectorAll('.header-link').forEach(link => {
        if (isOpen) {
            link.style.transform = 'translate(0)';
            link.style.opacity = '1'
            document.querySelector('.rune').innerHTML = `
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" stroke-width="2"/>
  <line x1="4" y1="20" x2="20" y2="4" stroke="currentColor" stroke-width="2"/>
</svg>

            `
        } else if (!isOpen) {
            link.style.transform = 'translateX(100vw)';
            link.style.opacity = '0'
            document.querySelector('.rune').innerHTML = `
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect y="4" width="24" height="2" fill="currentColor"/>
  <rect y="11" width="24" height="2" fill="currentColor"/>
  <rect y="18" width="24" height="2" fill="currentColor"/>
</svg>


            `
        }
    })
}