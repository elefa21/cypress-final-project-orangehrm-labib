class ForgotPasswordPage {
  clickForgotPassword() {
    cy.contains("Forgot your password?").click();
  }

  typeUsername(username) {
    cy.get('input[placeholder="Username"]').type(username);
  }

  clickResetPassword() {
    cy.get('button[type="submit"]').click();
  }

  assertResetConfirmation() {
    cy.contains("Reset Password link sent successfully").should("exist");
  }
}

export default new ForgotPasswordPage();
