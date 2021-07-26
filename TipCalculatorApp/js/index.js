function cincoPorciento() {
    let bill = parseFloat(document.getElementById('bill').value || 0, 10);
    let people = parseInt(document.getElementById('people').value || 0, 10);
    let fivePercent = (bill*5) / 100;
    let tipPerPerson = fivePercent/people || 0;
    let totalPerPerson = (bill+fivePercent) / people || 0;
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);   
    tip.innerText = (`$${tipPerPerson.toFixed(2)}`)
    total.innerText = (`$${totalPerPerson.toFixed(2)}`)
}

function diezPorciento() {
    let bill = parseFloat(document.getElementById('bill').value || 0, 10);
    let people = parseInt(document.getElementById('people').value || 0, 10);
    let tenPercent = (bill*10) / 100;
    let tipPerPerson = tenPercent/people || 0;
    let totalPerPerson = (bill+tenPercent) / people || 0;
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    tip.innerText = (`$${tipPerPerson.toFixed(2)}`)
    total.innerText = (`$${totalPerPerson.toFixed(2)}`)
}

function quincePorciento() {
    let bill = parseFloat(document.getElementById('bill').value, 10);
    let people = parseInt(document.getElementById('people').value, 10);
    let fifteenPercent = (bill*15) / 100;
    let tipPerPerson = fifteenPercent/people || 0;
    let totalPerPerson = (bill+fifteenPercent) / people || 0;
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    tip.innerText = (`$${tipPerPerson.toFixed(2)}`)
    total.innerText = (`$${totalPerPerson.toFixed(2)}`)
}

function twenty_fivePorciento() {
    let bill = parseFloat(document.getElementById('bill').value, 10);
    let people = parseInt(document.getElementById('people').value, 10);
    let twenty_fivePercent = (bill*25) / 100;
    let tipPerPerson = twenty_fivePercent/people || 0;
    let totalPerPerson = (bill+twenty_fivePercent) / people || 0;
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    tip.innerText = (`$${tipPerPerson.toFixed(2)}`)
    total.innerText = (`$${totalPerPerson.toFixed(2)}`)
}

function fiftyPorciento() {
    let bill = parseFloat(document.getElementById('bill').value, 10);
    let people = parseInt(document.getElementById('people').value, 10);
    let fiftyPercent = (bill*50) / 100;
    let tipPerPerson = fiftyPercent/people || 0;
    let totalPerPerson = (bill+fiftyPercent) / people || 0;
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    tip.innerText = (`$${tipPerPerson.toFixed(2)}`)
    total.innerText = (`$${totalPerPerson.toFixed(2)}`) 
}

function customPorciento() {
    let bill = parseFloat(document.getElementById('bill').value, 10);
    let people = parseInt(document.getElementById('people').value, 10);
    let custom = parseInt(document.getElementById('custom').value, 10);
    let customPercent = (bill*custom) / 100;
    let tipPerPerson = customPercent/people || 0;
    let totalPerPerson = (bill+customPercent) / people || 0;
    console.log(`The tip per person is ${tipPerPerson}`);
    console.log(`The total per person is ${totalPerPerson}`);
    tip.innerText = (`$${tipPerPerson.toFixed(2)}`)
    total.innerText = (`$${totalPerPerson.toFixed(2)}`)
}
function resetAll(){
    tip.innerText = ('$0.00')
    total.innerText = ('$0.00')
}