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
            let hour_tittle = document.getElementById('item_tittle').innerText


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

let prueba3 = []

function PRUEBA(){
    let prueba = Array.from(document.querySelectorAll(".item_tittle"))
    let prueba2 = Array.from(document.querySelectorAll(".card-main_items-hour"))

    prueba.forEach(element => {
        let saber
        for (let index = 0; index < prueba2.length; index++) {
            const elements = prueba2[index];
            saber = elements.outerText
        }
        let elem = element.outerText
        prueba3.push({'title':elem, 'time':saber})
    })

}

array1 = [🧀, 🥖, 🍞]

array2 = [🍔,🌭, 🥪]

array3 = [{🧀, 🍔}, {🥖,🌭}, {🍞,🥪}]


