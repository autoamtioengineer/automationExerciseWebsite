class CartPage {
    verifyProductAdded(productName){
        cy.get('.cart_description').should('contain',productName)

    }
    verifyProductPriceQuantityTotal(price, quantity, total) {
        cy.get('.cart_price').should('contain.text', price);
        cy.get('.cart_quantity button.disabled').should('have.text', quantity.toString());
        cy.get('.cart_total_price').should('contain.text', total);
    }
    clickProceedToCheckout() {
        cy.contains('Proceed To Checkout').click();
    }

    verifyCartPage() {
        cy.contains('Shopping Cart').should('be.visible');
    }
}

export default CartPage;