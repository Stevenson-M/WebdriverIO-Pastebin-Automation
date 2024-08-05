const PastebinPage = require('../po/pages/pastebin.page');
const CreatedPastePage = require('../po/pages/createdPaste.page');

describe('Pastebin page', function () {
    let pastebinPage;
    let createdPastePage;

    before(async function () {
        pastebinPage = new PastebinPage();
        createdPastePage = new CreatedPastePage();
    });

    beforeEach(async function () {
        await browser.deleteCookies();
        await browser.maximizeWindow();
        await pastebinPage.open('https://pastebin.com/');
    });

    it('should create a new basic paste', async function () {
        
        const pasteText = 'Hello from WebDriver';
        const pasteTitle = 'helloweb';
        const pasteExpiration = '10 MIN';



        await pastebinPage.createNewBasicPaste(pasteText, pasteTitle);

        const url = await browser.getUrl();
        expect(url).not.toBe('https://pastebin.com/');

        await createdPastePage.checkBasicPaste(pasteTitle, pasteExpiration, pasteText);

    });
});


