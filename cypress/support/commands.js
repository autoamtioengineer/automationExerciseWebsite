// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// login custom commad
Cypress.Commands.add('login',(email,password,username)=>{
   
    cy.get('body').should('contain', 'Home');
    cy.contains('Signup / Login').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
    cy.contains(`Logged in as ${username}`).should('be.visible');
})

// SignUp and account creation 
// Import POM 
import SignupLogin from '../support/autoamtionExercisePOM/SignupLogin';
import AccountCreation from '../support/autoamtionExercisePOM/AccountCreation';

const signupLogin = new SignupLogin();
const accountCreation = new AccountCreation();

Cypress.Commands.add('registerNewUser', (name) => {
   
    // Fill Signup Form
    signupLogin.getNameField().type(name);
    signupLogin.getEmailField().type('testuser' + Date.now() + '@example.com');
    signupLogin.getSignupButton().click();

    // Fill Account Creation Form
    accountCreation.fillPersonalDetails('Test123@', '1', 'January', '2000');
    accountCreation.selectNewsletters();
    accountCreation.fillAddressDetails(
        name, 'Test', 'ABC', '123 Test St', 'Suite 100',
        'Canada', 'TestState', 'TestCity', '12345', '1234567890'
    );
    accountCreation.submitAccountCreation();
    accountCreation.verifyAccountCreated();
    accountCreation.clickContinue();

    // Verify Logged in
    cy.contains('Logged in as').should('be.visible');



});

// Custom Command for addingin products to Cart 
import ProductsPage from '../support/autoamtionExercisePOM/ProductsPage';
const productsPage = new ProductsPage();

Cypress.Commands.add('addProductsToCart', () => {
    // Add first product
    productsPage.hoverAndAddToCart(0);
    productsPage.clickContinueShopping();

    // Add second product
    productsPage.hoverAndAddToCart(1);
    productsPage.clickViewCart();
});

