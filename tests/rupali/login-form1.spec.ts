import {test} from "@playwright/test";

test("verify login",async({browser})=>
{
const context=await browser.newContext();

const page=await context.newPage()

await page.goto("https://www.saucedemo.com/");

const txtusername=page.locator("[id='user-name']");
await txtusername.fill("standard_user");

const txtpassword=page.locator("[name='password']");
await txtpassword.fill("secret_sauce");

const btnlogin=page.locator("[type='submit']");
await btnlogin.click();


}
)
