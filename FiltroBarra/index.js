let API = 'https://rickandmortyapi.com/api/character/?name=';
const itemContainer = document.querySelector('#item-container')
const removeClass = document.querySelectorAll('.remove')

const request = () =>{
    let inputValue = document.getElementById('dataInput').value
    if(inputValue == ""){

    } else{
        fetch(`${API}${inputValue}`)
            .then(data => data.json())
            .then( data => {
                renderItems(data.results)
            })
            .catch(error => alert('No se encontró el personaje'))

    }
}

const renderItems = results => {
    results.forEach(item => {
        itemContainer.appendChild(createItem(item));
    });
}

const createItem = item => {
    const newItem = document.createElement('div');
    //clean()
    newItem.classList.add('item');
    newItem.innerHTML = (
        `
        <div class="char-id remove">${item.id}</div>
        <div class="char-name remove">${item.name}</div>
        <div class="char-species remove">${item.species}</div>
        <div class="char-species remove">${item.origin.name}</div>
        <img class="char-img remove" src=${item.image} />

        `
    );
    return newItem;
}
const clean = () => {
    itemContainer.removeChild()
}