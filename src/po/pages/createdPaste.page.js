const BasePage = require('./base.page');

class CreatedPastePage extends BasePage {
    get pasteTitle() { return $('div[class="info-top"]>h1'); }
    get pasteSyntax() { return $('a.btn.-small.h_800[href^="/archive/"]'); }
    get pasteExpirationTime() { return $('div[title="When this paste gets automatically deleted"]'); }
    get pasteContent() { return $('.post-view .highlighted-code > div.source > ol'); }

    async checkBasicPaste(title, expiration, text) {
        const titleElement = await this.pasteTitle;
        await expect(titleElement).toHaveText(title);
    
        const expirationElement = await this.pasteExpirationTime;
        await expect(expirationElement).toHaveText(expiration);
    
        const contentElement = await this.pasteContent;
        const textData = await contentElement.getText();

        await expect(textData).toEqual(text);
    }
    
    async checkPaste(title, syntax, expiration, text) {
        const titleElement = await this.pasteTitle;
        await expect(titleElement).toHaveText(title);
    
        const syntaxElement = await this.pasteSyntax;
        await expect(syntaxElement).toHaveText(syntax);
    
        const expirationElement = await this.pasteExpirationTime;
        await expect(expirationElement).toHaveText(expiration);
    
        const contentElement = await this.pasteContent;
        const textData = await contentElement.getText();
        const receivedText = textData.replace(/^\s+/gm, ''); // Remueve los espacios en blanco al inicio de cada línea
        const expectedText = text.replace(/^\s+/gm, '');
        await expect(receivedText).toEqual(expectedText);
    }
}

module.exports = CreatedPastePage;