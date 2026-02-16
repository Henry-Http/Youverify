class SearchPage {
  typeItemName(item) {
    cy.get("#small-searchterms").type(item);
  }

  clickSearchButton() {
    cy.get("input.search-box-button").click();
  }

  viewItemDetails() {
    cy.get('[data-productid="72"] input[value="Add to cart"]').click();
  }

  addItemToCart() {
    cy.get("#add-to-cart-button-72").click();
  }

  completeSearchSuccessfully(item) {
    this.typeItemName(item);
    this.clickSearchButton();
    this.viewItemDetails();
    this.addItemToCart();
  }
}

export default new SearchPage();
