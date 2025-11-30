describe("Custom Commands", () => {
  it("Use custom commands in todo app", () => {
    cy.visit("https://example.cypress.io/todo");
    // cy.get('.new-todo').type('Feed the dog{enter}');
    cy.addTodo("Feed the dog");
    // cy.get('.todo-list li').should('contain', 'Feed the dog');
    cy.shouldHaveTodo("Feed the dog");
  });

  it("Navigate to Login page", () => {
    cy.visit("https://duxank.github.io/Selenium/loginPage.html");
    cy.fillUserForm("selenium", "Asd123");
  });
});

describe("Custom Commands", () => {
  it.only("Use custom commands in todo app", () => {
    cy.visit("https://example.cypress.io/todo");
    cy.addTodo("Feed the dog");
    cy.shouldHaveTodo("Feed the dog");
    cy.getTodoCount().then((count) => {
      expect(count).to.eq(3);
    });
  });
});
