var Edit = {}           // var EmployeeManager = {}
var editmyinfo = function (pageObject, email, password, input, result) {     //var empMgr = function (pageObject, input, result) {
    pageObject
        .waitForElementPresent('@Header', 500)
        .clickText("Log in")
        //.click('@Login')
        .setValue('@Email', email)
        .setValue('@Password', password)
        .click('@LoginButton')
        .pause(1000)
        .click('@profile')
        .clickText('Edit Profile')
        .clearValue('@firstName')
        .setValue('@firstName', input)
        .clickText("Save")
        .expect.element('@firstName').value.to.equal(result).before(500) 
}
module.exports = { //calling the functions here
    beforeEach: browser => {
        Edit = browser.page.pageObject() //pageObject is the name of our folder
        Edit.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Update firstname': browser => {
        Edit
        editmyinfo(Edit, 'mitali.sharma1403@gmail.com', 'ready2go', 'John', 'John' )
        }
}     
/*function (Editmyinfo, 'input', 'result')
    //create the argument "empMgrPhone" and called it out at the same time*/