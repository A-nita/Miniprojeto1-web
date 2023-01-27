
document.addEventListener('DOMContentLoaded', () => {
    const args = {
        inline: "start",
        block: "center",
        behavior: "smooth"
    }
    const carrossels = document.querySelectorAll('.carrossel-livros')
    const duplasPorTela = 2

    carrossels.forEach((carrossel) => {
        const booksDuples = carrossel.querySelectorAll('.duplinha')
        const scroller = carrossel.querySelector('.galeria-livros')
        const sizeDuple = booksDuples[0].clientWidth + 20 // 20 = gap
        let scrollPos = 0

        const btnLeft = carrossel.querySelector('.btn_left')
        const btnRight = carrossel.querySelector('.btn_right')

        
        btnLeft.addEventListener('click', () => {
            const scrollerMaxScroll = (booksDuples.length - Math.floor(scroller.clientWidth / sizeDuple)) * sizeDuple
            console.log(scrollerMaxScroll)
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
