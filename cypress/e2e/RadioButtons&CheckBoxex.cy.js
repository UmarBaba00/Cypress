describe("Check UI Elements", () => {
    it("Checking Radio Buttons", () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Visibility of Radio Buttons
        // cy.get("#female").should('be.visible')
        // cy.get("#male").should('be.visible')

        //Selecting Radio Buttons
        cy.get("#male").should('be.visible').check().should('be.checked')
        // cy.get("#female").should('not.be.checked')

        // cy.get("#female").should('be.visible').check().should('be.checked')
        // cy.get("#male").should('not.be.checked')

    })

    it("Checking Check Boxes", () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

    //    cy.get("#monday").should('be.visible')

    //    // Selecting single Check Box
    //    cy.get("#monday").check().should('be.checked')

    //    // Unselect the Single Check Box
    //    cy.get("#monday").uncheck().should('not.be.checked')

       // Selecting all the Check Boxes
    //    cy.get(".form-check-input[type='checkbox']").check().should('be.checked')
    //    cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

       // Select First Check Box
       cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
       cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})