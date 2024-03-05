describe('Handle Tabs', () => {
    //Approach1
    it.skip('Approach1', () => {
        cy.visit("http://the-internet.herokuapp.com/windows") // Parent Window/Tab
        cy.get(".example>a").invoke('removeAttr', 'target').click();  //.example is the main div class and a is the sub attribute, 
                                                                      //Invoke method is used to remove the target window and the 
                                                                      //action is performed in the same Tab
        cy.url().should('include', 'http://the-internet.herokuapp.com/windows/new') // The URL of Child window
        
        cy.wait(5000);
        //Operations
        cy.go('back'); //Go back to parent window
    })

    it('Approach2', () => {
        cy.visit("http://the-internet.herokuapp.com/windows") // Parent Window/Tab
        cy.get(".example>a").then((e)=> {
            let url = e.prop('href');
            cy.visit(url);                                    // Both the Urls must have same domain, if domains are different this method doesn't work 
        })
        cy.url().should('include', 'http://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);
        //Operations
        cy.go('back'); //Go back to parent window
    })
})