describe('Handling Table', () => {
    beforeEach('Login', () => {               //Cypress hook
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();

        //Customers ---> customers

        cy.get("#menu-customer>a").click();                   //Customer main menu
        cy.get("#menu-customer>ul>li:first-child").click();   //Customer sub item
    })
    it('Check no of rows and columns', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7');

    })

    it('Check cell data from specific rows & columns', () => {
        // cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains("princytrainings4@gmail.com");

    })

    it('Read all the rows & columns in first page', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")  //get all the rows
        .each( ($row, index, $rows) => {    // row represent current row within all rows  //Read all the rows from table
            cy.wrap($row).within( ()=> {    //wrap current row
                cy.get("td").each( ($col, index, $cols) => {  //get table data within each columns and get current column
                    cy.log($col.text());

                })
            })

        })

    })
    it.only('Pagination', () => {
        // Find total no of pages
        /*let totalPages;
        cy.get(".col-sm-6.text-end").then( (e) => {  //id of text "Showing 1 to 10 of 12030 (1203 Pages)"
            let myText = e.text();   //Showing 1 to 10 of 12030 (1203 Pages)
            totalPages=myText.substring( myText.indexOf("(")+1, myText.indexOf("Pages")-1);
            cy.log("Total no of Pages in a table======>"+totalPages);
        })*/

        let totalPages=5;

        for(let p=1; p<=totalPages; p++){
            if(totalPages>1){
                cy.log("Active Page is==="+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();  // p represent no of pages
                cy.wait(3000);
                cy.get("table[class='table table-bordered table-hover']>tbody>tr")   // get all the rows
                .each( ($row, index, $rows) => {     //go to each and every row
                    cy.wrap($row).within( () => {    // wrap the row & within that row
                        cy.get('td:nth-child(3)').then( (e) => {        //get 3rd column
                            cy.log(e.text());            // capture only emails
                        })
                    })
                })
            }

        }

    })
}) 