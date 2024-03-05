//Hooks
//before
//after
//beforeEach
//afterEach

//Tags
//skip
//only
describe('MyTestSuit', () => {

    before( () => {      // before is started only once until all the three test cases are executed
        cy.log("***** Launch App *******");
    })

    after( () => {      //after is started only once until all the three test cases are executed
        cy.log("*****  Close app  *****");
    })

    beforeEach( () => {   //beforeEach is stated every three times before the test case execution
        cy.log("*****  Login  *****");
    })

    afterEach( () => {    //afterEach is stated every three times before the test case execution
        cy.log("*****  Logout  *****");
    })

    it('search', () => {
     cy.log("*****   Search *****");
    });

    it.skip('advance search', () => {
        cy.log("*****   advance search *****");
    });

    it.only('listing products', () => {
        cy.log("*****   listing products *****");
    });
})