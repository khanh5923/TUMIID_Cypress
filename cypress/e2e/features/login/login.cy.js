import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require("cypress-xpath");

Given(/^I open the login page$/, () => {
  cy.visit("https://admlucid.com/Identity/Account/Login");
});

When(/^I enter username and password$/, () => {
  cy.get("#Input_Email").type("test2@admlucid.com");
  cy.get("#Input_Password").type("333_xps?9194", { log: false });
  cy.get("#login-submit").click();
});

Then(/^Login Fail$/, () => {
  cy.xpath("//html/body/main/div/div/div/section/form/div[1]/ul/li").should(
    "contain",
    "Invalid login attempt."
  );
});
