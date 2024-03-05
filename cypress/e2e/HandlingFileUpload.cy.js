import 'cypress-file-upload'
describe('Handling File Upload', () => {
    it('Single File Upload', () => {
       cy.visit("http://the-internet.herokuapp.com/upload")
       cy.get("#file-upload").attachFile('BABUS CLOTHING.pdf');     //for uploading file you need to save it into fixture folder
       cy.get("#file-submit").click();
       cy.wait(3000);
       cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    });

    it('File Upload - Rename', () => {
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'BABUS CLOTHING.pdf', fileName: 'babus.pdf'});  // actual file name and rename
        cy.get("#file-submit").click();
        cy.wait(3000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    });

    it('File Upload - Drag and Drop', () => {
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile('BABUS CLOTHING.pdf', {subjectType: 'drag-n-drop'});  // need to save file on Desktop or fixture folder
        cy.wait(3000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span') // id get through cypress inspection
        .contains('BABUS CLOTHING.pdf');
    });

    it('Multiple Files Upload', () => {
      cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
      cy.get("#filesToUpload").attachFile([ "BABUS CLOTHING.pdf", "Capture.PNG"]);
      cy.wait(3000);
      cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:');
    });

    it.only('File Upload - Shadow Dom', () => {
      cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
      cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("BABUS CLOTHING.pdf");
      cy.wait(3000);
      cy.get('.smart-item-name', {includeShadowDom:true}).contains('BABUS CLOTHING.pdf');
    });
})