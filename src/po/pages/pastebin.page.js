const BasePage = require('./base.page');

class PastebinPage extends BasePage {
    
    //Constructor
    constructor() {
        super();
    }

    get codeInput() { return $('#postform-text'); }
    get syntaxHighlightingDropdown() { return $('#select2-postform-format-container'); }
    get syntaxHighlightingBashOption() { return $('//li[text()="Bash"]'); }
    get expirationDropdown() { return $('#select2-postform-expiration-container'); }
    get expirationTenMinutesOption() { return $('//li[text()="10 Minutes"]'); }
    get pasteTitleInput() { return $('#postform-name'); }
    get createPasteButton() { return $('button[class^="btn"]'); }

    async createNewBasicPaste(text, title) {
        await this.codeInput.setValue(text);
        await this.expirationDropdown.click();
        await this.expirationTenMinutesOption.click();
        await this.pasteTitleInput.setValue(title);
        await this.createPasteButton.click();
    }
    async createNewPaste(text, title) {
        await this.codeInput.setValue(text);
        await this.syntaxHighlightingDropdown.click();
        await this.syntaxHighlightingBashOption.click();
        await this.expirationDropdown.click();
        await this.expirationTenMinutesOption.click();
        await this.pasteTitleInput.setValue(title);
        await this.createPasteButton.click();
    }

}

module.exports = PastebinPage;