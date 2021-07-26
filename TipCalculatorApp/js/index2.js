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