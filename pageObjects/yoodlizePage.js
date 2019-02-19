module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        searchOption: {
            selector: '//span[contains(text(), "Search")]',
            locateStrategy: 'xpath'
        },
        listitemOption: {
            selector: '(//span)[5]',
            locateStrategy: 'xpath'
        },
        loginOption: {
            selector: '(//span)[6]',
            locateStrategy: 'xpath'
        },
        signupOption: {
            selector: '(//span)[7]',
            locateStrategy: 'xpath'
        },
        bikeSelector: {
            selector: '//*[text()="Bike"]',
            locateStrategy: 'xpath'
        },
        bearcatSelector: {
            selector: '//*[text()="Bearcat"]',
            locateStrategy: 'xpath'
        },
        inputField: 'input[placeholder="Search for an item"]',
        searchButton: 'i[class="fal fa-search"]',
        homePagelogo: 'img[src="/images/logo/blueRaw.png"]',
        browseOption: 'div[class="sc-jqCOkK kuQxSB sc-gqjmRU fmtXEs"]',
        searchField: 'input[name="keyword"]',
        buttonPage2: 'button[class="sc-esjQYD bonOTJ sc-ifAKCX kvYMhQ"]'
    }
}