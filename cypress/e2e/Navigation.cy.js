describe('mySuit', () => {
    it('NavigationTest', () => {
        cy.visit("https://demo.opencart.com/")
        cy.title().should('eq', 'Your Store');  //Home Page
        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');

        cy.go('back');    //Go command is used to navigate between the pages
        cy.title().should('eq', 'Your Store');


        cy.go("forward");  //Go back to camera page
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');


        cy.go(-1);    //Go back to home page
        cy.title().should('eq', 'Your Store');

        cy.go(1);     //Go to Camera Page
        cy.get("div[id='content'] h2").should('have.text', 'Cameras');

        cy.reload();   //Used to reload the page
    })
})