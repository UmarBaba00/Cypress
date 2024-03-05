// const { assert } = require("chai")
// const { expect } = require("chai")

describe("Assertion demo", () => {
    it("Implicit assertion", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('include', 'orangehrmlive.com') //find specific part in the URL
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Compare the URL
        // cy.url().should('contain', 'orangehrm') //find specific part in the URL

        // cy.url().should('include', 'orangehrmlive.com') //find specific part in the URL
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Compare the URL
        // .should('contain', 'orangehrm') //find specific part in the URL

        cy.url().should('include', 'orangehrmlive.com') //find specific part in the URL
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // Compare the URL
        .and('contain', 'orangehrm') //find specific part in the URL
        .and('not.contain', 'greenhrm')


        cy.title().should('include', 'OrangeHRM')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible') // Logo visibility
        .and('exist') // Logo existence

        cy.xpath("//a").should('have.length', 5)  // check no of links in a webpage

        cy.get("input[placeholder='Username']").type("admin") //provide value in textbox
        cy.get("input[placeholder='Username']").should('have.value', 'admin') //verify value
    })

    it("Explicit assertion", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName = "Sachin Roy"   //expected name

        cy.get(".oxd-userdropdown-name").then( (x) => { // save name into x object
            let actName = x.text() // Actual name
            
            //BDD Style
            expect(actName).to.equal(expName)  // Compare Actual name with Expected name
            // expect(actName).to.not.equal(expName) 

            //TDD Style
            assert.equal(actName,expName)
            // assert.notEqual(actName,expName)
        })
    })
})