import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutStepTwoPage extends BasePage {
  // Locators

  private readonly finishButton: Locator;

  // Constructor

  constructor(page: Page) {
    super(page);

    this.finishButton = this.page.getByRole('button', { name: 'Finish' });
  }

  // Actions

  async clickFinish(): Promise<void> {
    await this.finishButton.click();
  }
}