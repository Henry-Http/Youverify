import searchPage from "../support/pages/searchPage";
import cartPage from "../support/pages/cartPage";

describe("checkout item flow", () => {
  beforeEach(() => {
    cy.fixture("users").then((user) => {
      cy.loginViaSession(user.validUser.email, user.validUser.password);
    });

    cy.visit("/");
  });

  it("Should search and add to cart successfully", () => {
    searchPage.completeSearchSuccessfully("computer");
    cartPage.completeCheckoutSuccessfully();
  });

  it("Should not checkout without accepting terms", () => {
    searchPage.completeSearchSuccessfully("computer");

    cartPage.openCart();
    cartPage.clickCheckout();

    cy.contains("Please accept the terms of service").should("be.visible");
  });
});
