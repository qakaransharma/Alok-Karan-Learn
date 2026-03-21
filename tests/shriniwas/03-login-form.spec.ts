import { test } from "@playwright/test";

test("verify login 1", async ({ browser }) => {
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");

  // await page.locator("#user-name");

  // find element by id
  const txtUserName = page.locator("[id='user-name']");

  await txtUserName.fill("standard_user");

  await page.waitForTimeout(3000);

  // find element by id
  const txtPassword = page.locator("[id='password']");

  await txtPassword.fill("secret_sauce");

  await page.waitForTimeout(3000);

  // find element by id
  const btnLogin = page.locator("[id='login-button']");

  await btnLogin.click();
});

test("verify login 2", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // find element by id
  const txtUserName = page.locator("#user-name");

  await txtUserName.fill("standard_user");

  await page.waitForTimeout(3000);

  // find element by id
  const txtPassword = page.locator("#password");

  await txtPassword.fill("secret_sauce");

  await page.waitForTimeout(3000);

  // find element by id
  const btnLogin = page.locator("#login-button");

  await btnLogin.click();
});

test("verify login 3", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // find element by class
  const txtUserName = page.locator(".input_error").nth(0);

  await txtUserName.fill("standard_user");

  await page.waitForTimeout(3000);

  // find element by class
  const txtPassword = page.locator(".input_error").nth(1);

  await txtPassword.fill("secret_sauce");

  await page.waitForTimeout(3000);

  // find element by class
  const btnLogin = page.locator(".submit-button");

  await btnLogin.click();

  const currentUrl = page.url();

  console.log("URL: ", currentUrl);
});
