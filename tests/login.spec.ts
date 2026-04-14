import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login', () => {
  test('connexion réussie avec identifiants valides', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  });

  test('connexion échouée avec mauvais mot de passe', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await loginPage.login('standard_user', 'wrong_password');

    const isError = await loginPage.isErrorDisplayed();

    expect(isError).toBe(true);
  });
});