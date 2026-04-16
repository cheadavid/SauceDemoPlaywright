import { test as base, expect } from './index';

export const test = base.extend({
  inventoryPage: async ({ loginPage, inventoryPage }, use) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.waitForPageLoad();

    await use(inventoryPage);
  },
});

export { expect };