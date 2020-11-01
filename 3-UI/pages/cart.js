var CartPage = function() {
    const totalAmountLabel = element(by.xpath('//*[@id="main-content"]/div/div[1]/div[2]/div[1]/div/div[2]/div[1]/div[1]/div/div[3]/div[1]/span/span'));
    
    const until = protractor.ExpectedConditions;
    const timeoutInterval = 5000;

    this.getTotalAmount = function() {
        browser.wait(until.presenceOf(totalAmountLabel), timeoutInterval);
        return totalAmountLabel.getText();
    }
}

module.exports = new CartPage();