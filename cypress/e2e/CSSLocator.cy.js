describe('CSSLocators', () => {
it("csslocators", () => {

    cy.visit("https://www.amazon.com/")
    cy.get("#twotabsearchtextbox").type("T-shirts")  // tag is optional
    //cy.get(".nav-input nav-progressive-attribute").type("T-shirts") // class locator
    //cy.get("[name = 'field-keywords']").type("T-shirts") // attribute
    //cy.get("input.nav-input nav-progressive-attribute[name = 'field-keywords']").type("T-shirts") // Class with Attribute
    cy.get("#nav-search-submit-button").click()
    cy.get(".lighter").contains("T-Shirts")     //assertionscypre
})
})