
document.addEventListener('DOMContentLoaded', () => {
    const btnCadastrar = document.getElementById('btn_cadastro_item')
    const anoPublicacaoSelect = document.getElementById('ano-publicacao')
    const imageInput = document.getElementById('imagem-capa')

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
      console.log(imageInput.value)
      alert('Cadastro do item realizado com sucesso !')
    })
    
    btnCadastrar.addEventListener('click', () => {
      // Como o input de imagem está escondido, o aviso que ele não foi selecionado é escondido também.
      // Para contornar isso, caso nenhuma imagem seja selecionada, é acionado um alert
      if (!imageInput.value) {
        alert('É preciso selecionar uma imagem de capa para o seu livro !')
      }
    })
})

