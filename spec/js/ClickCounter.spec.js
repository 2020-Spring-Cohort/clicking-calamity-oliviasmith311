describe('Clicking Calamity tests', () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCount();
    })
    describe('countClick() records clicks and ClickCounter can give the ClickCount', () => {

        it('countClick() 1 time should result in a clickCount of 1', () => {
            underTest.countClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('countClick() 2 times should result in a clickCount of 2', () => {
            underTest.countClick();
            underTest.countClick();
            expect(underTest.clickCount).toBe(2);
        });
    });
    describe('Clicking Companion tests', () => {
        describe('click companion clicks once per second', () => {
            it('should be able to purchase clickCompanion with 100 clicks', () => {
                for (let i = 0; i < 100; i++) {
                    underTest.countClick();
                }
                underTest.purchaseCompanion();
                expect(underTest.companionCount).toBe(1);
            });
            it('should not be able to purchase without 100', () => {
                underTest.purchaseCompanion();
                expect(underTest.companionCount).toBe(0);
            });
        });
        describe('The cost of each _Clicking Companion_ will go up with each purchase', () => {
            it('Increase the cost of the second _Clicking Companion_ by an additional ten percent to 110', () => {
                for (let i = 0; i <= 100; i++) {
                    underTest.countClick();
                }
                underTest.purchaseCompanion();
                expect(Math.floor(underTest.companionCost)).toBe(110);
            });
        });
        describe('The amount of _Clicking Companions_ affect the amount of clicks added when an Add auto clicks event is called', () => {
            it('When the add auto clicks event is executed, add the amount of _Clicking Companions_ to the click total', () => {
                for (let i = 0; i < 100; i++) {
                    underTest.countClick();
                }
                underTest.purchaseCompanion();
                underTest.addAutoClicks();
                expect(underTest.clickCount).toBe(1);
            });
        });
    });
    describe('clicking compounder tests', () => {
        it('should be able to purchase the first _Collective Culmination Compounder_ with 10 clicks from your click count', () => {
            for (let i = 0; i < 10; i++) {
                underTest.countClick();
            }
            underTest.purchaseCompounder();
            expect(underTest.compounderCount).toBe(1);
        });
        it('The cost of each _Collective Culmination Compounder_ will go up ten percent with each purchase', () => {
            for (let i = 0; i <= 10; i++) {
                underTest.countClick();
            }
            underTest.purchaseCompounder();
            expect(Math.floor(underTest.compounderCost)).toBe(11);
        });
        it('should Increase the amount of clicks added to the click count by 1.2 after the first _Compounder_ is purchased.', () => {
            for (let i = 0; i <= 10; i++) {
                underTest.countClick();
            }
            underTest.purchaseCompounder();
            underTest.countClick();
            expect(underTest.clickAmount).toBe(1.2);
        });
        it('should increase the amount of clicks added to the click count by 2.4 when the second compunder is purchased', () => {
            for (let i = 0; i <= 20; i++) {
                underTest.countClick();
            }
            underTest.purchaseCompounder();
            underTest.purchaseCompounder();
            underTest.countClick();
            expect(underTest.clickAmount).toBe(3.2);
        });
        it('When an Add auto clicks event is executed, increase the value of each auto click by the amount of the click value multiplier.', () => {
            for (let i = 0; i <= 110; i++) {
                underTest.countClick();
            }
            underTest.purchaseCompanion();
            underTest.countClick();
            underTest.purchaseCompounder();
            underTest.countClick();
            expect(underTest.clickAmount).toBe(1.4);
        });
    });
});