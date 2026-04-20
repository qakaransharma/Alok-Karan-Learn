import { test, expect, Locator } from "@playwright/test";

// Install dev dependency using below command:
// >> npm install -D allure-playwright
// You need to set allure-playwright in playwright.config.ts file

// In order to generate allure report you need to follow below steps
// You need to install allure-commandline
// npm install -g allure-commandline

// or perform below steps

// Download the zip file of allure
// https://github.com/allure-framework/allure2/releases/tag/2.38.1
// You need to set the allure/bin folder path in ENV variable

// To generate the allure report based on the results, use below command
// >> allure generate ./allure-results -o ./allure-report --clean
// To open the generated allure report, use below command
// >> allure open ./allure-report

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
  const expectedTitle = "Reporter | Playwright";

  expect(actualTitle).toBe(expectedTitle);
});

test("Reporter Test Case 3", async ({ page }) => {
  await page.goto("https://playwright.dev/docs/test-reporters");
  await page.waitForTimeout(2000);
  const actualTitle = await page.title();
  const expectedTitle = "Reporters | Playwright";

  expect(actualTitle).toBe(expectedTitle);
});
