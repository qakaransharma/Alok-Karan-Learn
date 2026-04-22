import {test} from "@playwright/test";

test("navigate two browser",async({browser})=>
{
const context=await browser.newContext();

const page=await context.newPage();

await page.goto("https://www.google.com/");
console.log("google title=",await page.title());

await page.waitForTimeout(5000);

await page.goto("https://www.facebook.com/");
console.log("facebook title=",await page.title());

await page.waitForTimeout(5000);


//to go back
//await page.goBack();
//console.log("google title=",await page.title());


//to go forward
//await page.goForward();
//console.log("facebook title=", await page.title());

//reloard page
//await page.reload();



}
)

