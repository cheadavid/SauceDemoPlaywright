import { test, expect } from '../fixtures/authenticated';

test('Vérifier le tri des prix en ordre croissant', async ({ inventoryPage }) => {
  await inventoryPage.sortByPriceAscending();

  const prices = await inventoryPage.getProductPrices();
  const sortedPrices = [...prices].sort((a, b) => a - b);

  expect(prices).toEqual(sortedPrices);
});

test('Vérifier le tri des prix en ordre décroissant', async ({ inventoryPage }) => {
  await inventoryPage.sortByPriceDescending();

  const prices = await inventoryPage.getProductPrices();
  const sortedPrices = [...prices].sort((a, b) => b - a);

  expect(prices).toEqual(sortedPrices);
});