import { test, expect } from '../fixtures';

const validUsers = [
  'standard_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user',
];

test.describe('Login', () => {
  for (const username of validUsers) {
    test(`connexion réussie - ${username}`, async ({ loginPage, page }) => {
      await loginPage.login(username, 'secret_sauce');

      await expect(page).toHaveURL(/inventory/);
    });
  }

  test('connexion échouée avec mauvais mot de passe', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'wrong_password');

    const isError = await loginPage.isErrorDisplayed();
    expect(isError).toBe(true);
  });
});