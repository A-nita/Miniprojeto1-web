
document.addEventListener('DOMContentLoaded', () => {
    // Código necessário para tratamento da seleção de arquivos
    // Mostra um aviso quando não há nenhum arquivo selecionado e quando há um arquivo
    // selecionado, mostra o nome desse arquivo

    const imageInput = document.getElementById('imagem-capa')
    const selectedFilenameLabel = document.getElementById('selected-filename-label')

    selectedFilenameLabel.innerText = 'Nenhum arquivo selecionado'
    selectedFilenameLabel.classList.add('nofile')

    imageInput.addEventListener('change', (event) => {
        if (event.target.value) {
            const filepath = event.target.value
            const filepathSplit = filepath.split(/[\/\\]/)  // Regex para encontrar ambos separadores de arquivos
            const filename = filepathSplit[filepathSplit.length - 1]

            selectedFilenameLabel.innerText = `Arquivo selecionado: ${filename}`
            selectedFilenameLabel.classList.add('file')
            selectedFilenameLabel.classList.remove('nofile')
        } else {
            selectedFilenameLabel.innerText = 'Nenhum arquivo selecionado'
            selectedFilenameLabel.classList.remove('file')
            selectedFilenameLabel.classList.add('nofile')
        }
    })
})