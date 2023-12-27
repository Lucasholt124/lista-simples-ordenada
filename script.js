// Adiciona um novo item à lista quando o botão é clicado
document.addEventListener('DOMContentLoaded', function() {
    const orderedList = document.getElementById('orderedList');
    
    // Cria um novo item
    function createNewItem() {
        const newItem = document.createElement('li');
        newItem.textContent = 'Novo Item';
        orderedList.appendChild(newItem);
    }

    // Adiciona um novo item quando o botão é clicado
    const addButton = document.createElement('button');
    addButton.textContent = 'Adicionar Novo Item';
    addButton.addEventListener('click', createNewItem);
    document.body.appendChild(addButton);
});
