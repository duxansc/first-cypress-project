describe('Login tests', () => {
    let users;

    beforeEach(function () {
    // Load fixture data
    cy.fixture('users').then((data) => {
      users = data;
    });
  });

  it('Navigate to our Demo pagee', () => {
    cy.visit('https://duxank.github.io/Selenium/loginPage.html')
    cy.get('#username').type(users.username)
    cy.get('#password').type(users.password)
    cy.get('#submit').click()
    cy.get("h2").should("contain.text", users.message).and("be.visible")
  })
})



describe('Login tests', () => {
    let users;

  beforeEach(() => {
  cy.fixture('multipleUsers').then((data) => {
    users = data; // users is now the array
  });

  });

  it('Valid login to our Demo pagee', () => {
    cy.visit('https://duxank.github.io/Selenium/loginPage.html')
    const user = users[0]; // choose the first entry
    cy.get('#username').type(user.username)
    cy.get('#password').type(user.password)
    cy.get('#submit').click()
    cy.get("h2").should("contain.text", user.message).and("be.visible")
  })

  it('Invalid login to our Demo pagee', () => {
    cy.visit('https://duxank.github.io/Selenium/loginPage.html')
    const user = users[1]; // choose the first entry
    cy.get('#username').type(user.username)
    cy.get('#password').type(user.password)
    cy.get('#submit').click()
    cy.get("#error").should("contain.text", user.message).and("be.visible")
  })

})



describe('Login tests - single test with multiple set of data', () => {
    let users;

  beforeEach(() => {
  cy.fixture('invalidUsers').then((data) => {
    users = data; 
  });

  });

  it.only('Invalid login tests to our Demo pagee', () => {
    cy.visit('https://duxank.github.io/Selenium/loginPage.html')
      users.forEach((user) => {
    cy.get('#username').type(user.username)
    cy.get('#password').type(user.password)
    cy.get('#submit').click()
    cy.get("#error").should("contain.text", user.message).and("be.visible")
      })
  })

})






