import { When, Then } from '@cucumber/cucumber';
import { CheckoutPage } from '../pages/CheckoutPage';
import checkoutData from '../data/checkout-data.json';
import { CustomWorld } from '../support/world';

let checkoutPage: CheckoutPage;

When('the user goes to the cart', async function (this: CustomWorld) {
    checkoutPage = new CheckoutPage(this.page);
    this.testLog('Going to cart');
    await checkoutPage.goToCart();
});

When('the user starts the checkout process', async function (this: CustomWorld) {
    this.testLog('Starting checkout process');
    await checkoutPage.startCheckout();
});

When('the user completes checkout information with valid data', async function (this: CustomWorld) {
    this.testLog('Completing checkout information');

    await checkoutPage.fillCheckoutInformation(
        checkoutData.validCheckoutUser.firstName,
        checkoutData.validCheckoutUser.lastName,
        checkoutData.validCheckoutUser.postalCode
);
});

When('the user continues to the checkout overview', async function (this: CustomWorld) {
    this.testLog('Continuing to checkout overview');
    await checkoutPage.continueCheckout();
});

Then('the checkout overview should be displayed', async function (this: CustomWorld) {
    this.testLog('Verifying checkout overview');
    await checkoutPage.verifyCheckoutOverviewIsDisplayed();
});

When('the user finishes the checkout', async function (this: CustomWorld) {
    this.testLog('Finishing checkout');
    await checkoutPage.finishCheckout();
});

Then('the checkout complete message should be displayed', async function (this: CustomWorld) {
    this.testLog('Verifying checkout complete message');
    await checkoutPage.verifyCheckoutIsCompleted();
});