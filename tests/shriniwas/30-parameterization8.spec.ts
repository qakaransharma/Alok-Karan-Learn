import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

const records: any = parse(
  fs.readFileSync(path.join(__dirname, "../test-data/csv-data.csv")),
  {
    columns: true,
    skip_empty_lines: true,
  },
);

for (const record of records) {
  const { username, password, validity } = record;
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
