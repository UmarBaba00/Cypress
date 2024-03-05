describe('Custom Commands', () => {
    it('Handling Link', () => {
        cy.visit("https://demo.nopcommerce.com/")

        //Direct Approach without using custom command
        //  cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();

        //using custom commands
        cy.clickLink("Apple MacBook Pro 13-inch");     //label of product
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');

    })

    it('Overwriting existing command', () => {
        cy.visit("https://demo.nopcommerce.com/")
        //using custom commands
        cy.clickLink("APPLE MACBOOK PRO 13-inch");     //change lowercase into uppercase but still test is passed
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');

    });

    it.only('Login command', () => {
        cy.visit("https://demo.nopcommerce.com/")

        //login
        cy.clickLink("Log in");   //using custom command

        cy.wait(3000);
        cy.loginApp("testing@gmail.com" , "test123");    //using custom command

        cy.get(".ico-account").should('have.text', 'My account')

    });
})