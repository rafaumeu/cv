import { test, expect } from '@playwright/test';

test.describe('Internationalization', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should switch between languages and update content', async ({ page }) => {
    // Referência às traduções PT-BR
    // startLine: 1
    // endLine: 163
    await test.step('Portuguese Content', async () => {
      await page.getByRole('button', { name: 'PT-BR' }).click();
      await expect(page.getByText('Perfil Profissional')).toBeVisible();
      await expect(page.getByText('Experiência Profissional')).toBeVisible();
      await expect(page.getByText('Habilidades Técnicas')).toBeVisible();
    });

    // Referência às traduções EN-US
    // startLine: 1
    // endLine: 146
    await test.step('English Content', async () => {
      await page.getByRole('button', { name: 'EN-US' }).click();
      await expect(page.getByText('Professional Profile')).toBeVisible();
      await expect(page.getByText('Professional Experience')).toBeVisible();
      await expect(page.getByText('Technical Skills')).toBeVisible();
    });
  });
}); 