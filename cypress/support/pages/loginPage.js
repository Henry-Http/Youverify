class LoginPage {
  login(email, password) {
    cy.get("#Email").type(email);
    cy.get("#Password").type(password);
    cy.get('input[value="Log in"]').click();
  }
}

export default new LoginPage();
