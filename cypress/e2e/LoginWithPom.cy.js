// import Login from "../PageObjects/LoginPage";
import Login from "../PageObjects/LoginPage2";
describe('POM', () => {

    //General approach
    it('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.getMaxListeners(".oxd-topbar-header-breadcrumb > .oxd-text")
          .should('have.text', 'Dashboard');
    })

    //POM approach
    it('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        const login = new Login;
        login.setUserName("Admin");
        login.setPassword("admin123");
        login.clickSubmit();
        login.verifyLogin();
        
    })

     //using POM with fixture
     it.only('LoginTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('orangeHrm').then( (data) => {
        const login = new Login;
        login.setUserName(data.username);
        login.setPassword(data.password);
        login.clickSubmit();
        login.verifyLogin();

        })
        
    })
})