import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import users from '../data/users.json';
import { CustomWorld } from '../support/world';

let loginPage: LoginPage;

Given('the user is on the login page', async function (this: CustomWorld) {
  loginPage = new LoginPage(this.page);
  this.testLog('Navigating to login page')
  await loginPage.navigateToLoginPage();
});

When('the user logs in with valid credentials', async function (this: CustomWorld) {
  this.currentUser = users.validUser;

  this.testLog(`Logging with user: ${this.currentUser.username}`);
  await loginPage.login(
    this.currentUser.username,
    this.currentUser.password
  );
});

When('the user logs in with invalid credentials', async function () {
  await loginPage.login(users.invalidUser.username, users.invalidUser.password);
});

Then('the inventory page should be displayed', async function (this: CustomWorld) {
  this.testLog('Verifying successful login')
  await loginPage.verifySuccessfulLogin();
});

Then('an error message should be displayed', async function () {
  await loginPage.verifyLoginErrorMessage();
});