class CartPage {
  openCart() {
    cy.get("#topcartlink").click();
  }

  acceptTerms() {
    cy.get("#termsofservice").check();
  }

  clickCheckout() {
    cy.get("#checkout").click();
  }

  continueBilling() {
    cy.get('#billing-buttons-container input[value="Continue"]')
      .should("be.visible")
      .click();
  }

  selectPickupInStore() {
    cy.get("#PickUpInStore").check();
  }

  continueShipping() {
    cy.get('#shipping-buttons-container input[value="Continue"]')
      .should("be.visible")
      .click();
  }

  continuePaymentMethod() {
    cy.get('#payment-method-buttons-container input[value="Continue"]')
      .should("be.visible")
      .click();
  }

  continuePaymentInfo() {
    cy.get('#payment-info-buttons-container input[value="Continue"]')
      .should("be.visible")
      .click();
  }

  confirmOrder() {
    cy.get('#confirm-order-buttons-container input[value="Confirm"]')
      .should("be.visible")
      .click();
  }

  verifySuccess() {
    cy.contains("h1", "Thank you").should("be.visible");
  }

  completeCheckoutSuccessfully() {
    this.openCart();
    this.acceptTerms();
    this.clickCheckout();
    this.continueBilling();
    this.selectPickupInStore();
    this.continueShipping();
    this.continuePaymentMethod();
    this.continuePaymentInfo();
    this.confirmOrder();
    this.verifySuccess();
  }
}

export default new CartPage();
