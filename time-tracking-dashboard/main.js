fetch('./data.json')
.then(response => response.json())
.then(data => console.log(data))

let hour = document.getElementById('item-hour')

function getData(input){
    
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        if(input == 'daily'){
            let hour = document.getElementById('item-hour')
            let hour_tittle = document.getElementById('item-hour_tittle').innerText


            for (let index = 0; index < data.length; index++) {
                const element = data[index];

                if(hour_tittle == element.title){
                    hour.innerText = element.timeframes.daily.current + ' Hrs'
                }
                console.log(element.timeframes.daily)
            }
        }
        else if(input == 'weekly'){
            console.log('ahhhhhhhhhhhh')
        }
    })
}

function daily(){
    getData('daily')
}
function weekly(){
    getData('weekly')
    
}
function monthly(){
    console.log('I am Monthly')
}