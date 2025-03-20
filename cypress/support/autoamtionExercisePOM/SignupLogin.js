class SignupLogin {
    getNameField() {
        return cy.get('[data-qa="signup-name"]');
    }

    getEmailField() {
        return cy.get('[data-qa="signup-email"]');
    }
    
    getSignupButton() {
        return cy.get('[data-qa="signup-button"]')
    }


    
}

export default SignupLogin;