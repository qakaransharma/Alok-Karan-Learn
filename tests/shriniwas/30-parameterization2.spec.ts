import { expect, test } from "@playwright/test";

const searchData = ["Laptop", "Gift card"];

for (const data of searchData) {
  test(`Search Store ${data}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(data);
    await page.locator("input[value='Search']").click();
    await expect(page.locator(".product-title a").nth(0)).toContainText(data, {
      ignoreCase: true,
    });
  });
}
