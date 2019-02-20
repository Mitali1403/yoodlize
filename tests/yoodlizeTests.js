var letsgo = {}

let listItem = require('../testAssets/listItem')

module.exports = {
    beforeEach: browser => {
        letsgo = browser.page.yoodlizePageObjects()
        letsgo.navigate()
            .waitForElementVisible('img[height="51"]', 5000)
    },
    after: browser => {
        browser.end()
    },
    
    'List an Item 1': browser => { listItem(letsgo, 'pashkafomin14@gmail.com', 'fomin1102', 'Snowboard', 'It works great!', '@sportingGoods', '123 Main Street', 'Salt Lake City', 'UT', '84111', '450', 'Screen Shot 2019-02-18 at 1.44.24 PM.png') },
    'List an Item 2': browser => { listItem(letsgo, 'fominivan94@gmail.com', 'password', 'Bike', 'It works somewhat great!', '@sportingGoods', '1225 North Ave', 'Auburn', 'CA', '95603', '2000', 'Screen Shot 2019-02-18 at 1.44.54 PM.png') },
    'List an Item 3': browser => { listItem(letsgo, 'bobby123@gmail.com', 'bobthegreat', 'JBL Speaker', 'It doesnt work great!', '@electronics', '7033 Elkhorn Blvd', 'Anchorage', 'AK', '99501', '990', 'Screen Shot 2019-02-18 at 1.45.35 PM.png') },
    'List an Item 4': browser => { listItem(letsgo, 'taytay24@yahoo.com', 'taylor2019', 'Guitar', 'It doesnt work at all!', '@partyEquipment', '4619 Century Ct', 'Houston', 'TX', '77001', '7500', 'Screen Shot 2019-02-18 at 1.45.59 PM.png') },

}