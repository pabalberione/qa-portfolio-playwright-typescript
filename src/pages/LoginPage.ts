import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private usernameInput = '[data-test="username"]';
  private passwordInput = '[data-test="password"]';
  private loginButton = '[data-test="login-button"]';
  private errorMessage = '[data-test="error"]';

  async navigateToLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async verifySuccessfulLogin() {
    await expect(this.page).toHaveURL(/inventory.html/);
  }

  async verifyLoginErrorMessage() {
    await expect(this.page.locator(this.errorMessage)).toBeVisible();
  }
}