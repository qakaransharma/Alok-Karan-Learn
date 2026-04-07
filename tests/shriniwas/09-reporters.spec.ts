import { test, expect, Locator } from "@playwright/test";

test("Reporter Test Case 1", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/test-reporters");
  await page.waitForTimeout(2000);
  const actualTitle = await page.title();
  const expectedTitle = "Reporters | Playwright";

  expect(actualTitle).toBe(expectedTitle);
});

test("Reporter Test Case 2", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/test-reporters");
  await page.waitForTimeout(2000);
  const actualTitle = await page.title();
  const expectedTitle = "Reporters | Playwright";

  expect(actualTitle).toBe(expectedTitle);
});

test("Reporter Test Case 3", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/test-reporters");
  await page.waitForTimeout(2000);
  const actualTitle = await page.title();
  const expectedTitle = "Reporters | Playwright";

  expect(actualTitle).toBe(expectedTitle);
});
