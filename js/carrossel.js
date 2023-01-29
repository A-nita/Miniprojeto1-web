
document.addEventListener('DOMContentLoaded', () => {
    // Todo código necessário para colocar os componentes "carrossel" em funcionamento
    const carrossels = document.querySelectorAll('.carrossel-livros')

    carrossels.forEach((carrossel) => {
        const booksDuples = carrossel.querySelectorAll('.duplinha')
        const scroller = carrossel.querySelector('.galeria-livros')
        let scrollPos = 0

        const btnLeft = carrossel.querySelector('.btn_left')
        const btnRight = carrossel.querySelector('.btn_right')

        
        btnLeft.addEventListener('click', () => {
            const sizeDuple = booksDuples[0].clientWidth + 20 // 20 = gap
            const scrollerMaxScroll = (booksDuples.length - Math.floor(scroller.clientWidth / sizeDuple)) * sizeDuple

            scrollPos -= sizeDuple
            if (scrollPos < 0) {
                scrollPos = scrollerMaxScroll
            }
            
            scroller.scrollTo({
                left: scrollPos,
                behavior: "smooth"
            })
        })

        btnRight.addEventListener('click', () => {
            const sizeDuple = booksDuples[0].clientWidth + 20 // 20 = gap
            const scrollerMaxScroll = (booksDuples.length - Math.floor(scroller.clientWidth / sizeDuple)) * sizeDuple

            scrollPos += sizeDuple
            if (scrollPos > scrollerMaxScroll) {
                scrollPos = 0
            }
            
            scroller.scrollTo({
                left: scrollPos,
                behavior: "smooth"
            })
        })
    })
})
