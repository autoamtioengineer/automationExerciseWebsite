class TestCasesPage {
    getTestCasesButton() {
        return cy.contains('Test Cases');
    }

    verifyTestCasesPage() {
        cy.url().should('include', '/test_cases'); // Ensure URL contains 'test_cases'
        cy.contains('Test Cases').should('be.visible'); // Verify page content
    }
    verifyTextOnPage(){
        return cy.contains('Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:').should('be.visible')
    }
}

export default TestCasesPage;