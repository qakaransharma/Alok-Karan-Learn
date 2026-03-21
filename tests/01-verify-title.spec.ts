import { test, expect } from "@playwright/test";

// headless: we can't see the browser
// headed: we can see the browser
test("verify title", async ({ browser }) => {
  // Step1  -> await click()
  // Step2 ->  await fill()
  // Step3 ->  await click()

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.waitForTimeout(2000); // wait for 2 sec

  // Open Google.com website
  await page.goto("https://www.google.com/");

  await page.waitForTimeout(5000); // wait for 5 sec

  // Fetch the title
  const actualTitle = await page.title();

  // Print it on console
  console.log(`Google Title is : ${actualTitle}`);

  const expectedTitle = "Google";

  //   if (actualTitle === expectedTitle) {
  //     console.log("Title matched");
  //   } else {
  //     console.log("Title mis-matched");
  //   }

  // Assertion
  expect(actualTitle).toBe(expectedTitle);
});
