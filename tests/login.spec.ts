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
    test(`Connexion réussie - ${username}`, async ({ loginPage, inventoryPage }) => {
      await loginPage.login(username, 'secret_sauce');

      await inventoryPage.waitForPageLoad();
    });
  }

  test('Connexion échouée avec mauvais mot de passe', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'wrong_password');

    const isError = await loginPage.isErrorDisplayed();
    expect(isError).toBe(true);
  });
});