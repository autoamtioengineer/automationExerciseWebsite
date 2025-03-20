class PaymentPage {
    fillPaymentDetails(name, cardNum, cvc, expiryMonth, expiryYear) {
        cy.get('[name="name_on_card"]').type(name);
        cy.get('[name="card_number"]').type(cardNum);
        cy.get('[name="cvc"]').type(cvc);
        cy.get('[name="expiry_month"]').type(expiryMonth);
        cy.get('[name="expiry_year"]').type(expiryYear);
    }

    confirmOrder() {
        cy.contains('Pay and Confirm Order').click();
    }

    verifyOrderSuccess() {
        cy.get('.col-sm-9 > p').should('contain.text',"Congratulations! Your order has been confirmed!").and('be.visible')
        //cy.contains('Your order has been placed successfully!').should('be.visible');
    }
}
export default PaymentPage;