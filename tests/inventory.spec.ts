import { test, expect } from '../fixtures';

test.describe('Inventory Sort', () => {
  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.waitForPageLoad();
  });

  test('Vérifier le tri des prix en ordre croissant', async ({ inventoryPage }) => {
    await test.step('Choisir le tri croissant', async () => {
      await inventoryPage.sortByPriceAscending();
    });

    await test.step('Vérifier que les prix sont triés du plus petit au plus grand', async () => {
      const prices = await inventoryPage.getProductPrices();
      const sortedPrices = [...prices].sort((a, b) => a - b);

      expect(prices).toEqual(sortedPrices);
    });
  });

  test('Vérifier le tri des prix en ordre décroissant', async ({ inventoryPage }) => {
    await test.step('Choisir le tri décroissant', async () => {
      await inventoryPage.sortByPriceDescending();
    });

    await test.step('Vérifier que les prix sont triés du plus grand au plus petit', async () => {
      const prices = await inventoryPage.getProductPrices();
      const sortedPrices = [...prices].sort((a, b) => b - a);

      expect(prices).toEqual(sortedPrices);
    });
  });
});