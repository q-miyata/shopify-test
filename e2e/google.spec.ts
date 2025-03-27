import { test, expect } from '@playwright/test';

test('Googleトップにアクセスできる', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
  //わざとエラーを起こす
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});