import {test, expect} from '@playwright/test';

test("Verify iframes in demosite", async({page})=> {
    await page.goto("https://app-qa.sling-dev.com/signIn");
await page.locator('[id="input_email"]').fill("akash7@yopmail.com");
await page.locator('[id="input_password"]').fill("Abc@12345");
await page.locator('[id="loginBtn"]').click();

const leftNavigationBar = await page.locator('#salesNavbar li[data-original-title="Leads"]').click();
//await page.locator("#salesNavbar").filter({ hasText: 'Leads' }).click();
await page.getByRole('button', { name: 'Add' }).click();
await page.locator('[id="0_13_input_lastName"]').fill("akash 02");
//finds page locator, performs click. Saves leads resulting from the action
const saveLeads = await await page.locator("//button[@type='submit']").click();
await page.waitForTimeout(6000);
});
