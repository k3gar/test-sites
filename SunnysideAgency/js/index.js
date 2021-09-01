const menuuu = document.getElementById('menu')
const botton = document.getElementById('displayMenu')
console.log(menuuu.style.display)


/* function displayMenu(){
    if(menu.style.display == 'none'){
        menu.style.display == 'flex'
    }
} */
/* botton.addEventListener('click', function(){
    
    menuuu.classList.remove('status_1');
    menuuu.classList.add('status_2');
}) */
botton.addEventListener('click', function(){
    
    menuuu.classList.toggle('status_1');
    menuuu.classList.toggle('status_2');
})

console.log(menuuu.style.display)
