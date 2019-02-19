let manager = {}

module.exports = {
    beforeEach: browser => {
        manager = browser.page.yoodlizePage()
        manager.navigate()
            .waitForElementVisible('@homePagelogo', 5000)
    },
    after: browser => {
        browser.end()
    },
    'It can search for items': browser => {
        manager
        browser.pause(500)
        manager
            .click('@searchOption')
            .waitForElementVisible('div[class="navbar-collapse collapse"]')
        manager
            .waitForElementVisible('@searchField')
            .setValue('@searchField', 'Bike')
            .click('@buttonPage2')
            .assert.elementPresent('@bikeSelector')
    },
    'When searching for items not listed, it creates an error message': browser => {
        manager
        browser.pause(500)
        manager
            .click('@searchOption')
            .waitForElementVisible('div[class="navbar-collapse collapse"]')
        manager
            .waitForElementVisible('@searchField')
            .setValue('@searchField', 'bridge')
            .click('@buttonPage2')
            .assert.elementPresent('div[class="NoResults-subHeading-19SIQ"]')

    }
}