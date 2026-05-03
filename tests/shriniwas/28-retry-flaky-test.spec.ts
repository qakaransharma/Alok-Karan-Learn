// login_test: passed -> failed -> passed -> failed : flaky test
// register_test : failed -> failed -> failed : code problem

import { expect, test } from "@playwright/test";

test("Handle Flaky Test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.waitForTimeout(3000);

  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("shriniwasa");
  await page.locator("#loginpassword").fill("shri@143");
  await page.getByRole("button", { name: "Log in" }).click();
  await page.waitForTimeout(10000);

  // Assertion
  expect(page.getByRole("link", { name: "Welcome shriniwasa" })).toContainText(
    "shriniwasa",
  );
});
