import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('should adapt layout for different screen sizes', async ({ page }) => {
    // Desktop
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await expect(page.getByTestId('desktop-nav')).toBeVisible();

    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByTestId('mobile-nav')).toBeVisible();
    await expect(page.getByTestId('desktop-nav')).toBeHidden();
  });
}); 