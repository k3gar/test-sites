function cincoPorciento() {
    let bill = parseFloat(document.getElementById('bill').value, 10);
    let people = parseInt(document.getElementById('people').value, 10);
    let fivePercent = (bill*5) / 100;
    let tipPerPerson = parseFloat(fivePercent/people).toFixed(2);
    let totalPerPerson = parseFloat((bill+fivePercent) / people).toFixed(2);
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    
    tip.innerText = (`$${tipPerPerson}`)
    total.innerText = (`$${totalPerPerson}`)
}
function diezPorciento() {
    let bill = parseFloat(document.getElementById('bill').value, 10);
    let people = parseInt(document.getElementById('people').value, 10);
    let tenPercent = (bill*10) / 100;
    let tipPerPerson = parseFloat(tenPercent/people).toFixed(2);
    let totalPerPerson = parseFloat((bill+tenPercent) / people).toFixed(2);
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    
    tip.innerText = (`$${tipPerPerson}`)
    total.innerText = (`$${totalPerPerson}`)
}

function quincePorciento() {
    let bill = parseFloat(document.getElementById('bill').value, 10);
    let people = parseInt(document.getElementById('people').value, 10);
    let fifteenPercent = (bill*15) / 100;
    let tipPerPerson = parseFloat(fifteenPercent/people).toFixed(2);
    let totalPerPerson = parseFloat((bill+fifteenPercent) / people).toFixed(2);
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    
    tip.innerText = (`$${tipPerPerson}`)
    total.innerText = (`$${totalPerPerson}`)
}

function twenty_fivePorciento() {
    let bill = parseFloat(document.getElementById('bill').value, 10);
    let people = parseInt(document.getElementById('people').value, 10);
    let twenty_fivePercent = (bill*25) / 100;
    let tipPerPerson = parseFloat(twenty_fivePercent/people).toFixed(2);
    let totalPerPerson = parseFloat((bill+twenty_fivePercent) / people).toFixed(2);
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    
    tip.innerText = (`$${tipPerPerson}`)
    total.innerText = (`$${totalPerPerson}`)
}

function fiftyPorciento() {
    let bill = parseFloat(document.getElementById('bill').value, 10);
    let people = parseInt(document.getElementById('people').value, 10);
    let fiftyPercent = (bill*50) / 100;
    let tipPerPerson = parseFloat(fiftyPercent/people).toFixed(2);
    let totalPerPerson = parseFloat((bill+fiftyPercent) / people).toFixed(2);
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    console.log(bill)

    if(bill == NaN){
        debugger
        tip.innerText = (`$0.00`)
        total.innerText = (`$0.00`)
    }
    else{
        tip.innerText = (`$${tipPerPerson}`)
        total.innerText = (`$${totalPerPerson}`)
    }  
}

function customPorciento() {
    let bill = parseFloat(document.getElementById('bill').value, 10);
    let people = parseInt(document.getElementById('people').value, 10);
    let custom = parseInt(document.getElementById('custom').value, 10);
    let customPercent = (bill*custom) / 100;
    let tipPerPerson = parseFloat(customPercent/people).toFixed(2);
    let totalPerPerson = parseFloat((bill+customPercent) / people).toFixed(2);
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    
    tip.innerText = (`$${tipPerPerson}`)
    total.innerText = (`$${totalPerPerson}`)
}

/* document.getElementById('bill').keyup(function() {
    check();
}); */

function check() {
    var opcion = document.getElementById('bill').value;
    debugger

    if (opcion.length == 0){
        debugger
        document.getElementById('reset').style.color = "#00494d"
    }
    else{
        debugger
        document.getElementById('reset').style.color = "#26c0ab"
        
    }

}

function prueba(){
    alert("Hola")
}