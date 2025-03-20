

import ProductsPage from '../../support/autoamtionExercisePOM/ProductsPage';
import CartPage from '../../support/autoamtionExercisePOM/CartPage';

describe('Products Page Tests', () => {
    beforeEach(()=>{
        cy.visit('http://automationexercise.com');

    })
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const productName = 'Dress'; // Modify based on available products

    it('Should verify all products and product details page', () => {
        // Step 1 & 2: Launch browser and navigate to URL
      
        // Step 3: Verify home page is visible
        cy.get('body').should('contain', 'Home');

        // Step 4: Click on 'Products' button
        productsPage.getProductsButton().click();

        // Step 5: Verify navigation to ALL PRODUCTS page
        productsPage.verifyAllProductsPage();

        // Step 6: Verify products list is visible
        productsPage.verifyProductsList();

        // Step 7: Click 'View Product' of the first product
        productsPage.clickFirstProduct();

        // Step 8: Verify user lands on the product detail page
        productsPage.verifyProductDetailPage();
        
        // Step 9: Verify product details
        productsPage.verifyProductDetails();

    });
    it('Should search for a product and verify results', () => {
        // Step 1 & 2: Launch browser and navigate to URL
      

        // Step 3: Verify home page is visible
        cy.get('body').should('contain', 'Home');

        // Step 4: Click on 'Products' button
        productsPage.getProductsButton().click();

        // Step 5: Verify navigation to ALL PRODUCTS page
        productsPage.verifyAllProductsPage();

        // Step 6: Enter product name in search input and click search button
        productsPage.searchProduct(productName);

        // Step 7: Verify 'SEARCHED PRODUCTS' is visible
        productsPage.verifySearchedProducts();

        // Step 8: Verify all products related to the search are visible
       // productsPage.verifySearchResults(productName);
    });
    it('Test Case 12 - Add Products in Cart', () => {
        cy.contains('Products').click();
        // Add first product
        productsPage.hoverAndAddToCart(0);
        productsPage.clickContinueShopping()
           // Add second  product
        productsPage.hoverAndAddToCart(1);
        productsPage.clickViewCart();
        // verify view cart page is open 
        cy.url().should('include',"view_cart")
        //  Verify products are in cart
        cartPage.verifyProductAdded('Blue Top');
         cartPage.verifyProductAdded('Men Tshirt');
    });
    it.only('Test Case 13 - Verify Product Quantity in Cart', () => {
        const quantity = '4';
       //view  on first product
        productsPage.clickViewProduct(0);
        // set the Product Quantity
        productsPage.setProductQuantity(quantity);
        //clik on add to cart button 
        productsPage.clickAddToCartFromDetail();
        //clcik on view cart from model 
        productsPage.clickViewCart();
        cartPage.verifyProductPriceQuantityTotal('Rs. 500', 4, 'Rs. 2000');
        // // Verify quantity
        // cy.get('.cart_quantity').invoke('text').then((text)=>{
        //     expect(text.trim()).to.equal(quantity)
        // })
    });
})