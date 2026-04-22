import { test, expect, Locator } from "@playwright/test";

test("Timeouts Example 1", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/products", {
    timeout: 20_000,
  });

  // This timeout is for entire test block
  test.setTimeout(30000);
  // default timeout: 30 sec, if it doesnt find it will throw TimeoutError
  await page.locator('//a[text()=" Home"]').click({ timeout: 3_000 });

  // This is a static wait
  await page.waitForTimeout(2000);

  // Added the timeout for particular locator
  await page
    .getByPlaceholder("Search Prod", { exact: true })
    .fill("Dress", { timeout: 2000 });
});

test("Timeouts Example 2", async ({ page }) => {
  // test.setTimeout(20000);
  await page.goto("https://www.automationexercise.com/products");

  // Auto Retry Assertion: default timeout: 5 sec
  // await expect(page.locator('//a[text()=" Home12345"]')).toBeVisible();

  await expect(page.locator('//a[text()=" Home12345"]')).toBeVisible({
    timeout: 10_000,
  });
});
