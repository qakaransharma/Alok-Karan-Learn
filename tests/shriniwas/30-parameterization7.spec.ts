import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

// UTF-8 : Unicode tranformation format

// D:\playwright1-jan-2026\tests\shriniwas\test-data\data.json
// console.log(path.join(__dirname));

const jsonPath = path.join(__dirname, "../test-data/data.json");

const loginData: any = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

// loginData.forEach(({ username, password, validity }: any) => {
//   test(`Login scenarios ${username}`, async ({ page }) => {
//     //valid: standard_user, secret_sauce
//     //invalid: locked_out_user, secret_sauce
//     await page.goto("https://www.saucedemo.com/");
//     await page.locator("#user-name").fill(username);
//     await page.locator("#password").fill(password);
//     await page.locator("#login-button").click();

//     if (validity === "valid") {
//       // Assertion for valid data
//       await expect(page.getByText("Products")).toBeVisible();
//     }
//     if (validity === "invalid") {
//       // Assertion for invalid data
//       await expect(page.locator("//h3[@data-test='error']")).toBeVisible();

//     }
//   });
// });

for (const data of loginData) {
  const { username, password, validity } = data;

  test(`Login scenarios ${username}`, async ({ page }) => {
    //valid: standard_user, secret_sauce
    //invalid: locked_out_user, secret_sauce
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill(username);
    await page.locator("#password").fill(password);
    await page.locator("#login-button").click();
    if (validity === "valid") {
      // Assertion for valid data
      await expect(page.getByText("Products")).toBeVisible();
    }
    if (validity === "invalid") {
      // Assertion for invalid data
      await expect(page.locator("//h3[@data-test='error']")).toBeVisible();
    }
  });
}
