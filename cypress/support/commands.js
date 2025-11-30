Cypress.Commands.add("addTodo", (text) => {
  cy.get(".new-todo").type(`${text}{enter}`);
});
Cypress.Commands.add("shouldHaveTodo", (text) => {
  cy.get(".todo-list li").contains(text).should("be.visible");
});
Cypress.Commands.add("fillUserForm", (name, email) => {
  cy.get("#username").type(name);
  cy.get("#password").type(email);
  cy.get("#submit").click();
});
Cypress.Commands.add("getTodoCount", () => {
  return cy.get(".todo-list li").then(($items) => $items.length);
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
