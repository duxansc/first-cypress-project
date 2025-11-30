// .todo-list li:nth-child(3) input

describe('Learning different locator strategies', () => {
  it('ID locator', () => {
    cy.visit("https://example.cypress.io/commands/querying")
    cy.get("#query-btn")
  })

  it('Class locator', () => {
    cy.visit("https://example.cypress.io/commands/querying")
    cy.get(".query-btn.btn.btn-primary")
  })

  it('Name locator', () => {
    cy.visit("https://duxank.github.io/Selenium/loginPage.html")
    cy.get('[name="password"]')
  })

  it.only('context locator', () => {
    cy.visit("https://example.cypress.io/commands/querying")
    cy.get("button").contains("Button")
    cy.contains("Button")
  })
})
