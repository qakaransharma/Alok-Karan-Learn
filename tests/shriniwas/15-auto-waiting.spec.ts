import { test, expect, Locator } from "@playwright/test";

test("Auto Waiting", async ({ page }) => {
  await page.goto("https://www.automationexercise.com/products");

  const txtSearch = page.getByText("Cart");

  // Actions - Auto wait works for actions : default timeout : 30 sec
  await txtSearch.fill("Dress");
  await txtSearch.click({ force: true }); // It will wait for 30 sec before throwing TimeOutError

  // Assertions - Auto wait works for assertions : default timeout : 5 sec
  expect(
    page.locator('//a/img[@src="/static/images/home/logo.png"]'),
  ).toBeVisible();

  expect(
    page.locator('//a/img[@src="/static/images/home/logo.png"]'),
  ).toBeVisible();

  expect(page).toHaveTitle("Automation Exercise - All Products");
});
