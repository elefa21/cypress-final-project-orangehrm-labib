class LoginPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  }

  getUsernameField() {
    return cy.get('input[name="username"]');
  }

  getPasswordField() {
    return cy.get('input[name="password"]');
  }

  getLoginButton() {
    return cy.get('button[type="submit"]');
  }

  getErrorMessage() {
    return cy.get(".oxd-alert-content-text");
  }

  typeUsername(username) {
    this.getUsernameField().clear().type(username);
  }

  typePassword(password) {
    this.getPasswordField().clear().type(password);
  }

  clickLogin() {
    this.getLoginButton().click();
  }

  interceptLoginAPI() {
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("loginRequest");
  }

  assertLoginSuccess() {
    cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);
    cy.url().should("include", "/dashboard");
    cy.contains("Dashboard").should("be.visible");
  }

  assertLoginFail(message) {
    this.getErrorMessage().should("contain", message);
  }
}

export default new LoginPage();
