module.exports = {
    url: 'https://alpha.yoodlize.com/',
    elements: {
        searchOption: {
            selector: '//span[contains(text(), "Search")]',
            locateStrategy: 'xpath'
        },
        listItemOption: {
            selector: '//span[contains(text(), "List an Item")]',
            locateStrategy: 'xpath'
        },
        logInOption: {
            selector: '//span[contains(text(), "Log In")]',
            locateStrategy: 'xpath'
        },
        signUpOption: {
            selector: '//span[contains(text(), "Sign Up")]',
            locateStrategy: 'xpath'
        },
        signUpWithEmail: {
            selector: '//span[contains(text(), "Sign up with Email")]',
            locateStrategy: 'xpath'
        },
        firstNameInput: 'input[name="firstName"]',

        lastNameInput: 'input[name="lastName"]',

        emailInput: {
            selector: '(//input[@name="email"])[1]',
            locateStrategy: 'xpath'
        },
        passwordInput: {
            selector: '(//input[@name="password"])[1]',
            locateStrategy: 'xpath'
        },
        monthInput: 'select[name="month"]',

        dayInput: 'select[name="day"]',

        yearInput: 'select[name="year"]',

        signUpButton: {
            selector: '(//input[@name="password"])[2]',
            locateStrategy: 'xpath'
        },
        listYourStuffOption: {
            selector: '//span[contains(text(), "List Your Stuff")]',
            locateStrategy: 'xpath'
        },
        getStarted: 'button[class="sc-esjQYD iteNRl sc-ifAKCX kvYMhQ"]',

        titleInput: 'input[placeholder="Title"]',

        descriptionInput: 'textarea[placeholder="Enter Description here..."]',

        pickCategory: 'select[form="ListingForm"]',
        clothing: 'option[value="74"]',
        sportingGoods: 'option[value="76"]',
        homeKitchen: 'option[value="77"]',
        outdoorGear: 'option[value="84"]',
        electronics: 'option[value="85"]',
        tools: 'option[value="86"]',
        toysGames: 'option[value="87"]',
        partyEquipment: 'option[value="88"]',
        businessEquipment: 'option[value="89"]',
        localExports: 'option[value="90"]',
        recreationalVehicles: 'option[value="91"]',
        venues: 'option[value="92"]',
        lawnGarden: 'option[value="93"]',
        experiences: 'option[value="94"]',

        nextButton: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',

        streetInput: 'input[placeholder="Street Address"]',

        apartmentInput: 'input[placeholder="Apt, suite, Bldg, (optional)"]',

        cityInput: 'input[placeholder="City"]',

        stateInput: 'input[placeholder="State"]',

        zipInput: 'input[placeholder="Zipcode"]',

        dailyRate: 'input[type="number"]',

        rentalRules: 'select[class="sc-fONwsr fFdrgT"]',
        securityDeposit: 'option[label="Security deposit provided on pickup"]',
        addedRuleSecurity: {
            selector: '//div[contains(text(), "Security deposit provided on pickup")]',
            locateStrategy: 'xpath'
        },
        acceptLiability: {
            selector: '(//ins[@class="iCheck-helper"])[1]',
            locateStrategy: 'xpath'
        },

        agreeTermsConditions: {
            selector: '(//ins[@class="iCheck-helper"])[2]',
            locateStrategy: 'xpath'
        },

        publishButton: 'button[class="sc-esjQYD XsuRc sc-ifAKCX kvYMhQ"]',

        logInButton: 'button[class="Login-button-138K6 Login-btnPrimary-1tVae btn btn-lg btn-default btn-block"]',

        logoutButton: {
            selector: '(//div[@class="sc-jqCOkK fPsvQY sc-gqjmRU fptSCa"])[2]',
            locateStrategy: 'xpath'
        },
        userAccount: 'div[class="sc-bwCtUz fmQSmr"]',


    }
}
