
const rangeInputs = document.querySelectorAll('input[type="range"]')
const amount = document.getElementById('amountrange')
const period = document.getElementById('periodrange')

const amountPlus = document.getElementById('amount-plus');
const amountMinus = document.getElementById('amount-minus');

const periodPlus = document.getElementById('period-plus');
const periodMinus = document.getElementById('period-minus');

const expectedamount = document.getElementById('expectedamount');

//Add listeners to plus minus buttons
let btnAry = [amountPlus, amountMinus,periodPlus, periodMinus]

let timerID;
let counter = 0;

let pressHoldEvent = new CustomEvent("pressHold");
let pressHoldDuration = 500;


function handelRangeChange() {

        let amountMin = amount.min
        let amountMax = amount.max
        let amountVal = amount.value

        let periodMin = period.min
        let periodMax = period.max
        let periodVal = period.value

        let amountParsed = parseInt(amount.value);
        let noAmountVal = amountParsed.toLocaleString(['no', 'en'])
        amountValue.value = noAmountVal+=" kr"

        let periodParsed = parseInt(period.value);
        let noPeriodVal = periodParsed.toLocaleString(['no', 'en'])
        yearvalue.value = noPeriodVal+=" år"

        amount.style.backgroundSize = (amountVal - amountMin) * 100 / (amountMax - amountMin) + '% 100%';
        period.style.backgroundSize = (periodVal - periodMin) * 100 / (periodMax - periodMin) + '% 100%';

        let calculatedprice = calculate_price('no', amountParsed, periodParsed)
        expectedamount.innerHTML=calculatedprice+=" kr"
}



    rangeInputs.forEach(input => {
    input.addEventListener('input', handelRangeChange)
    input.addEventListener('input', handelRangeChange)
})



let curBtn;
//slow down requestanimationframe for period slider
let fps = 5;
let now;
let then = Date.now();
let interval = 1000/fps;
let intervalplus = 1000/9;
let delta;
function pressingDown(e) {

    curBtn=e.currentTarget;
    // Start the timer
    requestAnimationFrame(timerTick);
    e.preventDefault();
  }

  function notPressingDown(e) {
    // Stop the timer
    cancelAnimationFrame(timerID);
    counter = 0;
  }

  function timerTick() {
    if (counter < pressHoldDuration) {
      timerID = requestAnimationFrame(timerTick);
     
     switch(curBtn.id){
        case "amount-plus":
            now = Date.now();
            delta = now - then;
            if (delta > intervalplus) {
                then = now - (delta % intervalplus); 
            AmountIncerment()
            }
        break;
        case "amount-minus":
            now = Date.now();
            delta = now - then;
            if (delta > intervalplus) {
                then = now - (delta % intervalplus); 
            AmountDecerment()
            }
        break;
        case "period-plus":
            now = Date.now();
            delta = now - then;
             
            if (delta > interval) {
                then = now - (delta % interval); 
            PeriodIncerment()
            }
        break;
        case "period-minus":
            now = Date.now();
            delta = now - then;
             
            if (delta > interval) {
                then = now - (delta % interval);    
            PeriodDecerment()
            }
        break;
     }
     
     
     
      counter++;
    } else {
     // console.log("Press threshold reached!");
      curBtn.dispatchEvent(pressHoldEvent);
    }
  }

  function doSomething(e) {
    //console.log("pressHold event fired!");
  }

function AmountIncerment() {
  
        if (parseInt(amount.value) >= 6000000) {
            amount.value = 6000000
        } else {
            amount.value = parseInt(amount.value) + 1000
        }
        handelRangeChange(null)
    
}

function AmountDecerment() {
  
    if (parseInt(amount.value) <= 10000) {
        amount.value = 10000
    } else {

        amount.value = parseInt(amount.value) - 1000
    }
    handelRangeChange(null)

}
  
 

function PeriodIncerment() {
  
    if (parseInt(period.value) >= 15) {
        period.value = 15
    } else {
        period.value = parseInt(period.value) + 1;
    }

    handelRangeChange(null)

}

function PeriodDecerment(){

    if (parseInt(period.value) <= 1) {
        period.value = 1
    } else {
        period.value = parseInt(period.value) - 1
    }

    handelRangeChange(null)
}

for(let i = 0; i < btnAry.length; i++){ 
    
    btnAry[i].addEventListener("mousedown", pressingDown, false);
    btnAry[i].addEventListener("mouseup", notPressingDown, false);
    btnAry[i].addEventListener("mouseout", notPressingDown, false);
    btnAry[i].addEventListener("touchstart", pressingDown, false,);
    btnAry[i].addEventListener("touchend", notPressingDown, false);
    btnAry[i].addEventListener("touchcancel", notPressingDown, false);
    btnAry[i].addEventListener("touchleave", notPressingDown, false);
    // Listening for our custom pressHold event
    //btnAry[i].addEventListener("pressHold", doSomething, false);

}

/**
 * Calculate some averga loan price depending on the country
 * @param  string countrycode
 * @param  integer amount
 * @param  integer period
 * @return number
 */
 function calculate_price(countrycode, amount, period) {
 
    var months = period * 12;
    var price = 0;
    var tmp = 0;
    var monthlyinterest = 0;

    // Define stuff based on the country
    switch (countrycode.toLowerCase()) {

    case 'no':

        monthlyinterest = 0.1349 / 12;
        tmp = 1 / (Math.pow(1 + monthlyinterest, months));
        price = (amount + 950) * (monthlyinterest / (1 - tmp));

        price = Math.floor(price + 45);

        break;

    case 'fi':
    default:

        // 10.5% yearly
        monthlyinterest = 0.095 / 12;

        if (amount > 5000 && amount <= 10000)
            monthlyinterest = 0.0850 / 12;
        else if (amount > 10000)
            monthlyinterest = 0.045 / 12;
        else if (amount <= 2000)
            monthlyinterest = 0.2984 / 12;

        tmp = 1 / (Math.pow(1 + monthlyinterest, months));

        if (amount > 2000)
            price = (amount + 49) * (monthlyinterest / (1 - tmp));
        else
            price = (amount) * (monthlyinterest / (1 - tmp));

        //Only apply monthlyFee if amount over $extracostOver
        if (amount > 2000)
            price = Math.floor(price + 5);
        else
            price = Math.floor(price);
        break;

    }
    return price.toLocaleString(['no', 'en'])  
    //let noVal = price.toLocaleString(['no', 'en'])  
    //expectedamount.innerHTML= noVal+=" kr";

}

//init
handelRangeChange() 