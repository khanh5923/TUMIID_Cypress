Feature: Tumi Login

  Background:
    Given I am logged into Tumi with email "123@yopmail.com" and password "12345678"

  @smoke @api
  Scenario: Show welcome message after login
    When I open the user account menu
    Then I should see the welcome message

  @regression @api
  Scenario: Show logout button
    When I open the user account menu
    Then I should see the logout button
