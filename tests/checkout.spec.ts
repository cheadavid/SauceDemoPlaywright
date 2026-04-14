import { test, expect } from '../fixtures';

test.describe('Checkout', () => {
  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.waitForPageLoad();
  });

  test("Processus d'achat complet", async ({ inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage, checkoutCompletePage }) => {
    await test.step('Ajouter un produit au panier', async () => {
      await inventoryPage.addProductToCart('Sauce Labs Backpack');

      expect(await inventoryPage.isCartBadgeVisible()).toBe(true);
    });

    await test.step('Naviguer vers le panier', async () => {
      await inventoryPage.clickCart();

      await cartPage.waitForPageLoad();
    });

    await test.step('Vérifier le contenu du panier', async () => {
      expect(await cartPage.isProductInCart('Sauce Labs Backpack')).toBe(true);

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
      expect(await checkoutCompletePage.isOrderConfirmed()).toBe(true);
    });
  });
});