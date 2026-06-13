import {test, expect} from '@playwright/test';
test("Verify dropdown3", async({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");
     const ddlCountry = page.locator("#country");
     await ddlCountry.selectOption("United Kingdom");
   
    //await countryDropdown.selectOption({label: "United States"});
});

test("Verify dropdown4", async({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");
     const ddlCountry = page.locator("#country");
     await ddlCountry.selectOption("SriLanka");
   
    //await countryDropdown.selectOption({label: "United States"});
})