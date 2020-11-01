const homePage = require('./pages/home');
const categoriesPage = require('./pages/categories');
const home = require('./pages/home');

describe('Lego Site', function(){

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    });

    // it('It should return 3 results', function(){
    //     const expectedResults = 3;
    //     const expectedResultsText = [
    //         'Llavero con linterna de Darth Vader™ LEGO® Star Wars™', 
    //         'Llavero con luz de Stormtrooper™ LEGO® Star Wars™', 
    //         'Llavero con luz de ladrillo 1x2 LEGO® (Rojo)'
    //     ]

    //     homePage.get();
    //     homePage.buyByAge();
    //     homePage.filterBy3To5Years();

    //     categoriesPage.filterByKeychain();
    //     categoriesPage.filterFrom0To20Euros();
        
    //     expect(categoriesPage.getNumberOfFilteredResults()).toEqual(expectedResults);
    //     expect(categoriesPage.getNamesOfFilteredResults()).toEqual(expectedResultsText);
    // });

    it('Should show the right price in the cart', function(){
        // TODO
        const until = protractor.ExpectedConditions;
        
        const expectedProductURL = 'https://www.lego.com/es-es/product/lego-ludo-game-40198';

        homePage.get();
        homePage.search('Ludo lego');        
        expect(browser.getCurrentUrl()).toEqual(expectedProductURL);

        const addItem = element(by.xpath('//*[@id="main-content"]/div/div[2]/div/div/div[2]/div[4]/div[1]/button[2]'));
        browser.wait(until.presenceOf(addItem), 5000);
        addItem.click();

        element(by.xpath('//*[@id="main-content"]/div/div[2]/div/div/div[2]/div[5]/div[1]/div/div/div/button')).click();

        element(by.xpath('//*[@id="root"]/div/div[2]/header/div/div[1]/nav/ul[2]/li[3]/a')).click();

        expect(browser.getCurrentUrl()).toEqual('https://www.lego.com/es-es/cart');

        const totalAmountLabel = element(by.xpath('//*[@id="main-content"]/div/div[1]/div[2]/div[1]/div/div[2]/div[1]/div[1]/div/div[3]/div[1]/span/span'));
        browser.wait(until.presenceOf(totalAmountLabel), 5000);
        expect(totalAmountLabel.getText()).toEqual('79,98 €');
    });
})