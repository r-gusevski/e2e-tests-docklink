var MainFunc = function() {
    this.goToItem = function (item) {
        browser.executeScript('arguments[0].scrollIntoView(false)', item.getWebElement());
    };

    this.clickItem = function (item) {
        this.goToItem(item);
        item.click();
        browser.sleep(1300);
    };

    this.setText = function (item, text, isClearBefore) {
        if (isClearBefore) {
            item.clear();
        }
        for(var index = 0; index < text.length; index++){
            item.sendKeys(text[index]);
            browser.sleep(200);
        }
    };

    this.getServerError = function(){
        browser.manage().logs().get('browser').then(function(browserLog) {
            if (browserLog.length !== 0) {
                    browserLog.forEach(function(log){
                        if(~log.message.indexOf("500")){
                            expect(log.message).not.toMatch('server responded with a status of 500');
                        }
                    });
            }
        });
    };

    this.closeModal = function (modal, buttonClose) {
        modal.isPresent().then(function (value) {
            if(value){
                buttonClose.click();
                browser.sleep(2000);
            }
        });
    }
};

module.exports = MainFunc;