import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CartPage extends BasePage {
  // Locators

  private readonly checkoutButton: Locator;

  // Constructor

  constructor(page: Page) {
    super(page);

    this.checkoutButton = this.page.getByRole('button', { name: 'Checkout' });
  }

  // Actions

  async waitForPageLoad(): Promise<void> {
    await this.waitForUrl('/cart.html');
  }

  async clickCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }

  // Assertions

  async isProductInCart(productName: string): Promise<boolean> {
    return this.page
      .getByTestId('inventory-item-name')
      .filter({ hasText: productName })
      .isVisible();
  }
}