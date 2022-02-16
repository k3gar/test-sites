let prueba3 = []

function PRUEBA2(){
    prueba3 = []
    let prueba = document.querySelectorAll(".item_tittle")
    let prueba2 = document.querySelectorAll(".card-main_items-hour")
    let previous = document.querySelectorAll(".item_previous")
    
    for (let index = 0; index < prueba.length; index++) {
        const element = prueba[index];
        const element2 = prueba2[index];
        const prev = previous[index];
        prueba3.push({'title':element, 'time':element2, 'prev': prev})
    }
}

function getData(input){
    PRUEBA2()
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        if(input == 'daily'){
            for (let index = 0; index < data.length; index++) {
                const element = data[index];

                if(prueba3[index].title.innerText == element.title){
                    prueba3[index].time.innerText = data[index].timeframes.daily.current + ' Hrs';
                    prueba3[index].prev.innerText = 'Previous - ' + data[index].timeframes.daily.previous + ' Hrs';
                }
                console.log(element.timeframes.daily)
            }
        }
        else if(input == 'weekly'){
            for (let index = 0; index < data.length; index++) {
                const element = data[index];

                if(prueba3[index].title.innerText == element.title){
                    prueba3[index].time.innerText = data[index].timeframes.weekly.current + ' Hrs';
                    prueba3[index].prev.innerText = 'Previous - ' + data[index].timeframes.weekly.previous + ' Hrs';
                }
                console.log(element.timeframes.weekly)
            }
        }
        else if(input == 'monthly'){
            for (let index = 0; index < data.length; index++) {
                const element = data[index];

                if(prueba3[index].title.innerText == element.title){
                    prueba3[index].time.innerText = data[index].timeframes.monthly.current + ' Hrs';
                    prueba3[index].prev.innerText = 'Previous - ' + data[index].timeframes.monthly.previous + ' Hrs';
                }
                console.log(element.timeframes.monthly)
            }
        }
    })
}
function color(){
    let elementId = event.target.id;
    console.log(document.getElementById(elementId).style.color )
    document.getElementsByClassName('li_color').daily.style.color = 'rgb(189, 193, 255)'
    document.getElementsByClassName('li_color').weekly.style.color = 'rgb(189, 193, 255)'
    document.getElementsByClassName('li_color').monthly.style.color = 'rgb(189, 193, 255)'
    
    let elementIdColor = document.getElementById(elementId).style.color 

    if(document.getElementById(elementId).style.color == 'rgb(189, 193, 255)'){
        document.getElementById(elementId).style.color = '#ffffff'
    }
    else {
        document.getElementById(elementId).style.color = 'rgb(189, 193, 255)'
    }
}

function chooseDay(){
    let elementId = event.target.id;
    getData(elementId)
    addEventListener('click', color)
}