class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
    }
    countClick() {
        this.clickCount++;
    }
    purchaseCompanion() {
        if(this.clickCount >= this.companionCost) {
            this.clickCount -= this.companionCost;
            this.companionCount++;
            this.companionCost = this.companionCost * 1.1;
        }
    }
    addAutoClicks(){
        this.clickCount += this.companionCount;
    }
    increaseClicksPerSecond(){
    let interval = window.setInterval(addAutoClicks, 1000);
    }
}

