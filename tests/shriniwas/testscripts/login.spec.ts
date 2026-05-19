import { expect, test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/LoginPage";

// Assertion should be added in Test files only

test("verify login", async ({ page }) => {
  // Open a browser (One page instance of a browser)
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginToApp("standard_user", "secret_sauce");

  // Assertion
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test.skip("verify login with invalid creds", async ({ page }) => {
  // Open the application
  await page.goto("https://www.saucedemo.com/");

  const loginPage = new LoginPage(page);
  await loginPage.loginToApp("standard_user", "secret_sauce");

  // Assertion
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
