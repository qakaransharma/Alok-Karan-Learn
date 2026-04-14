import { test, expect, Locator } from "@playwright/test";

test("Press ENTER key", async ({ page }) => {
  await page.goto("https://www.facebook.com/");

  const txtEmail = await page.locator('[name="email]');

  await txtEmail
});
