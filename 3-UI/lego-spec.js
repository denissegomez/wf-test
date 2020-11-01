const homePage = require('./pages/home');
const categoriesPage = require('./pages/categories');

describe('Lego Site', function(){

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    });

    it('It should return 3 results', function(){
        const expectedResults = 3;
        const expectedResultsText = [
            'Llavero con linterna de Darth Vader™ LEGO® Star Wars™', 
            'Llavero con luz de Stormtrooper™ LEGO® Star Wars™', 
            'Llavero con luz de ladrillo 1x2 LEGO® (Rojo)'
        ]

        homePage.get();
        homePage.buyByAge();
        homePage.filterBy3To5Years();

        categoriesPage.filterByKeychain();
        categoriesPage.filterFrom0To20Euros();
        
        expect(categoriesPage.getNumberOfFilteredResults()).toEqual(expectedResults);
        expect(categoriesPage.getNamesOfFilteredResults()).toEqual(expectedResultsText);
    });

    // it('Should show the right price in the cart', function(){
    //     browser.driver.get("https://www.lego.com/es-es");

    //     const until = protractor.ExpectedConditions;
    //     const continueButton = element(by.xpath('//*[@id="root"]/div/div[5]/div/div/div[1]/div[1]/div/button'));
    //     browser.wait(until.presenceOf(continueButton), 5000);
    //     if (continueButton) {
    //         continueButton.click();
    //     }
        
    //     element(by.xpath('//*[@id="root"]/div/div[3]/div/div[2]/button')).click();
        
    //     element(by.xpath('//*[@id="root"]/div/div[2]/header/div/div[2]/div/div/button')).click();
    //     element(by.xpath('//*[@id="desktop-search-search-input"]')).sendKeys('Ludo lego');

    //     const suggestion = element(by.xpath('//*[@id="desktop-search-search-suggestions"]/li[2]/a/div'));
    //     browser.wait(until.presenceOf(suggestion), 5000);
    //     suggestion.click();

    //     expect(browser.getCurrentUrl()).toEqual('https://www.lego.com/es-es/product/lego-ludo-game-40198');

    //     const addItem = element(by.xpath('//*[@id="main-content"]/div/div[2]/div/div/div[2]/div[4]/div[1]/button[2]'));
    //     browser.wait(until.presenceOf(addItem), 5000);
    //     addItem.click();

    //     element(by.xpath('//*[@id="main-content"]/div/div[2]/div/div/div[2]/div[5]/div[1]/div/div/div/button')).click();

    //     element(by.xpath('//*[@id="root"]/div/div[2]/header/div/div[1]/nav/ul[2]/li[3]/a')).click();

    //     expect(browser.getCurrentUrl()).toEqual('https://www.lego.com/es-es/cart');

    //     const totalAmountLabel = element(by.xpath('//*[@id="main-content"]/div/div[1]/div[2]/div[1]/div/div[2]/div[1]/div[1]/div/div[3]/div[1]/span/span'));
    //     browser.wait(until.presenceOf(totalAmountLabel), 5000);
    //     expect(totalAmountLabel.getText()).toEqual('79,98 €');
    // });
})