class CheckoutPage {
    verifyAddressAndOrder() {
        cy.contains('Address Details').should('be.visible');
        cy.contains('Review Your Order').should('be.visible');
    }

    addCommentAndPlaceOrder(comment) {
        cy.get('textarea[name="message"]').type(comment);
        cy.contains('Place Order').click();
    }
}
export default CheckoutPage;