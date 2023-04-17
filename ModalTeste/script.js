let icons = document.querySelectorAll(".vida img")
let modal = document.querySelector("#modal")


// mostra modal ao lado do mouse com as informaçoes do alt do elemento
function mostra(event, e) {
    var x = event.clientX
    var y = event.clientY

    modal.innerHTML = icons[e].getAttribute("alt")
    modal.style.display= "block"
    modal.style.left= 10 + x + "px"
    modal.style.top= 10 +  y + "px"
}

// escode o modal quando mouse sair do icone
function esconde(){
    modal.style.display= "none"
}