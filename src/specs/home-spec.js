var MainFunc = require('../functionality/mainFunc');
var HomePage = require('../pageObjects/home-page.js');
var main = new MainFunc();
var homePage = new HomePage();

var homeData = require('../textData/home-data.json');

describe('home page', function() {
    browser.driver.manage().window().maximize();

    it('check blocks', function() {
        browser.ignoreSynchronization = true;
        browser.get(homeData.homeUrl);
        main.setText(homePage.inputLogin, homeData.user.login);
        main.setText(homePage.inputPassword, homeData.user.password);
        main.clickItem(homePage.loginButton);
        browser.sleep(3000);
        main.getServerError();
        main.closeModal(homePage.modal, homePage.modalBtn);
        main.clickItem(homePage.documents.first());
        main.getServerError();
    });
});