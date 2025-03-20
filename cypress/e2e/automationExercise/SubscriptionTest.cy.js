import SubscriptionPage from '../../support/autoamtionExercisePOM/SubscriptionPage';

describe('Subscription Feature', () => {
    beforeEach(()=>{
        cy.visit('http://automationexercise.com');

    })
    const subscription = new SubscriptionPage();

    it('Verify Subscription in Home Page', () => {
        
        cy.get('body').should('contain', 'Home');

        // Scroll to footer
        subscription.scrollToFooter();

        // Verify SUBSCRIPTION text
        subscription.getSubscriptionText().should('be.visible');

        // Enter email and click subscribe
        subscription.getEmailInput().type('testuser' + Date.now() + '@example.com');
        subscription.getSubscribeButton().click();

        // Verify success message
        subscription.getSuccessMessage().should('be.visible');
    });

    it('Verify Subscription in Cart Page', () => {
        
        cy.get('body').should('contain', 'Home');

        // Go to Cart Page
        cy.contains('Cart').click();

        // Scroll to footer
        subscription.scrollToFooter();

        // Verify SUBSCRIPTION text
        subscription.getSubscriptionText().should('be.visible');

        // Enter email and click subscribe
        subscription.getEmailInput().type('testuser' + Date.now() + '@example.com');
        subscription.getSubscribeButton().click();

        // Verify success message
        subscription.getSuccessMessage().should('be.visible');
    });
});