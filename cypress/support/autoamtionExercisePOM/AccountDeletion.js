class AccountDeletion {
    deleteAccount() {
        cy.contains('Delete Account').click();
    }

    verifyAccountDeleted() {
      
        cy.get('[data-qa="continue-button"]').click();
    }
    deleteAndVerifyAccount() {
        this.deleteAccount();
        this.verifyAccountDeleted();
        cy.contains('Logged in as').should('not.exist');
    }
}

export default AccountDeletion;