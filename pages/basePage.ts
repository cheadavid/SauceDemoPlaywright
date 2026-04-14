import { Page } from '@playwright/test';

export class BasePage {
  // Properties

  readonly page: Page;

  // Constructor

  constructor(page: Page) {
    this.page = page;
  }

  // Actions

  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  async fill(selector: string, value: string): Promise<void> {
    await this.page.fill(selector, value);
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  // Assertions

  async isElementVisible(selector: string): Promise<boolean> {
    return this.page.isVisible(selector);
  }

  // Getters

  async getText(selector: string): Promise<string> {
    return this.page.innerText(selector);
  }

  getCurrentUrl(): string {
    return this.page.url();
  }
}