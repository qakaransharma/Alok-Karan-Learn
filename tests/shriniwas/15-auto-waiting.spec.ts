import { test, expect, Locator } from "@playwright/test";

test("Auto Waiting", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/products");

  // Auto Retry assertion: default timeout: 5 sec
  await expect(page).toHaveTitle("Automation Exercise - All Products");

  // Auto Retry Assertion: default timeout: 5 sec
  await expect(page.locator('//a[text()=" Home"]')).toBeVisible();

  // Auto Retry Actions: default timeout: 30 sec, if it doesnt find it will throw TimeoutError
  await page.locator('//a[text()=" Home"]').click();
  await page.getByPlaceholder("Search Product").fill("Dress");
});
