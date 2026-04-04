import { test, expect, Locator } from "@playwright/test";

test("Input box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const ddlCountry = await page.locator("#country");

  await ddlCountry.selectOption("Canada"); // Visible Text
  await ddlCountry.selectOption({ value: "india" }); // By Value
  await ddlCountry.selectOption({ label: "Australia" }); // By Label
  await ddlCountry.selectOption({ index: 4 }); // By Index: Starting from 0th index

  // Count the options available in the dropdown
  //select[@id="country"]/option

  const ddlOptions = page.locator("#country > option");

  await expect(ddlOptions.count()).toBe(10);
});
