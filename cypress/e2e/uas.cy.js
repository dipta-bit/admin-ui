describe("End-to-End Test: Authentication & User Journey", () => {
  
  it("should not allow user to log in with invalid credentials", () => {
    cy.viewport(550, 750);
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();


    cy.get("div").contains("Wrong Password").should("be.visible");
  }); 


  it("should navigate from register, log in, switch theme, and log out", () => {
    

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
    

    cy.get("button").contains("Register").click();

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .clear() 
      .type("hello@example.com") 
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .clear()
      .type("123456") 
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();



    cy.get("nav").should("be.visible");    
    cy.get("header").should("be.visible");
    

    cy.contains('🌙 Dark Mode').should('be.visible').click();
    

    cy.get('html').should('have.class', 'dark');
    cy.contains('☀️ Light Mode').should('be.visible');


    cy.contains('Logout').should('be.visible').click();
    

    cy.contains('Logging Out...').should('be.visible');
    

    cy.url({ timeout: 5000 }).should('include', '/login');
  });
});