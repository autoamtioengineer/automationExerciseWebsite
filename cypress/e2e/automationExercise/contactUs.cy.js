import ContactUs from '../../support/autoamtionExercisePOM/ContactUs';

describe('Contact Us Form Test', () => {
    const contactUs = new ContactUs();

    it('Should submit Contact Us form successfully', () => {
        // Step 1 & 2: Launch browser and navigate to URL
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.get('body').should('contain', 'Home');

        // Step 4: Click on 'Contact Us' button
        contactUs.getContactUsButton().click();

        // Step 5: Verify 'GET IN TOUCH' is visible
        contactUs.verifyGetInTouchVisible();

        // Step 6: Enter name, email, subject, and message
        contactUs.getNameField().type('Test User');
        contactUs.getEmailField().type('testuser@example.com');
        contactUs.getSubjectField().type('Test Subject');
        contactUs.getMessageField().type('This is a test message.');

        // Step 7: Upload file
    
        cy.get('input[type="file"]').attachFile('sampleFile.jpeg');
        // Step 8: Click 'Submit' button
        contactUs.getSubmitButton().click();

        // Step 9: Click OK button (Handle alert)
        contactUs.confirmAlert();

        // Step 10: Verify success message
        contactUs.verifySuccessMessage();

        // Step 11: Click 'Home' button and verify home page
        contactUs.clickHomeButton();
        contactUs.verifyHomePage();
    });
    
});
