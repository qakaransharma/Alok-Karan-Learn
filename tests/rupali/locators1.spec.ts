import { expect, test} from "@playwright/test";

test("verify locator by getbytext",async({page})=>{

await page.goto("https://demo.nopcommerce.com/");

const heading=page.getByText("Welcome to our store",{exact:true});

//assertion
await expect(heading).toBeVisible();

}
);

test("verify label", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");

    const register=page.locator("xpath=//a[text()='Register']");
    await page.waitForTimeout(5000);
    await register.click();
    await page.waitForTimeout(5000);
    


})
