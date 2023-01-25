
document.addEventListener('DOMContentLoaded', () => {
    const controleBotao = document.querySelectorAll('.btnControl') /* seleciona todos os botoes de controle */
    const elementos = document.querySelectorAll('.duplinha') /* seleciona todos os elementos  */
    const maxElementos = elementos.length
    let elementoAtivo = 0

    console.log(controleBotao)
    console.log(elementos)
    controleBotao.forEach((btnControl) => {
        btnControl.addEventListener('click', () => {
            console.log("numero de elemetos no carrosel " + maxElementos)
            const arrowLeft = btnControl.classList.contains('btn_left')

            /* checando qual é a imagem que vai ser inserida no carrossel */
            console.log("elemento atual antes do click " + elementoAtivo)
            if (arrowLeft) {
                console.log("--")
                elementoAtivo--
            } else {
                console.log("++")
                elementoAtivo++
            }
            console.log("elemento atual depois do click " + elementoAtivo)

            /* corrigindo a possição do vetor de elementos de acordo com a quantidade de elementos */
            if (elementoAtivo < 0) {
                elementoAtivo = maxElementos - 1
            } else if (elementoAtivo >= maxElementos - 1) {
                elementoAtivo = 0
            }
            console.log(elementoAtivo)
            elementos[elementoAtivo].scrollIntoView({
                inline: "start",
                behavior: "smooth"

            })
        })
    })
})


/*const btnCard = document.querySelectorAll('.card') /* seleciona todos os elementos de card */
//const maxCards = btnCard.length
/* para todos os cards */
//btnCard.forEach((card) => {
    //card.addEventListener('click', () => {
        /* checar se o elemento está ativo (foi clicado pelo usuário e está com sobreposição ativada) */
        //const cardClass = card.classList.contains('ativo')

        /* desativando a sobreposicao de todos os elemnetos para que nao tenha mais de um elemento ativo*/
        /*for (let i = 0; i < maxCards; i++) {
            if (btnCard[i].classList.contains("ativo")) {
                btnCard[i].classList.remove("ativo")
            }
        }*/
        /* ativando sobreposição do elemento caso ele não estivise ativa anteriormemte*/
        /*if (!cardClass) {
            console.log("card esta desativado, ativando card...")
            card.classList.add("ativo")
        }
    })
})*/
