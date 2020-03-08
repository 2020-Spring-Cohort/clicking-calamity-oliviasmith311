let clickDisplay = document.querySelector(".click-number");
const clickAmount = new ClickCount();
let companionCount = document.querySelector(".click-companion");
let compounderCount = document.querySelector(".click-compounder")
let clickButton = document.querySelector(".click-button");
let companionButton = document.querySelector(".companion-button");
let compounderButton = document.querySelector(".compounder-button");

const makeClickButton = (button, display, amount) => {
    button.addEventListener('click', ()=> {
        amount.countClick(); 
        amount.addAutoClicks();
       updateClickDisplay(display, amount);
      
    })
}
const makeCompanionButton = (button, display, amount) => {
    button.addEventListener('click', ()=> {
        amount.purchaseCompanion();        
        updateCompanionCount(display, amount);
        button.innerHTML = 'Purchase Click Companion for ' + amount.getCompanionCost() + ' clicks';
    });
}
const makeCompounderButton = (button, display, amount) => {
    button.addEventListener('click', () => {
        amount.purchaseCompounder();        
        updateCompounderCount(display, amount);
        button.innerHTML = 'Purchase Click Compounder for ' + amount.getCompounderCost() + ' clicks';

    });
}

const updateClickDisplay = (display, amount) => {
    display.innerHTML = 'Click amount is: ' + amount.getClickCount() + '. Each click is worth ' + amount.getClickAmount();

}

const updateCompanionCount = (display, amount) => {
    display.innerHTML = 'Companion Count is: ' + amount.getCompanionCount();
}

const updateCompounderCount = (display, amount) => {
    display.innerHTML = 'Compounder Count is: ' + amount.getCompounderCount();
}


makeClickButton(clickButton, clickDisplay, clickAmount);
makeCompanionButton(companionButton, companionCount, clickAmount);
makeCompounderButton(compounderButton, compounderCount, clickAmount);
updateClickDisplay(clickDisplay, clickAmount);
updateCompanionCount(companionCount, clickAmount);
updateCompounderCount(compounderCount, clickAmount);
