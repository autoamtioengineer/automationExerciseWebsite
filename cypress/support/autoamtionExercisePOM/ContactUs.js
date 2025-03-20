class ContactUs {
    getContactUsButton() {
        return cy.contains('Contact us');
    }

    verifyGetInTouchVisible() {
        cy.contains('Get In Touch').should('be.visible');
    }

    getNameField() {
        return cy.get('[data-qa="name"]');
    }

    getEmailField() {
        return cy.get('[data-qa="email"]');
    }

    getSubjectField() {
        return cy.get('[data-qa="subject"]');
    }

    getMessageField() {
        return cy.get('[data-qa="message"]');
    }

    getUploadFileButton() {
        return cy.get('input[type="file"]');
    }

    getSubmitButton() {
        return cy.get('[data-qa="submit-button"]');
    }

    confirmAlert() {
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Press OK to continue.');
        });
        cy.on('window:confirm', () => true);
    }

    verifySuccessMessage() {
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');
    }

    clickHomeButton() {
        cy.contains('Home').click();
    }

    verifyHomePage() {
        cy.get('body').should('contain', 'Home');
    }
    
}

export default ContactUs;