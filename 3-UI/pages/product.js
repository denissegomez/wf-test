var ProductPage = function() {
    const addItemButton = element(by.xpath('//*[@id="main-content"]/div/div[2]/div/div/div[2]/div[4]/div[1]/button[2]'));
    const addToCartButton = element(by.xpath('//*[@id="main-content"]/div/div[2]/div/div/div[2]/div[5]/div[1]/div/div/div/button'));
    const cartButton = element(by.xpath('//*[@id="root"]/div/div[2]/header/div/div[1]/nav/ul[2]/li[3]/a'));

    const until = protractor.ExpectedConditions;
    const timeoutInterval = 5000;

    this.incrementNumberOfItems = function() {
        browser.wait(until.presenceOf(addItemButton), timeoutInterval);
        addItemButton.click();
    }

    this.addToCart = function() {
        addToCartButton.click();
    }

    this.goToCart = function() {
        cartButton.click();
    }

}
module.exports = new ProductPage();