import { test, expect } from '@playwright/test';

test.describe('Profile Switching', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should switch between profiles and update content', async ({ page }) => {
    // Referência ao frontend profile
    // startLine: 1
    // endLine: 80
    await test.step('Frontend Profile', async () => {
      await page.getByRole('button', { name: 'Frontend' }).click();
      await expect(page.getByText('React.js')).toBeVisible();
      await expect(page.getByText('Next.js')).toBeVisible();
      await expect(page.getByText('TailwindCSS')).toBeVisible();
    });

    // Referência ao backend profile
    // startLine: 1
    // endLine: 65
    await test.step('Backend Profile', async () => {
      await page.getByRole('button', { name: 'Backend' }).click();
      await expect(page.getByText('Node.js')).toBeVisible();
      await expect(page.getByText('PostgreSQL')).toBeVisible();
      await expect(page.getByText('Express.js')).toBeVisible();
    });
  });
}); 