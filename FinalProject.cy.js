import LoginPage from "./pages/LoginPage.js";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.js";
import DashboardPage from "./pages/DashboardPage.js";

describe("Final Project OrangeHRM Automation with POM & Intercept", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("TC1 - Login Berhasil ", () => {
    LoginPage.interceptLoginAPI();
    LoginPage.typeUsername("Admin");
    LoginPage.typePassword("admin123");
    LoginPage.clickLogin();
    LoginPage.assertLoginSuccess();
  });

  it("TC2 - Login Gagal (Password Salah)", () => {
    LoginPage.typeUsername("Admin");
    LoginPage.typePassword("salah123");
    LoginPage.clickLogin();
    LoginPage.assertLoginFail("Invalid credentials");
  });

  it("TC3 - Login Gagal (Field Kosong)", () => {
    LoginPage.clickLogin();
    cy.get(".oxd-input-field-error-message").should("contain.text", "Required");
  });

  it("TC4 - Forgot Password Berhasil", () => {
    ForgotPasswordPage.clickForgotPassword();
    ForgotPasswordPage.typeUsername("Admin");
    ForgotPasswordPage.clickResetPassword();
  });

  it("TC5 -  Akses Menu Directory", () => {
    LoginPage.typeUsername("Admin");
    LoginPage.typePassword("admin123");
    LoginPage.clickLogin();

    DashboardPage.interceptDirectoryAPI();
    DashboardPage.goToDirectory();
    DashboardPage.assertDirectoryVisible();
  });
});
