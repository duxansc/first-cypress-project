describe("Login tests", () => {
  it("Navigate to Cypress demo page", () => {
    cy.visit("https://example.cypress.io");
    cy.get("h1");
  });
  it("User wants to click on Get link", () => {
    cy.visit("https://example.cypress.io");
    cy.get("li").find("a").contains("get").click();
  });
});
