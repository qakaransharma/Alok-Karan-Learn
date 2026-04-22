import { test, expect, Locator } from "@playwright/test";

// Types of Assertions
// 1. Hard Assertion
// 2. Soft Assertion

test("Hard Assertion", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/products");
  await expect(page.locator('//a[text()=" Home12345"]')).toBeVisible();
  await expect(page).toHaveTitle("Automation Exercise - All Products");
});

test("Soft Assertion", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/products");
  // Soft Assertion
  await expect.soft(page.locator('//a[text()=" Home12345"]')).toBeVisible();
  await expect.soft(page).toHaveTitle("Automation Exercise - All Products");
});
