class Login {
    getEmailField() {
        return cy.get('[data-qa="login-email"]');
    }

    getPasswordField() {
        return cy.get('[data-qa="login-password"]');
    }

    getLoginButton() {
        return cy.get('[data-qa="login-button"]');
    }

    verifyLoginToYourAccount() {
        cy.contains('Login to your account').should('be.visible');
    }
    verifyUserLoggedIn(username) {
        cy.contains(`Logged in as ${username}`).should('be.visible');
    }
    logout() {
        cy.contains('Logout').click();
    }
}

export default Login;