
document.addEventListener("DOMContentLoaded", () => {
    const homePage = document.getElementById('homepage')
    const cadastroItensPage = document.getElementById('cadastro-itens')

    const homePageBtn = document.getElementById('homepage-btn')
    const cadastroItensPageBtn = document.getElementById('cadastro-itens-btn')

    homePageBtn.addEventListener('click', () => {
        homePage.classList.remove('hidden')
        cadastroItensPage.classList.add('hidden')
    })

    cadastroItensPageBtn.addEventListener('click', () => {
        console.log('ALOUUUUUUUUUU')
        homePage.classList.add('hidden')
        cadastroItensPage.classList.remove('hidden')
    })
})