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

// and 
//input[@id='small-searchterms'][@value='Search store']
//input[@id='small-searchterms' and @value='Search store']

// or
// input[@id='small-searchterms123' or @value='Search store']

// Methods
// 1. text()
//a[text()="Register"]
// <h1>This is Heading</h1>

// 2. normalize-space(): It will find the element by removing the spaces in text
//a[normalize-space(text())="Register"]

// 3. contains()
//span[contains(text(), "Shopping")]
//div[contains(@id, "flyout")]
// <a>Click on Google</a>
// <a>Clicking Google Link</a>
// <a>Google</a>

// 4. starts-with()
// <a data-testid="ABC123">Shri123</a>
// <a data-testid="ABC789">Shri456</a>
// <a data-testid="ABC456">Shri897</a>
//a[starts-with(text(), "Shri")]
//a[starts-with(@data-testid, "ABC")]

// 5. position()
// //ul[@class='top-menu']/li[position()=1]

// 6. last()
//ul[@class='top-menu']/li[last()]

// -------------- XPATH AXES -----------
// child, parent, following-sibling, preceding-sibling
// descendant, descendant-or-self
// ancestor, ancestor-or-self

// Syntax: //tagName[@attributeName="value"]/xpathAxes::tagName[@attributeName="value"]
/*
<div>
  <div>
    <input>
      <a href=""> </a>
      <img href=""> </img>
      <div href=""> </div>
    </input>
  </div>
  <div>
    <input> </input>
  </div>
  <div>
    <input> </input>
  </div>
</div>

Child: //div[@class="header-menu"]/child::ul[@class="top-menu"]
Parent: //div[@id="mob-menu-button"]/parent::div
//div[@id="mob-menu-button"]/../../.. 
Use /.. to go one step back from the current element



*/




