import { test, expect } from '../fixtures';

test.describe('Login', () => {
  test('connexion réussie avec identifiants valides', async ({ loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  });

  test('connexion échouée avec mauvais mot de passe', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'wrong_password');

    const isError = await loginPage.isErrorDisplayed();
    expect(isError).toBe(true);
  });
});