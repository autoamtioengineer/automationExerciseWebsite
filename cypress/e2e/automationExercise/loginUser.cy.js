import Login from '../../support/autoamtionExercisePOM/Login'
import AccountDeletion from '../../support/autoamtionExercisePOM/AccountDeletion';

describe('Login User with Correct Email and Password', () => {
    const login = new Login();
    const accountDeletion = new AccountDeletion();
    it(' Verify uer not Login  with incorrect email and password', () => {
        // Step 1 & 2: Launch browser and navigate to URL
        cy.visit('http://automationexercise.com');
        cy.contains('Signup / Login').click();

        // Step 6: Enter correct email address and password
        login.getEmailField().type('ali@system.com');  // Use valid credentials
        login.getPasswordField().type('Test1234@');

        // Step 7: Click 'login' button
        login.getLoginButton().click();
        cy.get('p').contains('Your email or password is incorrect!').should('exist')
    });

    it('Login User with correct email and passwordy and delete account', () => {
        // Step 1 & 2: Launch browser and navigate to URL
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.get('body').should('contain', 'Home');

        // Step 4: Click on 'Signup / Login' button
        cy.contains('Signup / Login').click();

        // Step 5: Verify 'Login to your account' is visible
        login.verifyLoginToYourAccount();

        // Step 6: Enter correct email address and password
        login.getEmailField().type('ali@system.com');  // Use valid credentials
        login.getPasswordField().type('Test123@');

        // Step 7: Click 'login' button
        login.getLoginButton().click();

        // Step 8: Verify that 'Logged in as username' is visible
        cy.contains('Logged in as Ali').should('be.visible');

        // // Step 9: Click 'Delete Account' button
        // accountDeletion.deleteAccount();

        // // Step 10: Verify that 'ACCOUNT DELETED!' is visible
        // accountDeletion.verifyAccountDeleted();
    });
    it('Should successfully logout a logged-in user', () => {
       
        cy.visit('http://automationexercise.com');

        cy.contains('Signup / Login').click();
        login.getEmailField().type('ali@system.com');  // Use valid credentials
        login.getPasswordField().type('Test123@');
        login.getLoginButton().click();

        // Step 8: Verify that 'Logged in as username' is visible
        login.verifyUserLoggedIn('Ali');

        
        login.logout();
       cy.get('body').should('contain','Signup / Login').and('not.contain','Logout')

    });
});