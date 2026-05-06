import { expect, test } from "@playwright/test";

const dataForEach = [{ item: "Laptop" }, { item: "Gift Card" }];

dataForEach.forEach(({ item }) => {
  test(`Search Store ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    await expect(page.locator(".product-title a").nth(0)).toContainText(item, {
      ignoreCase: true,
    });
  });
});

console.log("------------------------------");

[{ item: "Laptop" }, { item: "Gift Card" }].forEach(({ item }) => {
  test(`Search Stores ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    await expect(page.locator(".product-title a").nth(0)).toContainText(item, {
      ignoreCase: true,
    });
  });
});
