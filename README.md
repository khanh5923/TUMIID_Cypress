# TUMIID_Cypress
This is a new project, I am switching from Playwright to Cypress with BDD, POM

# 🚀 Cypress + Cucumber + XPath Setup Guide

## 📦 Install Dependencies

```bash
# 1. Install Cypress
npm install cypress --save-dev

# 2. Open Cypress for the first time
npx cypress open

# 3. Install Cucumber Preprocessor
npm install --save-dev @badeball/cypress-cucumber-preprocessor

# 4. Install ESBuild Preprocessor
npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
npm install -g esbuild

# 5. Install XPath Support
npm install --save-dev cypress-xpath

**Run a specific feature file**
npx cypress run --spec "cypress/e2e/features/login.feature"

**Open Cypress in interactive mode**
npx cypress open

**If Cypress has issues, clear the cache**
npx cypress open --clear-cache
