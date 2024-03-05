describe('XPathLocator', () =>{
    it("Find NO Of Products ", () => {
       cy.visit("https://www.amazon.com/")
       cy.xpath("//div['.s-main-slot s-result-list s-search-results sg-row']/div").should('have.length',10)

    })

    it("Chained xpath ", () => {
        cy.visit("https://www.amazon.com/")
        cy.xpath("//div['.s-main-slot s-result-list s-search-results sg-row']/div").xpath("/.div").should('have.length',10)
 
     })

})