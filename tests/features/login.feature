Feature: Login

  As a user
  I want to log into the application
  So that I can access the product inventory

  Scenario: Successful login with valid credentials
    Given the user is on the login page
    When the user logs in with valid credentials
    Then the inventory page should be displayed

  Scenario: Failed login with invalid credentials
    Given the user is on the login page
    When the user logs in with invalid credentials
    Then an error message should be displayed