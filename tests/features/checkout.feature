Feature: Checkout

    As a logged in user
    I want to complete the checkout process
    So that I can buy products successfully

    Background:
        Given the user is on the login page
        When the user logs in with valid credentials
        Then the inventory page should be displayed
        When the user adds the first product to the cart

    Scenario: Complete checkout successfully
        When the user goes to the cart
        And the user starts the checkout process
        And the user completes checkout information with valid data
        And the user continues to the checkout overview
        Then the checkout overview should be displayed
        When the user finishes the checkout
        Then the checkout complete message should be displayed