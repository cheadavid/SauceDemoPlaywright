import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutCompletePage extends BasePage {
  // Locators

  private readonly completeHeader: Locator;

  // Constructor

  constructor(page: Page) {
    super(page);

    this.completeHeader = this.page.getByTestId('complete-header');
  }

  // Actions

  async waitForPageLoad(): Promise<void> {
    await this.waitForUrl('/checkout-complete.html');
  }

  // Assertions

  async isOrderConfirmed(): Promise<boolean> {
    return this.completeHeader.isVisible();
  }
}