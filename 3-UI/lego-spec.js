const { expect } = require("chai");

describe('Lego tests', function(){
    it('It should return 3 results', function(){
        
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        browser.driver.get("https://www.lego.com/es-es");


        const until = protractor.ExpectedConditions;
        const continueButton = element(by.xpath('//*[@id="root"]/div/div[5]/div/div/div[1]/div[1]/div/button'));
        browser.wait(until.presenceOf(continueButton), 5000);
        if (continueButton) {
            continueButton.click();
        }

        element(by.xpath('//*[@id="root"]/div/div[2]/header/div/div[2]/div/nav/ul/li[2]/button')).click();
        element(by.xpath('//*[@id="bltb9d6f2110f37ddd5"]/div/div[1]/button[3]')).click();
        element(by.xpath('//*[@id="bltb9d6f2110f37ddd5"]/div/div[2]/ul/li[2]/a/div/div/picture/img')).click();

    })
})