import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutStepOnePage extends BasePage {
  // Locators

  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly zipCodeInput: Locator;
  private readonly continueButton: Locator;

  // Constructor

  constructor(page: Page) {
    super(page);

    this.firstNameInput = this.page.getByPlaceholder('First Name');
    this.lastNameInput = this.page.getByPlaceholder('Last Name');
    this.zipCodeInput = this.page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = this.page.getByRole('button', { name: 'Continue' });
  }

  // Actions

  async waitForPageLoad(): Promise<void> {
    await this.waitForUrl('/checkout-step-one.html');
  }

  async fillShippingInfo(firstName: string, lastName: string, zipCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zipCode);
  }

  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }

  async submitShippingInfo(firstName: string, lastName: string, zipCode: string): Promise<void> {
    await this.fillShippingInfo(firstName, lastName, zipCode);
    await this.clickContinue();
  }
}