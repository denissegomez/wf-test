var CategoriesPage = function() {
    const keychainFilter = element(by.xpath('//*[@id="blt0723e5915b29f00d"]/section/div/aside/div/div/div[2]/div/div/div/ul/li[9]'));
    const zeroToTwentyFilter = element(by.xpath('//*[@id="blt0723e5915b29f00d"]/section/div/aside/div/div/div[3]/div/div/div/ul/li'));

    const filteredProductsContainer = element(by.css('.ProductGridstyles__Grid-lc2zkx-0'));
    filteredProducts = filteredProductsContainer.all(by.tagName('li'));
    const filteredProductsLabels = filteredProducts.all(by.tagName('h2'));

    const until = protractor.ExpectedConditions;
    const timeoutInterval = 5000;

    this.filterByKeychain = function() {
        browser.wait(until.presenceOf(keychainFilter), timeoutInterval);
        keychainFilter.click();
    }

    this.filterFrom0To20Euros = function() {
        zeroToTwentyFilter.click();
    }

    this.getNumberOfFilteredResults = function() {
        browser.wait(until.presenceOf(filteredProductsContainer), timeoutInterval);
        return filteredProducts.count();
    }

    this.getNamesOfFilteredResults = function() {
        return filteredProductsLabels.getText();
    }
}

module.exports = new CategoriesPage();