import { expect, test } from "@playwright/test";

test("verify login", async ({ page }) => {
  // Open the application
  await page.goto("https://www.saucedemo.com/");

  // Enter user name and password
  const txtUserName = page.locator("#user-name");
  await txtUserName.fill("standard_user");

  const txtPassword = page.locator("#password");
  await txtPassword.fill("secret_sauce");

  // Click on Login button
  const btnLogin = page.locator("#login-button");
  await btnLogin.click();

  // Assertion
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("verify login with invalid creds", async ({ page }) => {
  // Open the application
  await page.goto("https://www.saucedemo.com/");

  // Enter user name and password
  const txtUserName = page.locator("#user-name");
  await txtUserName.fill("standard_user");

  const txtPassword = page.locator("#password");
  await txtPassword.fill("secret_sauce123");

  // Click on Login button
  const btnLogin = page.locator("#login-button");
  await btnLogin.click();

  // Assertion
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
