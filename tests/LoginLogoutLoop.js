
//the loop works perfectly in realtime, but is giving error at the same time - so we added waitforElement to it
var Edit = {}           
module.exports = {                          //calling the functions here
    beforeEach: browser => {
        Edit = browser.page.pageObject()    //pageObject is the name of our folder
        Edit.navigate()    
  
    },
    after: browser => {
        browser.end()
    },
    'Repeated Login': browser =>{
        for (var i = 0; i < 5; i++) {
    Edit.loginLoop()
        }
    }
}     
