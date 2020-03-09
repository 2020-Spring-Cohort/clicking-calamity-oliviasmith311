let clickDisplay = document.querySelector(".click-number");
const clickObject = new ClickCount();
let companionCount = document.querySelector(".click-companion");
let compounderCount = document.querySelector(".click-compounder")
let clickButton = document.querySelector(".click-button");
let companionButton = document.querySelector(".companion-button");
let compounderButton = document.querySelector(".compounder-button");
let resetButton = document.querySelector(".reset-button");

const makeClickButton = (button, display, object) => {
    button.addEventListener('click', ()=> {
        object.countClick(); 
        object.addAutoClicks();
       updateClickDisplay(clickDisplay, clickObject);
      
    })
}

const makeCompanionButton = (button, display, object) => {
    button.addEventListener('click', ()=> {
        object.purchaseCompanion();        
        updateCompanionCount(companionCount, clickObject);
        button.innerHTML = 'Purchase Click Companion for ' + object.getCompanionCost() + ' clicks';
    });
}

const makeCompounderButton = (button, display, object) => {
    button.addEventListener('click', () => {
        object.purchaseCompounder();        
        updateCompounderCount(compounderCount, clickObject);
        button.innerHTML = 'Purchase Click Compounder for ' + object.getCompounderCost() + ' clicks';
    });
}

function timer() {
    clickObject.addAutoClicks();
    updateClickDisplay(clickDisplay, clickObject);
}

setInterval(timer, 1000);

const makeResetButton = (button, object) => {
    button.addEventListener('click', () => {
        object.reset();
        updateClickDisplay(clickDisplay, clickObject);
        updateCompounderCount(compounderCount, clickObject);
        updateCompanionCount(companionCount, clickObject);
        companionButton.innerHTML = 'Purchase Click Companion for ' + object.getCompanionCost() + ' clicks';
        compounderButton.innerHTML = 'Purchase Click Compounder for ' + object.getCompounderCost() + ' clicks';

    })
}

const updateClickDisplay = (display, object) => {
    display.innerHTML = 'Click amount is: ' + object.getClickCount() + '. Each click is worth ' + object.getClickAmount();

}

const updateCompanionCount = (display, object) => {
    display.innerHTML = 'Companion Count is: ' + object.getCompanionCount();
}

const updateCompounderCount = (display, object) => {
    display.innerHTML = 'Compounder Count is: ' + object.getCompounderCount();
}


makeClickButton(clickButton, clickDisplay, clickObject);
makeCompanionButton(companionButton, companionCount, clickObject);
makeCompounderButton(compounderButton, compounderCount, clickObject);
updateClickDisplay(clickDisplay, clickObject);
updateCompanionCount(companionCount, clickObject);
updateCompounderCount(compounderCount, clickObject);
makeResetButton(resetButton, clickObject)