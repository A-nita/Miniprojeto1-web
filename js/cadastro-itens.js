
document.addEventListener('DOMContentLoaded', () => {
    const anoPublicacaoSelect = document.getElementById('ano-publicacao')

    let initYear = 1800
    let currentYear = new Date().getFullYear() 
    for (let year = initYear; year <= currentYear; year++) {
        const newOption = document.createElement('option')
        newOption.value = year
        newOption.innerText = year
        anoPublicacaoSelect.appendChild(newOption)
    }

    const formCadastroItens = document.getElementById('form-cadastro-item')
    formCadastroItens.addEventListener('submit', (event) => {
      alert('Cadastro do item realizado com sucesso !')
    })
})

