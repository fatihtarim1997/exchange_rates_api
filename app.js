const amountElemnt =document.getElementById("amount");
const firstSelect =document.getElementById("firstCurrency");
const secondSelect =document.getElementById("secondCurrency");
const ui=new UI(firstSelect,secondSelect);
const currency= new Currency("USD","TRY");

eventListeners();

function eventListeners(){
    amountElemnt.addEventListener("input",exchangeCurrency);
    firstSelect.onchange= function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    };
    secondSelect.onchange= function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };
}

function exchangeCurrency(){
    currency.changeAmount(amountElemnt.value);
    currency.exchange()
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err=> console.log(err));
    
    
}