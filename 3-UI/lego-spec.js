describe('Lego tests', function(){

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
    });

    // it('It should return 3 results', function(){
    //     browser.driver.get("https://www.lego.com/es-es");


    //     const until = protractor.ExpectedConditions;
    //     const continueButton = element(by.xpath('//*[@id="root"]/div/div[5]/div/div/div[1]/div[1]/div/button'));
    //     browser.wait(until.presenceOf(continueButton), 5000);
    //     if (continueButton) {
    //         continueButton.click();
    //     }
        
    //     element(by.xpath('//*[@id="root"]/div/div[3]/div/div[2]/button')).click();

    //     element(by.xpath('//*[@id="root"]/div/div[2]/header/div/div[2]/div/nav/ul/li[2]/button')).click();
    //     element(by.xpath('//*[@id="bltb9d6f2110f37ddd5"]/div/div[1]/button[3]')).click();
    //     element(by.xpath('//*[@id="bltb9d6f2110f37ddd5"]/div/div[2]/ul/li[2]/a/div/div/picture/img')).click();


    //     const keychainFilter = element(by.xpath('//*[@id="blt0723e5915b29f00d"]/section/div/aside/div/div/div[2]/div/div/div/ul/li[9]'));
    //     browser.wait(until.presenceOf(keychainFilter), 5000);
    //     keychainFilter.click();
        
    //     element(by.xpath('//*[@id="blt0723e5915b29f00d"]/section/div/aside/div/div/div[3]/div/div/div/ul/li')).click();

    //     const filteredProductsContainer = element(by.css('.ProductGridstyles__Grid-lc2zkx-0'))
    //     browser.wait(until.presenceOf(filteredProductsContainer), 5000);
    //     const filteredProducts = filteredProductsContainer.all(by.tagName('li'));
        
    //     expect(filteredProducts.count()).toEqual(3);
        
    //     const labels = filteredProducts.all(by.tagName('h2'))
    //     expect(labels.getText()).toEqual(['Llavero con linterna de Darth Vader™ LEGO® Star Wars™', 'Llavero con luz de Stormtrooper™ LEGO® Star Wars™', 'Llavero con luz de ladrillo 1x2 LEGO® (Rojo)']);
    // });

    it('There should be 2 LEGO items in the cart', function(){
        browser.driver.get("https://www.lego.com/es-es");

        const until = protractor.ExpectedConditions;
        const continueButton = element(by.xpath('//*[@id="root"]/div/div[5]/div/div/div[1]/div[1]/div/button'));
        browser.wait(until.presenceOf(continueButton), 5000);
        if (continueButton) {
            continueButton.click();
        }
        
        element(by.xpath('//*[@id="root"]/div/div[3]/div/div[2]/button')).click();
        element(by.xpath('//*[@id="root"]/div/div[2]/header/div/div[2]/div/div/button')).click();
        element(by.xpath('//*[@id="desktop-search-search-input"]')).sendKeys('Ludo lego');

        const suggestion = element(by.xpath('//*[@id="desktop-search-search-suggestions"]/li[2]'));
        browser.wait(until.presenceOf(suggestion), 5000);
        suggestion.click();

        expect(browser.getCurrentUrl()).toEqual('https://www.lego.com/es-es/product/lego-ludo-game-40198');

        const addItem = element(by.xpath('//*[@id="main-content"]/div/div[2]/div/div/div[2]/div[4]/div[1]/button[2]'));
        browser.wait(until.presenceOf(addItem), 5000);
        addItem.click();

    });
})