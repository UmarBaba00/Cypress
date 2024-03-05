class Login{

    txtUserName = "input[placeholder='Username";
    txtPassword = "input[placeholder='Password";         //locators of Login page
    btnSubmit = "button[type='submit]";
    lblMsg = ".oxd-topbar-header-breadcrumb > .oxd-text";

    setUserName(username){
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit(){
        cy.get(this.btnSubmit).click();
    }

    verifyLogin(){
        cy.getMaxListeners(this.lblMsg)
          .should('have.text', 'Dashboard');
    }
}

export default Login;