import { test, expect } from "@playwright/test";

/*
1. Absolute xpath
2. Relative xpath

Absolute xpath: 
- The path comes from the root element to the targeted element without 
missing any elements in between
- Absolute xpath starts from "/" 
- [index] : we can provide the index also to find the element
/html/head/meta
/html/body/div[4]/div[1]/div[1]/div[3]/form/input[1]/div[4]/div[1]/div[1]/div[3]/form/input[1]

Relative Xpath:
- This xpath is specific to the target element. It uses expressions to locate web elements 
in the HTML documents.
- It uses "//" double forward slashes and "/" along with other symbols, functions, axes names
- Syntax: //tagName[@attributeName="value"]
//input[@id='small-searchterms']
//input[@name="q"]
//*[@name="q"]
//form[@method="get"]/input[1]

*/

test("Verify absolute xpath", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/tricentis");
  const search = page.locator(
    "xpath=/html/body/div[4]/div[1]/div[1]/div[3]/form/input[1]",
  );

  await search.fill("Books");
});

test("Verify relative xpath", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/tricentis");
  const search = page.locator("xpath=//input[@id='small-searchterms']");

  await search.fill("Books");
});
