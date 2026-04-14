import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class InventoryPage extends BasePage {
  // Locators

  private readonly cartLink: Locator;
  private readonly cartBadge: Locator;

  // Constructor

  constructor(page: Page) {
    super(page);

    this.cartLink = this.page.getByTestId('shopping-cart-link');
    this.cartBadge = this.page.getByTestId('shopping-cart-badge');
  }

  // Actions

  async waitForPageLoad(): Promise<void> {
    await this.waitForUrl('/inventory.html');
  }

  async addProductToCart(productName: string): Promise<void> {
    const testId = `add-to-cart-${productName.toLowerCase().replace(/\s+/g, '-')}`;

    await this.page.getByTestId(testId).click();
  }

  async clickCart(): Promise<void> {
    await this.cartLink.click();
  }

  // Assertions

  async isCartBadgeVisible(): Promise<boolean> {
    return this.cartBadge.isVisible();
  }
}