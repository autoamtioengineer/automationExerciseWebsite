///<reference types="cypress"/>
import ProductsPage from '../../support/autoamtionExercisePOM/ProductsPage';
import CartPage from '../../support/autoamtionExercisePOM/CartPage'
import AccountDeletion from '../../support/autoamtionExercisePOM/AccountDeletion';
import CheckoutPage from '../../support/autoamtionExercisePOM/CheckoutPage'
import PaymentPage from '../../support/autoamtionExercisePOM/PaymentPage';
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const accountDeletion = new AccountDeletion();
const checkout = new CheckoutPage();
const payment = new PaymentPage();
describe('Place Order', () => {
    beforeEach(()=>{
           // Step 1-3: Visit and verify home
           cy.visit('http://automationexercise.com');

    })
    it('Test Case 14: Place Order with Register', () => {
        cy.contains('Home').should('be.visible');

        // Step 4: Add products
        cy.addProductsToCart(); //  use custom command 

        // Step 5-6: Verify cart and checkout
        cartPage.verifyCartPage();
        cartPage.clickProceedToCheckout();

        // Step 7-11: signUp new user
          cy.get('.modal-body').find('a').click();
          cy.registerNewUser('Ali');  // User is register by using  Custom command

        // Step 12-13: Re-open Cart and Proceed to Checkout
       cy.contains("Cart").click()
        cartPage.clickProceedToCheckout();

        // Step 14: Verify Address & Review Order
        checkout.verifyAddressAndOrder();

        // Step 15: Add comment and Place Order
        checkout.addCommentAndPlaceOrder('Test Order Comment');

        // Step 16-18: Payment
        payment.fillPaymentDetails('Ali', '1234123412341234', '123', '12', '2026');
        payment.confirmOrder();
        payment.verifyOrderSuccess();

        // Step 19-20: Delete Account
        accountDeletion.deleteAndVerifyAccount();
     });
     it('Test Case 15: Place Order: Register before Checkout', () => {
    
        // Step 4-5: Signup / Create Account
        cy.contains('Signup / Login').click()
        cy.registerNewUser('Ali');  // User is register by using  Custom command
        // Step 8: Add products to cart (Custom Command)
        cy.addProductsToCart();
    
        // Step 9-11: Go to cart and checkout
        cy.contains('Proceed To Checkout').click();
    
        // Step 12: Address Details & Review Order
        cy.contains('Address Details').should('be.visible');
        cy.contains('Review Your Order').should('be.visible');
    
        // Step 13: Comment & Place Order
        cy.get('textarea[name="message"]').type('Please deliver ASAP.');
        cy.contains('Place Order').click();
    
        // Step 14-15: Payment
        payment.fillPaymentDetails('Ali', '1234123412341234', '123', '12', '2026');
        
    
        // Step 16: Verify Order success
        payment.confirmOrder();
        payment.verifyOrderSuccess();
    
        // Step 17-18: Delete Account
        accountDeletion.deleteAndVerifyAccount();
      });
    
});
