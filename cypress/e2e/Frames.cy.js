import 'cypress-iframe'
describe('Handling frames', () => {
    it('Approach1', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
         const iframe =cy.get("#mce_0_ifr")                   // Iframe contains Document which include body, to access this body .its is used
            .its('0.contentDocument.body')    //Iframe contain One Document which include the text, 0 is representing index of document
            .should('be.visible')
            .then(cy.wrap);                  // used to wrap the frame
            iframe.clear();
            iframe.type("Welcome {ctrl+a}");  // ctrl+a is used to select the text present in iframe
            cy.get("[aria-label='Bold']").click();    // perform Bold operation on selected text
    })

    it('Approach2 - by using custom command', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
            cy.getIframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");
            cy.get("[aria-label='Bold']").click();
    })

    it('Approach3 - by using Cypress iframe plugin', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr');     // Load the frame
        cy.iframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
            
    })  
})