# Cypress E2E Automation for OrangeHRM

This repository contains an end-to-end test automation suite for the OrangeHRM demo application. It is built using Cypress and structured with the Page Object Model (POM) design pattern to create clean, maintainable, and reusable test code.

## Overview

The primary goal of this project is to demonstrate proficiency in Cypress by automating key user flows on the [OrangeHRM live demo site](https://opensource-demo.orangehrmlive.com/). The tests cover login functionality, password recovery, and navigation to core application features. The use of `cy.intercept()` is featured to validate application behavior by spying on network requests.

## Project Structure

The codebase is organized using the Page Object Model (POM) to separate test logic from page-specific UI selectors and actions.

```
.
├── FinalProject.cy.js  # The main test spec file containing all test cases
└── pages/                # Directory for all Page Object classes
    ├── DashboardPage.js
    ├── ForgotPasswordPage.js
    └── LoginPage.js
```

-   **`FinalProject.cy.js`**: Contains the test suite (`describe` block) and all the test cases (`it` blocks). It imports page objects to interact with the application.
-   **`pages/`**:
    -   `LoginPage.js`: Encapsulates all web elements and methods related to the Login page (e.g., typing username, typing password, clicking login).
    -   `ForgotPasswordPage.js`: Contains elements and methods for the password recovery flow.
    -   `DashboardPage.js`: Manages elements and actions on the post-login dashboard, such as navigating to the Directory.

## Automated Test Scenarios

The following test cases are covered in `FinalProject.cy.js`:

| ID  | Description                           | Expected Result                                                                    |
|-----|---------------------------------------|------------------------------------------------------------------------------------|
| TC1 | Successful Login                      | User logs in with valid credentials and is redirected to the Dashboard.            |
| TC2 | Failed Login (Invalid Password)       | An "Invalid credentials" error message is displayed.                               |
| TC3 | Failed Login (Empty Fields)           | "Required" validation messages appear under the username and password fields.      |
| TC4 | Successful Forgot Password Request    | User navigates to the Forgot Password page, enters a username, and submits the form. |
| TC5 | Access Directory Menu Post-Login      | User logs in, navigates to the Directory menu, and the page loads successfully.    |

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) installed on your machine.
-   A code editor like [Visual Studio Code](https://code.visualstudio.com/).

### Installation

1.  Clone this repository to your local machine:
    ```sh
    git clone https://github.com/elefa21/cypress-final-project-orangehrm-labib.git
    ```
2.  Navigate into the project directory:
    ```sh
    cd cypress-final-project-orangehrm-labib
    ```
3.  Install the necessary dependencies, including Cypress:
    ```sh
    npm install
    ```

### Running the Tests

1.  Open the Cypress Test Runner:
    ```sh
    npx cypress open
    ```
2.  The Cypress application window will appear.
3.  Click on `FinalProject.cy.js` in the list of integration tests to start the execution in a browser.
