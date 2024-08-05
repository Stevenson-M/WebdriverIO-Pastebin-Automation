class BasePage {
    open(path) {
        browser.url(path);
    }

    checkUrl(url) {
        expect(browser).toHaveUrl(url);
    }
}

module.exports = BasePage;