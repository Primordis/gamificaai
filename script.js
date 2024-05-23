let menu = document.getElementById("menuh")
let ex = document.getElementById("x")
let barras = document.getElementById("barras")

function abreFechaMenu() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        barras.style.display = "none"
        ex.style.display = "inline"
    } else {
        menu.classList.add("menu-fechado")
        barras.style.display = "inline"
        ex.style.display = "none"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")
     barras.style.display = "none"
    ex.style.display = "inline"
}

let banner = document.querySelector(".banner")
let slides = [
    "primera",
    "segunda",
    "terceira"
]
let slideAtual = 0
banner.classList.add(slides[slideAtual])

function nextSlide() {
    banner.classList.remove(slides[slideAtual])
    if (slideAtual < 2) {
        slideAtual++
        banner.classList.add(slides[slideAtual])
    }
    else {
        slideAtual = 0
    }
    
}
function previousSlide() {
    banner.classList.remove(slides[slideAtual])
    if (slideAtual > 0) {
    slideAtual--
    banner.classList.add(slides[slideAtual])
    } else {
        slideAtual = 2
    }
    
    
}

function selectSlide(indiceSlide){
    banner.classList.remove(slides[slideAtual])
    slideAtual = indiceSlide
    banner.classList.add(slides[slideAtual])
}