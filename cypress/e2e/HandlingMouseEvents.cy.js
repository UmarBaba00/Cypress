import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
describe('Handling Mouse Events', () => {
    it('MouseHover', () => {               // Place the Mouse Curser on particular element
        cy.visit("https://demo.opencart.com/")
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)") //get using cssSelector directly
        .should('not.be.visible');
        // cy.get(".nav-link.dropdown-toggle[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20']")
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)") //get using cssSelector directly
        .should('be.visible');

    });

    it('Right Click', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")

        //Approach1
       /* cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');  //contextmenu is used for right click & F12 key is used for inspection
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should('be.visible');*/ // id get through cssSelector

        //Approach2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get(".context-menu-one.btn.btn-neutral").should('be.visible');  //id get through cypress cssSelector

    });

    it('Double Click', () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded("#iframeResult");    //Load the Frame

        //Approach1  trigger()
       /* cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick'); //find use to find the element id within the frame
        cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello World!');   // field id needed where text is entered after dblclick
       */

        //Approach2
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello World!');


    });

    it('Drag and Drop using Plugin', () => {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box6").should('be.visible');
        cy.get("#box106").should('be.visible');

        cy.wait(3000);
        cy.get("#box6").drag('#box106', {force:true});   //first is is of source element & other is target
    });

    it.only('Scrolling Page', () => {
       cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

       //Pakistan flag
       cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').scrollIntoView({duration:2000});
       cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').should('be.visible');
       
       //Afghanistan flag
       cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').scrollIntoView({duration:2000});
       cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').should('be.visible');

       cy.get('#footer').scrollIntoView({duration:2000});

    });

})