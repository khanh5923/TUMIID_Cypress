/// <reference types="cypress" />

export class ApiClient {

  Get(url: string) {
    return cy.request("GET", url).then((resp) => {
      return resp;
    });
  }

  Post(url: string, body: object) {
    return cy.request("POST", url, body).then((resp) => {
      return resp;
    });
  }

  Put(url: string, body: object) {
    return cy.request("PUT", url, body).then((resp) => {
      return resp;
    });
  }

  Patch(url: string, body: object) {
    return cy.request("PATCH", url, body).then((resp) => {
      return resp;
    });
  }

  Delete(url: string) {
    return cy.request("DELETE", url).then((resp) => {
      return resp;
    });
  }
}
