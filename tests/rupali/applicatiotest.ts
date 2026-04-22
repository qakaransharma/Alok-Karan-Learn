import {test} from "@playwright/test";
test("application",async())
{
   const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.google.com/");
}