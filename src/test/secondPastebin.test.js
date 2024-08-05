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

    it('should create a new paste with bash syntax', async function () {

        const pasteText = `git config --global user.name  "New Sheriff in Town"
          git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
          git push origin master --force`;
        const pasteTitle = 'how to gain dominance among developers';
        const pasteHighlighting = 'Bash';
        const pasteExpiration = '10 MIN';

        await pastebinPage.createNewPaste(pasteText, pasteTitle, pasteHighlighting, pasteExpiration);
        await createdPastePage.checkPaste(pasteTitle, pasteHighlighting, pasteExpiration, pasteText);
    });
});
