// before, beforeEach, after, afterEach

// before()       → runs once before all tests
// beforeEach()   → runs before EVERY test
// test 1
// afterEach()    → runs after EVERY test
// test 2
// after()        → runs once after all tests

describe("Use different test hooks", () => {
  //   before(() => {
  //     cy.visit("https://example.cypress.io/commands/actions");
  //   });

  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });

  it("before() - first test", () => {
    cy.get("h1").contains("Actions");
  });

  //   Cypress introduced "test isolation" in v10+
  it("before() - second test", () => {
    cy.contains("a", ".type()");
    cy.get("a").contains(".type()");
  });

  afterEach(() => {
    cy.log("Test Finished");
    // cy.screenshot();
  });
});

//  Disable test isolation - Cypress will not clear the page between tests.!!!
describe("Todo App - Before Hook Example", () => {
  let todos = ["Feed the dog 🐶", "Buy groceries 🛒", "Run 5 miles"];

  // Runs **once before all tests**
  before(() => {
    // Visit the page once
    cy.visit("https://example.cypress.io/todo");

    // Add some todos only once
    todos.forEach((todo) => {
      cy.get(".new-todo").type(`${todo}{enter}`);
    });
  });

  //   it("should display the first todo", () => {
  //     cy.contains(".todo-list li", "Feed the dog 🐶").should("be.visible");
  //   });

  it("should display all todos", () => {
    // Loop over each todo
    todos.forEach((todo) => {
      cy.contains(".todo-list li", todo).should("be.visible");
    });
  });

  afterEach(() => {
    cy.log("Test Finished");
    // cy.screenshot();
  });
});

after(() => {
  cy.log("All tests in this file are done");
});
