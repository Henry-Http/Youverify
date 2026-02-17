# Youverify-task Cypress Automation Framework
### Project Overview
This repository contains automated end-to-end tests built with Cypress to validate the core flows of the Youverify task. This test consists of the flow from search to checkout on an e-commerce site.
### Tech Stack

| Tool / Tech              | Purpose                                       |
| ------------------------ | --------------------------------------------- |
| **JavaScript** | Core programming language                     |
| **Cypress**              | End-to-end testing framework                  |
| **Mochawesome Reporter** | HTML & JSON reporting                         |
| **npm**                  | Dependency management                         |
| **GitHub Actions**       | CI/CD automation                              |

### Installation
1. Clone the repository

   git clone https://github.com/Henry-Http/Youverify.git
   
2. Install dependencies

   npm install
   
### Running Tests Locally
npx cypress open

*This allows you to:*

+ Run tests manually

+ Debug easily with browser DevTools

+ Watch tests execute live

### Running Tests Headlessly
npx cypress run

*This is the preferred execution mode for:*

+ CI pipelines

+ Automated regression runs

+ Faster execution

### Viewing Mochawesome Reports
*This project generates HTML reports using Mochawesome.*

After running tests headlessly, reports are saved inside:

cypress/reports/html/

#### To view the report:
1. Navigate into the folder:
   cd cypress/reports/html
2. Open the HTML report in your browser:
   open the HTML page and use the live server extension to go live

### CI/CD Pipeline (GitHub Actions)
*The project includes CI/CD automation via GitHub Actions located in:*

.github/workflows/

#### What the pipeline does:
+ Checks out the repository

+ Installs dependencies

+ Runs Cypress tests in headless mode

+ Generates Mochawesome reports

This ensures every push or pull request is automatically validated.

### Key Directories

| Folder                 | Description                       |
| ---------------------- | --------------------------------- |
| **cypress/e2e/**       | All automated test cases          |
| **cypress/fixtures/**  | Static test data used during runs |
| **cypress/support/**   | Reusable commands and setup hooks |
| **.github/workflows/** | GitHub Actions CI pipeline        |

#### Author
#### Built by Henry Okafor
#### QA Engineer | Test Automation | Cypress Specialist
