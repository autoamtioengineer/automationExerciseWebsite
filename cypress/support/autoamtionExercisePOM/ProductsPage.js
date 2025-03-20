class ProductsPage {
    getProductsButton() {
        return cy.contains('Products');
    }

    verifyAllProductsPage() {
        cy.url().should('include', '/products'); // Ensure URL contains 'products'
        cy.contains('All Products').should('be.visible'); // Verify page title
    }

    verifyProductsList() {
        cy.get('.features_items').should('be.visible'); // Ensure product list is displayed
    }

    clickFirstProduct() {
        cy.get('.features_items .choose a').first().click(); // Click 'View Product' on the first item
    }

    verifyProductDetailPage() {
        cy.url().should('include', '/product_details'); // Ensure URL contains 'product_details'
        cy.get('.product-information').should('be.visible'); 
    }
    verifyProductDetails() {
        cy.get('.product-information h2').should('be.visible'); // Product name
        cy.get('.product-information > :nth-child(3)').should('be.visible'); // Category
        cy.get(':nth-child(5) > span').should('be.visible'); // Price
        cy.get('.product-information > :nth-child(6)').should('be.visible'); // Availability
        cy.get('.product-information > :nth-child(7)').should('be.visible'); // Condition
        cy.get('.product-information > :nth-child(8)').should('be.visible'); // Brand
    }
    getSearchInput() {
        return cy.get('#search_product'); // Search input field
    }

    getSearchButton() {
        return cy.get('#submit_search'); // Search button
    }

    searchProduct(productName) {
        this.getSearchInput().type(productName);
        this.getSearchButton().click();
    }

    verifySearchedProducts() {
        cy.contains('Searched Products').should('be.visible');
    }

    verifySearchResults(productName) {
        cy.get('.productinfo p').each(($el) => {
            cy.wrap($el).invoke('text').then((text) => {
                expect(text.toLowerCase()).to.include(productName.toLowerCase());
            });
        })
    }
    

    hoverAndAddToCart(index) {
        cy.get('.features_items .col-sm-4').eq(index).trigger('mouseover');
          cy.get('.features_items .col-sm-4').eq(index).contains('Add to cart').click();
       
       
    }

    clickContinueShopping() {
        cy.get('.modal-content').should('be.visible');
        cy.contains('Continue Shopping').click();
    }

    clickViewCart() {
       cy.get('.modal-content').contains('View Cart').should('be.visible').click()
       
    }

    clickViewProduct(index) {
        cy.get('.product-image-wrapper').eq(index).find('a').contains('View Product').click();
    }

    setProductQuantity(quantity) {
        cy.get('input[name="quantity"]').clear().type(quantity);
    }

    clickAddToCartFromDetail() {
        cy.get('button').contains('Add to cart').click();
    }

}

export default ProductsPage;