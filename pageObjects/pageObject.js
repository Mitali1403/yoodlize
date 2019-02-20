var yoodCommands = {
        clickText: function (text) {                        //Click by text
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()
        return this
    },
   loginLoop: function (email, password)
{
    this
    .waitForElementPresent('@Header', 100)
    .clickText("Log in")                                    //.click('@Login') --> if clicktext doesn't work
    .waitForElementVisible('@LoginButton', 1000)            //correction made
    .setValue('@Email', 'mitali.sharma1403@gmail.com')
    .setValue('@Password', 'ready2go')
    .click('@LoginButton')
    .waitForElementNotPresent('@Email', 500)               //correction made
    .click('@profile')
    .click('@logout')
return this
    },
  }
module.exports = {
    url: 'https://alpha.yoodlize.com/',
    commands: [yoodCommands],               //called the command here
    elements: {
    Header: 'div[class="navbar-header"]',
    Signup: '#rebass-provider > div > div.Home-root-1avl7 > div > div.sc-kIPQKe.dxbYcN > div.Header-root-O9oW9 > div > nav > div > div.navbar-collapse.collapse > div.sc-bdVaJa.kmtHOY > div > ul > li:nth-child(5) > a > div > span',
    Email: 'input[name="email"]', 
    Password: 'input[name="password"]',
    LoginButton: 'button[type="submit"]',
    profile: '#basic-nav-dropdown',         //'img[class="sc-hrWEMg buEeUU"]'
    firstName: '[name=firstName]',
    lastName: '[name=lastName]',
    logout: '#rebass-provider > div > div.Home-root-1avl7 > div > div.sc-kIPQKe.dxbYcN > div.Header-root-O9oW9 > div > nav > div > div.navbar-collapse.collapse > div.sc-bdVaJa.kmtHOY > ul > li.hidden-xs.dropdown.open > ul > li:nth-child(7) > form > button > div'
/*   describeYourself: '#rebass-provider > div > div:nth-child(3) > div > div > div > div.EditProfile-smPadding-3aanJ.col-lg-9.col-md-9.col-sm-9.col-xs-12 > div > div > div.sc-bdVaJa.iHSytp > form > div:nth-child(7) > label.col-lg-9.col-md-9.col-sm-9.col-xs-12.control-label > div > textarea',
  // Login: '#rebass-provider > div > div.Home-root-1avl7 > div > div.sc-kIPQKe.dxbYcN > div.Header-root-O9oW9 > div > nav > div > div.navbar-collapse.collapse > div.sc-bdVaJa.kmtHOY > div > ul > li:nth-child(4) > a > div > span',
 // save: '.EditProfileForm-button-35yKS.EditProfileForm-btnPrimary-op6Sv.EditProfileForm-btnlarge-24SJV'
 //editProfile: '#rebass-provider > div > div.Home-root-1avl7 > div > div.sc-kIPQKe.dxbYcN > div.Header-root-O9oW9 > div > nav > div > div.navbar-collapse.collapse > div.sc-bdVaJa.kmtHOY > ul > li.hidden-xs.dropdown.open > ul > li:nth-child(5) > a > div', */

}
}

 