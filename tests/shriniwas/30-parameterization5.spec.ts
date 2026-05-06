import { expect, test } from "@playwright/test";

// Before Each -> Laptop Search Test -> After Each
// Before Each -> Gift Card Search Test -> After Each

test.beforeEach(async () => {
  console.log("Inside Before Each");
});

test.afterEach(async () => {
  console.log("Inside After Each");
});

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
