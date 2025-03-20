class SubscriptionPage {
    getSubscriptionText() {
        return cy.contains('Subscription');
    }

    getEmailInput() {
        return cy.get('#susbscribe_email');
    }

    getSubscribeButton() {
        return cy.get('#subscribe');
    }

    getSuccessMessage() {
        return cy.contains('You have been successfully subscribed!');
    }

    scrollToFooter() {
        cy.scrollTo('bottom');
    }

    subscribe(email) {
        this.scrollToFooter();
        this.getSubscriptionText().should('be.visible');
        this.getEmailInput().type(email);
        this.getSubscribeButton().click();
        this.getSuccessMessage().should('be.visible');
    }
}

export default SubscriptionPage;