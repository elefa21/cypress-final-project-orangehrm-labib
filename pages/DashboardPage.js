class DashboardPage {
  goToDirectory() {
    cy.get("a[href='/web/index.php/directory/viewDirectory']").click();
  }

  interceptDirectoryAPI() {
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0"
    ).as("directoryData");
  }

  assertDirectoryVisible() {
    cy.wait("@directoryData").its("response.statusCode").should("eq", 200);
    cy.contains("Directory").should("exist");
  }
}

export default new DashboardPage();
