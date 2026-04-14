import { Page } from '@playwright/test';

export class BasePage {
  // Properties

  readonly page: Page;

  // Constructor

  constructor(page: Page) {
    this.page = page;
  }
}