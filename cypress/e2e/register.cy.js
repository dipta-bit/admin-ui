describe("User Registration Flow", () => {
  it("should navigate from login page to register page and fill the form", () => {

    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");


    cy.contains('a', 'Create an account').should("be.visible").click();


    cy.url().should("include", "/register");


    cy.get('input[name="name"]')
      .should("be.visible")
      .should("have.attr", "placeholder", "Tanzir Rahman")
      .type("Dipta Rahman")
      .should("have.value", "Dipta Rahman");


    cy.get('input[name="email"]')
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("dipta.testing@example.com")
      .should("have.value", "dipta.testing@example.com");


    cy.get('input[name="password"]')
      .should("be.visible")
      .should("have.attr", "placeholder", "••••••••••••")
      .type("RahasiaSuper123")
      .should("have.value", "RahasiaSuper123");


  });
});