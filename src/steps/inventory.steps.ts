import { When, Then } from '@cucumber/cucumber';
import { InventoryPage } from '../pages/InventoryPage';
import { CustomWorld } from '../support/world';

let inventoryPage: InventoryPage;

Then('the product list should be displayed', async function (this: CustomWorld) {
    inventoryPage = new InventoryPage(this.page);
    this.testLog('Verifying product list is displayed');
    await inventoryPage.verifyProductsAreDisplayed();
});

When('the user adds the first product to the cart', async function (this: CustomWorld) {
    inventoryPage = new InventoryPage(this.page);
    this.testLog('Adding first product to cart');
    await inventoryPage.addFirstProductToCart();
});

Then('the cart badge should show one product', async function (this: CustomWorld) {
    this.testLog('Verifying cart badge shows one product');
    await inventoryPage.verifyCartBadgeShowsOneProduct();
});

When('the user removes the first product from the cart', async function (this: CustomWorld) {
    this.testLog('Removing first product from cart');
    await inventoryPage.removeFirstProductFromCart();
});

Then('the cart badge should not be displayed', async function (this: CustomWorld) {
    this.testLog('Verifying cart badge is not displayed');
    await inventoryPage.verifyCartBadgeIsNotDisplayed();
});