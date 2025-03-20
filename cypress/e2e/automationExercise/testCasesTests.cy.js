import TestCasesPage from '../../support/autoamtionExercisePOM/TestCasesPage';

describe('Verify Test Cases Page', () => {
    const testCasesPage = new TestCasesPage();

    it('Should navigate to the Test Cases page successfully', () => {
        // Step 1 & 2: Launch browser and navigate to URL
        cy.visit('http://automationexercise.com');

        // Step 3: Verify that home page is visible successfully
        cy.get('body').should('contain', 'Home');

        // Step 4: Click on 'Test Cases' button
        testCasesPage.getTestCasesButton().click();

        // Step 5: Verify user is navigated to test cases page successfully
        testCasesPage.verifyTestCasesPage();
        testCasesPage.verifyTextOnPage()
    });
});