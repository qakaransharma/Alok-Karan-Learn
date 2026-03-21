import { test } from "@playwright/test";

test("Browser Navigations", async ({ browser }) => {
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("http://www.google.com");

  await page.goto("http://www.facebook.com");

  // To go back
  await page.goBack();

  console.log("Google Title: ", await page.title());

  // To go forward
  await page.goForward();

  console.log("Facebook Title: ", await page.title());

  // To reload the page
  await page.reload();
});
