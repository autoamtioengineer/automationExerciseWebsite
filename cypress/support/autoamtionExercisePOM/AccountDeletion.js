class AccountDeletion {
    deleteAccount() {
        cy.contains('Delete Account').click();
    }

    verifyAccountDeleted() {
      
        cy.get('[data-qa="continue-button"]').click();
    }
}

export default AccountDeletion;