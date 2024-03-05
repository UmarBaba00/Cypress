describe('Alert', () => {
    //1) JavaScript Alert: It will have some text and 'OK' Button
    it('JS simple alert', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();
 
        cy.on('window:alert', (t) => {          //t is representing alert window
            expect(t).to.contain('I am a JS Alert');
        })

        // Alert Window will automatically closed byb the cypress
        cy.get("#result").should('have.text', 'You successfully clicked an alert');
    })

    //JavaScript Confirm Alert: It will have some text with 'OK' and 'Cancel' button
    it('JS Confirmation alert - OK', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {          //t is representing alert window
            expect(t).to.contain('I am a JS Confirm');
        })

        //Cypress automatically close window by using 'Ok' button which is default-button
        cy.get("#result").should('have.text', 'You clicked: Ok')
    })


    it('JS Confirmation alert - Cancel', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t) => {          //t is representing alert window
            expect(t).to.contain('I am a JS Confirm');
        })

        //Close Window by using 'Cancel' button
        cy.on('window:confirm', () => false)
        cy.get("#result").should('have.text', 'You clicked: Cancel')
    })

    //JavaScript Prompt Alert: It will have some text with TextBox for user input along with 'OK' button
    it('JS Prompt alert - OK', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) =>{
            cy.stub(win, 'prompt').returns('Welcome')
        })

        cy.get("button[onclick='jsPrompt()'").click();

        //Cypress will automatically close the prompted alert- it will use 'OK' button by default

        //Close Window by using 'Cancel' button
        //cy.on('window:prompt', () => false)
        cy.get("#result").should('have.text', 'You entered: Welcome');

    })


    it('JS Prompt alert - OK', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) =>{
            cy.stub(win, 'prompt').returns('Welcome')
        })

        cy.get("button[onclick='jsPrompt()'").click();

        //Cypress will automatically close the prompted alert- it will use 'OK' button by default

        //Close Window by using 'Cancel' button
        //cy.on('window:prompt', () => false)
        cy.get("#result").should('have.text', 'You entered: Welcome');

    })


    it.only('Authenticated alert', () => {

        //Approach1
       /* cy.visit('http://the-internet.herokuapp.com/basic_auth', {auth: 
                                                                     {
                                                                        username: "admin", 
                                                                        password: "admin"
                                                                    }
                                                                });
        cy.get("div[class='example'] p").should('have.contain', "Congratulation");
        */
       cy.visit("http://admin:admin@the-internet.herokuapp.com/basic_auth")
       cy.get("div[class='example'] p").should('have.contain', "Congratulation");
    })
})