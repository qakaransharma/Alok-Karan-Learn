import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('shriniwasa');
  await page.locator('#loginpassword').fill('shri@143');
  await page.getByRole('button', { name: 'Log in' }).click();
});