describe('MyTestSuit', () => {
    it('DataDrivenTest', () => {
        cy.fixture('orangeHrm2').then( (data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            data.forEach((userData) => {   //foreach is used to capture data one by one from data variable 
                                              //which include all data present in orangeHrm2.json file
            cy.get("input[placeholder='Username']").type(userData.username);
            cy.get("input[placeholder='Password']").type(userData.password);
            cy.get("button[type='submit']").click();

            if(userData.username == 'Admin' && userData.password == 'admin123'){
                cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                  .should('have.text', userData.expected);   //Dashboard validation

                  
                  cy.get('.oxd-userdropdown-tab > .oxd-icon').click();  //Logout
                  cy.get(':nth-child(4) > .oxd-userdropdown-link').click();    //Logout

            }
            else{
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-tex")
                  .should('have.text', userData.expected);
            }

            
                
            });
        })
    })
})