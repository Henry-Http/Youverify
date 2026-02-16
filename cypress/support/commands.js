import loginPage from "./pages/loginPage";

Cypress.Commands.add("loginViaSession", (email, password) => {
  cy.session(
    [email, password],
    () => {
      cy.visit("/login");
      loginPage.login(email, password);
      cy.get(".ico-logout").should("be.visible");
    },
    {
      cacheAcrossSpecs: true, 
    },
  );
});
