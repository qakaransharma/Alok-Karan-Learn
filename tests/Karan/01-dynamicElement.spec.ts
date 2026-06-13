import {test, expect} from '@playwright/test';
test("Verify dropdown", async({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");
     const ddlCountry = page.locator("#country");
     await ddlCountry.selectOption("United Kingdom");
   
    //await countryDropdown.selectOption({label: "United States"});
});

test("Verify dropdown1", async({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");
     const ddlCountry = page.locator("#country");
     await ddlCountry.selectOption("India");
   
    //await countryDropdown.selectOption({label: "United States"});
})