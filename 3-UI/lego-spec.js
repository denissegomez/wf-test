const homePage = require('./pages/home');
const categoriesPage = require('./pages/categories');
const productPage = require('./pages/product');
const cartPage = require('./pages/cart');

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

    it('Should show the right price in the cart', function(){
        const expectedProductURL = 'https://www.lego.com/es-es/product/lego-ludo-game-40198';
        const cartURL = 'https://www.lego.com/es-es/cart';
        const expectedPrice = '79,98 €';

        homePage.get();
        homePage.search('Ludo lego');        
        expect(browser.getCurrentUrl()).toEqual(expectedProductURL);

        productPage.incrementNumberOfItems();
        productPage.addToCart();
        productPage.goToCart();
        expect(browser.getCurrentUrl()).toEqual(cartURL);

        expect(cartPage.getTotalAmount()).toEqual(expectedPrice);
    });
});