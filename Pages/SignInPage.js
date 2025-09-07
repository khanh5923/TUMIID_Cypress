/// <reference types="cypress" />
require("cypress-xpath");

export class SignInPage {
    constructor() {
        this.ulr = "https://www.tumi.co.id/en/home";
        this.emailInput = "//input[@id='login-form-email']";
        this.passwordInput = `//input[@id='login-form-password']`;
        this.btnSignIn = "//button[contains(@class,'btn-signin')]";
        this.userIcon = "//div[@class='user-login t']";
        this.welcomeMessage = "//span[normalize-space()='Welcome, hi']";
        this.btnLogout = "//a[@class='btn btn-block btn-logout']";
    }

  clickIconUserLogin() {
    cy.xpath(this.userIcon).click();
  }

  enterEmail(email) {
    cy.xpath(this.emailInput).type(email, { delay: 100 });
  }

  enterPassword(password) {
    cy.xpath(this.passwordInput).type(password, { delay: 100});
  }

  clickBtnSignIn() {
    cy.xpath(this.btnSignIn).click();
  }

  goToPage() {
    cy.viewport(1366, 768);
    cy.visit(this.ulr);
  }

  SignInSuccess() {
    cy.xpath(this.welcomeMessage).should("be.visible");
  }

  verifyBtnLogout() {
    cy.xpath(this.btnLogout).should("be.visible");
  }
}
