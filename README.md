# TUMIID_Cypress
This is a new project, I am switching from Playwright to Cypress with BDD, POM

# Setting
```bash
npm install cypress --save-dev
npx cypress open
npm install --save-dev @badeball/cypress-cucumber-preprocessor
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
npm install -g esbuild
npm install --save-dev cypress-xpath
```
npx cypress run --spec "cypress/e2e/features/login.feature" // run a special test
```
If running tests fail, you can use 
npx cypress open --clear-cache
