var HomePage = function() {
    const continueButton = element(by.xpath('//*[@id="root"]/div/div[5]/div/div/div[1]/div[1]/div/button'));
    const acceptCookiesButton = element(by.xpath('//*[@id="root"]/div/div[3]/div/div[2]/button'));

    const menuBuyByButton = element(by.xpath('//*[@id="root"]/div/div[2]/header/div/div[2]/div/nav/ul/li[2]/button'));
    const menuAgeButton = element(by.xpath('//*[@id="bltb9d6f2110f37ddd5"]/div/div[1]/button[3]'));
    const threeToFiveOption = element(by.xpath('//*[@id="bltb9d6f2110f37ddd5"]/div/div[2]/ul/li[2]/a/div/div/picture/img'));

    const searchButton = element(by.xpath('//*[@id="root"]/div/div[2]/header/div/div[2]/div/div/button'));
    const searchInput = element(by.xpath('//*[@id="desktop-search-search-input"]'));
    
    const searchSuggestion = element(by.xpath('//*[@id="desktop-search-search-suggestions"]/li[2]/a/div'));


    const until = protractor.ExpectedConditions;
    const timeoutInterval = 5000;

    this.get = function() {
        browser.driver.get("https://www.lego.com/es-es");
        
        browser.wait(until.presenceOf(continueButton), timeoutInterval);
        if (continueButton) continueButton.click();
        if (acceptCookiesButton) acceptCookiesButton.click();
    }

    this.buyByAge = function() {
        menuBuyByButton.click();
        menuAgeButton.click();
    }

    this.filterBy3To5Years = function () {
        threeToFiveOption.click();
    }

    this.search = function(searchTearm){
        searchButton.click();
        searchInput.sendKeys(searchTearm);
        browser.wait(until.presenceOf(suggestion), timeoutInterval);
        suggestion.click();
    }


}

module.exports = new HomePage();