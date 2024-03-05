describe("DropDowns", () => {
    it.skip("dropdown with select", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country")
        .select('Pakistan')
        .should('have.value', 'Pakistan')
    })

    // Selecting Value from DropDown + Search box
    it.skip("dropdown with select", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type('Pakistan').type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text', 'Pakistan')
    })
    

    //Auto Suggest DropDown
    it.skip("Auto Suggested DropDown", () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Pakistan')
        cy.get(".suggestion-title").contains('Pakistan').click()
     
    })


    it("Dynamic DropDown", () => {
        cy.visit("https://www.google.com/")
        cy.get("input[name='q']").type('cypress automation')
        cy.wait(3000)
        cy.get("div.wM6W7d>span").should('have.length', 12)
        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            if($el.text() == 'cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        })

        cy.get("input[name='q']").should('have.value', 'cypress automation tutorial')
        
     
    })
})