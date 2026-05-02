import { test } from "@playwright/test";

/* 
- Using playwright.config.ts file
- Using command line: 
npx playwright test tests/shriniwas/27-traces.spec.ts --trace on
- npx playwright test --trace on (this will generate the trace for all the test cases)
- Using traces inside the code

How to open the trace zip file

1. Open the site https://trace.playwright.dev/ and select the zip file
2. using command: npx playwright show-trace "tracezippath"
*/

test("Traces", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  //   const loc = page.locator("small-searchterms");
  //   await loc.fill("Laptop");

  await page.fill("//input[@id='small-searchterms']", "Laptop");
});

test.skip("Traces from test", async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.goto("https://demowebshop.tricentis.com/");

  //   const loc = page.locator("small-searchterms");
  //   await loc.fill("Laptop");

  await page.fill("//input[@id='small-searchterms']", "Books");

  await context.tracing.stop({ path: "trace-test.zip" });
});
