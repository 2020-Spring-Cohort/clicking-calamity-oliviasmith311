class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
        this.compounderCount = 0;
        this.compounderCost = 10;
        this.clickAmount = 1;
    }

    reset() {
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
        this.clickCount += (this.companionCount * this.clickAmount);
    }

    purchaseCompounder(){
        if(this.clickCount >= this.compounderCost){
            this.clickCount -= this.compounderCost;
            this.compounderCount++;
            this.compounderCost = this.compounderCost * 1.1;        
            this.clickAmount =  this.clickAmount + (this.compounderCount * 0.2);
        }
    }
    getClickCount(){
        return (this.clickCount).toFixed(2);
    }
    getCompanionCount(){
        return (this.companionCount).toFixed(2);
    }
    getCompounderCount(){
        return (this.compounderCount).toFixed(2);
    }
    getCompanionCost(){
        return (this.companionCost).toFixed(2);
    }
    getCompounderCost(){
        return (this.compounderCost).toFixed(2);
    }
    getClickAmount(){
        return (this.clickAmount).toFixed(2);
    }
}

