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

function selectSlide(indiceSlide) {
    banner.classList.remove(slides[slideAtual])
    slideAtual = indiceSlide
    banner.classList.add(slides[slideAtual])
}

// let listaCases = [
    // {
    //     imagem: "https://unsplash.it/600/400?image=43",
    //     descricao: "Uma empresa de tecnologia lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias inovadoras.",
    // },
    // {
    //     imagem: "https://unsplash.it/600/400?image=65",
    //     descricao: "Uma empresa de consultoria cria uma narrativa interativa de gamificação para seu programa de treinamento",
    // },
    // {
    //     imagem: "https://unsplash.it/600/400?image=22",
    //     descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking",
    // },
    // {
    //     imagem: "https://unsplash.it/600/400?image=94",
    //     descricao: "Uma empresa de saúde promove o bem-estar dos funcionários através de um desafio de gamificação de condicionamento físico",
    // },
// ]

function renderCases() {
    let containerCards = document.querySelector(".container-cards")
    let template = ""
    listaCases.forEach(cardCase => {
        template += `<div class="card">
       <img src=${ cardCase.imagem } alt="">
       <p>${ cardCase.descricao }</p>
       <button>Ver Mais</button>
   </div>`
    })

    containerCards.innerHTML = template
}