describe("Waits", () => {

    it("each GET waits for 4 seconds by default", () => {
        cy.visit('https://example.cypress.io/todo');
        cy.get('.new-todo').type('Feed the dog{enter}');
        cy.get('.todo-lis li').should('contain', 'Feed the dog');
    })

    it("each SHOULD waits for 4 seconds by default", () => {
        cy.visit('https://example.cypress.io/commands/actions');
        cy.contains('Click to toggle popover').click();
        cy.get('.popover-title').should('be.visible');
        cy.get('.popover-title').should('not.exist');
    })

    it("network - cy.wait()", () => {
        // This is the ONLY good reason to use cy.wait().
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.intercept('GET', '**/comments/*').as('getComment');
        cy.contains('Get Comment').click();
        cy.wait('@getComment').its('response.statusCode').should('eq', 200);
    })


    it.only("bad examples of - cy.wait()", () => {
        // This is the ONLY good reason to use cy.wait().
        cy.visit('https://example.cypress.io/commands/actions');
        cy.wait(5000)
  
    })
})