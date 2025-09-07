import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require("cypress-xpath");

Given(/^I open the golf page$/, () => {
  cy.viewport(1800, 800);
  cy.visit("/Golf");
});

When(/^I enter golf course (.*)$/, (golfName) => {
  cy.get(".input").type(golfName.trim());
  cy.wait(2000);
});

When(/^I select (.*) for golf courses$/, (countryName) => {
  cy.get(".select").select(countryName.trim());
  cy.wait(2000);
});

Then(/^I click on Search$/, () => {
  cy.xpath(
    "//html/body/main/div/main/table[1]/tbody/tr/td[1]/form/button"
  ).click();
  cy.wait(2000);
});

Then(/^I click on filter$/, () => {
  cy.xpath(
    "//html/body/main/div/main/table[1]/tbody/tr/td[2]/form/fieldset/button"
  ).click();
  cy.wait(2000);
});

/*
And(/^I validate returning correct golf course (.*)$/, (golfName) => {
  cy.xpath("//html/body/main/div/main/table[2]/tbody/tr/td[1]").should('contain', golfName);
});

And(/^I validate golf course in the country (.*)$/, (countryName) => {
  cy.xpath("//html/body/main/div/main/table[2]/tbody/tr/td[2]").should('contain', countryName);
});
*/
