import { expect, Page } from '@playwright/test';

export class InventoryPage {
    constructor(private page: Page) {}

    private inventoryContainer = '[data-test="inventory-container"]';
    private inventoryItems = '[data-test="inventory-item"]';
    private firstAddToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    private firstRemoveButton = '[data-test="remove-sauce-labs-backpack"]';
    private shoppingCartBadge = '[data-test="shopping-cart-badge"]';

    async verifyInventoryIsDisplayed() {
        await expect(this.page.locator(this.inventoryContainer)).toBeVisible();
    }

    async verifyProductsAreDisplayed() {
        await expect(this.page.locator(this.inventoryItems).first()).toBeVisible();
    }

    async addFirstProductToCart() {
        await this.page.locator(this.firstAddToCartButton).click();
    }

    async verifyCartBadgeShowsOneProduct() {
        await expect(this.page.locator(this.shoppingCartBadge)).toHaveText('1');
    }

    async removeFirstProductFromCart() {
        await this.page.locator(this.firstRemoveButton).click();
    }

    async verifyCartBadgeIsNotDisplayed() {
        await expect(this.page.locator(this.shoppingCartBadge)).not.toBeVisible();
    }
}