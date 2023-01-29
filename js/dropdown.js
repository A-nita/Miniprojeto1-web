

document.addEventListener('DOMContentLoaded', () => {
    // Código para mostrar/esconder o "dropdown" (submenu) de manutenção de itens
    const dropdown = document.querySelector('.dropdown_menu');
    const dropdown_icon = document.querySelector('#dropdown-icon')    
    
    dropdown.addEventListener('click', () => {
        document.querySelector('#dropdown').classList.toggle('hidden');
        
        if (dropdown_icon.textContent === 'expand_less') {
            dropdown_icon.textContent = 'expand_more';
        }
        else {
            dropdown_icon.textContent = 'expand_less'
        }
    });
})