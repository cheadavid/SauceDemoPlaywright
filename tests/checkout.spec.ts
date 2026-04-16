import { test, expect } from '../fixtures/authenticated';

test("Processus d'achat complet", async ({ inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
  await test.step('Ajouter un produit au panier', async () => {
    await inventoryPage.addProductToCart('Sauce Labs Backpack');

    const isCartBadgeVisible = await inventoryPage.isCartBadgeVisible();
    expect(isCartBadgeVisible).toBe(true);
  });

  await test.step('Naviguer vers le panier', async () => {
    await inventoryPage.clickCart();
    await cartPage.waitForPageLoad();
  });

  await test.step('Vérifier le contenu du panier', async () => {
    const isProductInCart = await cartPage.isProductInCart('Sauce Labs Backpack');
    expect(isProductInCart).toBe(true);
  });

  await test.step('Passer à l’étape checkout', async () => {
    await cartPage.clickCheckout();
    await checkoutStepOnePage.waitForPageLoad();
  });

  await test.step('Remplir les informations de livraison', async () => {
    await checkoutStepOnePage.submitShippingInfo('John', 'Doe', '75001');
    await checkoutStepTwoPage.waitForPageLoad();
  });

  await test.step('Confirmer la commande', async () => {
    await checkoutStepTwoPage.clickFinish();
    await checkoutCompletePage.waitForPageLoad();
  });

  await test.step('Vérifier la page de confirmation', async () => {
    const isOrderConfirmed = await checkoutCompletePage.isOrderConfirmed();
    expect(isOrderConfirmed).toBe(true);
  });
});