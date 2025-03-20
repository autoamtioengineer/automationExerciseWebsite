/// <reference types="cypress"/>
import SignupLogin from '../../support/autoamtionExercisePOM/SignupLogin';
import AccountCreation from '../../support/autoamtionExercisePOM/AccountCreation';
import AccountDeletion from '../../support/autoamtionExercisePOM/AccountDeletion';
describe('Register User', () => {
    const signupLogin = new SignupLogin();
    const accountCreation = new AccountCreation();
    const accountDeletion = new AccountDeletion();
    it('Should register a new user successfully', () => {
        // Step 1 & 2: Launch browser and navigate to URL
        cy.visit('http://automationexercise.com');
        // Step 3: Verify that home page is visible successfully
        cy.get('body').should('contain', 'Home');

        // Step 4: Click on 'Signup / Login' button
        cy.contains('Signup / Login').click();
        
        // Step 5: Verify 'New User Signup!' is visible
        cy.contains('New User Signup!').should('be.visible');
         // Step 6: Enter name and email address
         signupLogin.getNameField()
         .should('have.attr', 'placeholder', 'Name')  
         .then(($input) => {
             cy.wrap($input).type('Test User');  // Type only after validation
         });
         signupLogin.getEmailField().invoke('attr', 'placeholder').should('eq', 'Email Address');
         signupLogin.getEmailField().type('testuser' + Date.now() + '@example.com');
        

          // Step 7: Click 'Signup' button
        signupLogin.getSignupButton().click();
        cy.wait(500)
        
        // Step 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
          cy.contains('Enter Account Information').should('be.visible');
        
          // Step 9: Fill details: Title, Name, Email, Password, Date of birth
          accountCreation.fillPersonalDetails('Test@1234', '10', 'May', '1995');
                
        // Step 10 & 11: Select checkboxes
        accountCreation.selectNewsletters();
        // Step 12: Fill additional details
        accountCreation.fillAddressDetails('Test', 'User', 'Test Company', '123 Test Street', 'Suite 100', 'United States', 'California', 'Los Angeles', '90001', '1234567890');
         // Step 13: Click 'Create Account' button
         accountCreation.submitAccountCreation();
        
         // Step 14: Verify that 'ACCOUNT CREATED!' is visible
         cy.get('[data-qa="account-created"]').should('be.visible').contains("Account Created!")
         cy.get('p').should('contain','Congratulations! Your new account has been successfully created!')
           // Step 15: Click 'Continue' button
        accountCreation.clickContinue();
        
        // Step 16: Verify that 'Logged in as username' is visible
        cy.contains('Logged in as Test User').should('be.visible');
        
        // Step 17: Click 'Delete Account' button
        accountDeletion.deleteAccount();
        
        // Step 18: Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.contains('Account Deleted!').should('be.visible');
        accountDeletion.verifyAccountDeleted();
         
        
          
        
        
    
    });
    
    it.only('Should show an error message when a duplicate email is used', () => {
      cy.visit('http://automationexercise.com');

      // Step 4: Click on 'Signup / Login' button
      cy.contains('Signup / Login').click();

      // Step 6: Enter name and already registered email address
      signupLogin.getNameField().type('Test User');
      signupLogin.getEmailField().type('testuser@example.com');

      // Step 7: Click 'Signup' button
      signupLogin.getSignupButton().click();

      // Step 8: Verify that error message is displayed
      cy.contains('Email Address already exist!').should('be.visible');
  });
  


});
