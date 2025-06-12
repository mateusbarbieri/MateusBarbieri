document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const shoppingList = document.getElementById('shoppingList');
    
    let items = [];
    
    function addItem() {
        const itemText = itemInput.value.trim();
        
        if (itemText !== '') {
            items.push(itemText);
            itemInput.value = '';
            renderList();
        } else {
            alert('Por favor, digite um item válido.');
        }
    }
    
    function renderList() {
        shoppingList.innerHTML = '';
        
        items.forEach((item, index) => {
            const li = document.createElement('li');
            
            const itemSpan = document.createElement('span');
            itemSpan.textContent = item;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Excluir';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => removeItem(index));
            
            li.appendChild(itemSpan);
            li.appendChild(deleteBtn);
            
            shoppingList.appendChild(li);
        });
    }
    
    function removeItem(index) {
        items.splice(index, 1);
        renderList();
    }
    
    addButton.addEventListener('click', addItem);
    
    itemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    });
});