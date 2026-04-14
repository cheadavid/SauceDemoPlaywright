import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class InventoryPage extends BasePage {
  // Locators

  private readonly cartLink: Locator;

  // Constructor

  constructor(page: Page) {
    super(page);

    this.cartLink = this.page.getByTestId('shopping-cart-link');
  }
}