class AccountCreation {
   
    fillPersonalDetails(password, day, month, year){
        cy.get('#id_gender1').check();
        cy.get('#password').type(password)
        cy.get('#days').select(day)
        cy.get('#months').select(month);
        cy.get('#years').select(year);
    }
    selectNewsletters() {
        cy.get('#newsletter').check();
        cy.get('#optin').check();
    }
    fillAddressDetails(firstName, lastName, company, address1, address2, country, state, city, zip, mobile) {
        cy.get('#first_name').type(firstName);
        cy.get('#last_name').type(lastName);
        cy.get('#company').type(company);
        cy.get('#address1').type(address1);
        cy.get('#address2').type(address2);
        cy.get('#country').select(country);
        cy.get('#state').type(state);
        cy.get('#city').type(city);
        cy.get('#zipcode').type(zip);
        cy.get('#mobile_number').type(mobile);
    }

    submitAccountCreation() {
        cy.get('[data-qa="create-account"]').click();
    }

    verifyAccountCreated() {

        cy.get('[data-qa="account-created"]').should('be.visible')
        
    }

    clickContinue() {
        cy.get('[data-qa="continue-button"]').click();
    }




}
export default AccountCreation;