import { expect, test } from "@playwright/test";

test.describe.skip("Describe Block", async () => {
  test("Test1", async () => {
    console.log("Inside Test1");
  });

  test("Test2", async () => {
    console.log("Inside Test2");
  });
});

const dataForEach = [{ item: "Laptop" }, { item: "Gift Card" }];

dataForEach.forEach(({ item }) => {
  test.describe("Describe Block", async () => {
    
    test.beforeEach(async () => {
      console.log("Inside Before Each");
    });

    test(`Search Store ${item}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/");
      await page.locator("#small-searchterms").fill(item);
      await page.locator("input[value='Search']").click();
      await expect(page.locator(".product-title a").nth(0)).toContainText(
        item,
        {
          ignoreCase: true,
        },
      );
    });
  });
});
