class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
        this.compounderCount = 0;
        this.compounderCost = 10;
        this.clickAmount = 1;
    }
    countClick() {
        this.clickCount += this.clickAmount;
    }
    purchaseCompanion() {
        if(this.clickCount >= this.companionCost) {
            this.clickCount -= this.companionCost;
            this.companionCount++;
            this.companionCost = this.companionCost * 1.1;
        }
    }
    addAutoClicks() {
        this.clickCount += this.companionCount;
    }
    
    increaseClicksPerSecond(){
        setInterval(() => {
            addAutoClicks(); }, 1000);
    }
    purchaseCompounder(){
        if(this.clickCount >= this.compounderCost){
            this.clickCount -= this.compounderCost;
            this.compounderCount++;
            this.compounderCost = this.compounderCost * 1.1;        
            this.clickAmount =  this.clickAmount + (this.clickCount * 0.2);
        }
    }
}

