import { expect, test} from "@playwright/test";

test("verify locator by getbytext",async({page})=>{

await page.goto("https://demo.nopcommerce.com/");

const heading=page.getByText("Welcome to our store",{exact:false});

//assertion
//await expect(heading).toBeVisible();

}
)
