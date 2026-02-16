import loginPage from "../support/pages/loginPage";

describe("Login Validation", () => {
  let userData;

  beforeEach(() => {
    cy.fixture("users").then((data) => {
      userData = data;
    });
    cy.visit("/login");
  });

  it("Should login successfully", () => {
    loginPage.login(userData.validUser.email, userData.validUser.password);
    cy.get(".ico-logout").should("be.visible");
  });

  it("Should show error for invalid user", () => {
    loginPage.login(userData.invalidUser.email, userData.invalidUser.password);
    cy.get(".message-error").should("contain", "Login was unsuccessful");
  });
});
