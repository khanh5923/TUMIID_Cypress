import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { SignInPage } from "../../../../Pages/SignInPage"; // ensure .js extension

const signInPage = new SignInPage();

Given(
  "I am logged into Tumi with email {string} and password {string}",
  (email, password) => {
    cy.session([email, password], () => {
      signInPage.goToPage();
      signInPage.clickIconUserLogin();
      signInPage.enterEmail(email);
      signInPage.enterPassword(password);
      signInPage.clickBtnSignIn();
      signInPage.SignInSuccess();
    });
  }
);

When("I open the user account menu", () => {
  signInPage.goToPage();
  cy.xpath("//div[@class='user-account']").click();
});

Then("I should see the welcome message", () => {
  signInPage.SignInSuccess();
});

Then("I should see the logout button", () => {
  signInPage.verifyBtnLogout();
});
