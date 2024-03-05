describe('My First Test', () => {
    it('Verify title-Positive', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      cy.title().should('eq', 'OrangeHRM')
    })

    it('Verify title-Negative', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq', 'OrangeHRM123')
      })
  })