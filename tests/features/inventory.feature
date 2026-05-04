Feature: Inventory

  As a logged in user
  I want to interact with products
  So that I can manage my shopping cart

  Background:
    Given the user is on the login page
    When the user logs in with valid credentials
    Then the inventory page should be displayed

  Scenario: Products are displayed in the inventory page
    Then the product list should be displayed

  Scenario: Add one product to the cart
    When the user adds the first product to the cart
    Then the cart badge should show one product

  Scenario: Remove one product from the cart
    When the user adds the first product to the cart
    And the user removes the first product from the cart
    Then the cart badge should not be displayed