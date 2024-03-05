describe('MyTestSuit', () => {

    //Direct access
    it.only('FixturesDemoTest', () => {
      /* cy.visit("https://opensource-demo.orangehrmlive.com/")
       cy.get("input[placeholder='Username']").type("admin");
       cy.get("input[placeholder='Password']").type("admin123");
       cy.get("button[type='submit']").click();

       cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
         .should('have.text', 'Dashboard');*/

       cy.visit("https://opensource-demo.orangehrmlive.com/")

       cy.fixture('orangeHrm').then( (data) => {     //orangeHrm is data file present in Fixture folder
        cy.get("input[placeholder='Username']").type(data.username);
        cy.get("input[placeholder='Password']").type(data.password);
        cy.get("button[type='submit']").click();
 
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
          .should('have.text', data.expected);

       })
      ;
    })

    //Access through Hooks - for multiple it blocks

    let userData;       //Global variable
    before( () => {
         cy.fixture('orangeHrm').then( (data) => {     //data variable is used to access data from orangeHrm.json file
            userData = data;

    })
})

    it('FixturesDemoTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.get("input[placeholder='Username']").type(userData.username);
        cy.get("input[placeholder='Password']").type(userData.password);
        cy.get("button[type='submit']").click();
 
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
          .should('have.text', userData.expected);

    })
})