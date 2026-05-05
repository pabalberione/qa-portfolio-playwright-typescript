import { expect, Page } from "@playwright/test";

export class CheckoutPage {
  constructor(private page: Page) {}

  private shoppingCartLink = '[data-test="shopping-cart-link"]';
  private checkoutButton = '[data-test="checkout"]';
  private firstNameInput = '[data-test="firstName"]';
  private lastNameInput = '[data-test="lastName"]';
  private postalCodeInput = '[data-test="postalCode"]';
  private continueButton = '[data-test="continue"]';
  private finishButton = '[data-test="finish"]';
  private checkoutOverview = '[data-test="checkout-summary-container"]';
  private completeHeader = '[data-test="complete-header"]';

  async goToCart() {
    await this.page.locator(this.shoppingCartLink).click();
  }

  async startCheckout() {
    await this.page.locator(this.checkoutButton).click();
  }

  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.postalCodeInput).fill(postalCode);
  }

  async continueCheckout() {
    await this.page.locator(this.continueButton).click();
  }

  async verifyCheckoutOverviewIsDisplayed() {
    await expect(this.page.locator(this.checkoutOverview)).toBeVisible();
  }

  async finishCheckout() {
    await this.page.locator(this.finishButton).click();
  }

  async verifyCheckoutIsCompleted() {
    await expect(this.page.locator(this.completeHeader)).toHaveText(
      "Thank you for your order!",
    );
  }
}
