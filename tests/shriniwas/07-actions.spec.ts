import { test, expect } from "@playwright/test";

test("Input box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // page.locator("input[id='name']");
  const txtName = page.locator("#name");

  const isNameVisible: boolean = await txtName.isVisible();

  // Assertions
  expect(isNameVisible).toBe(true);
  expect(isNameVisible).toBeTruthy();
  expect(await txtName.isVisible()).toBeTruthy();
  expect(await txtName.isEnabled()).toBeTruthy();

  // getting the attribute value
  const txtMaxLen: string | null = await txtName.getAttribute("maxlength");

  console.log("Input attribute value is: ", txtMaxLen);
  expect(txtMaxLen).toBe("15");

  await txtName.fill("Shriniwas");

  const nameInputValue = await txtName.inputValue(); // This will give you the value present in input box
  console.log("Name Input Value:", nameInputValue);

  expect(nameInputValue).toBe("Shriniwas");
  expect(nameInputValue).toEqual("Shriniwas");

  // To Clear the value from textbox
  // await txtName.clear();
});

test.only("Radio button", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // const rdoMale = page.getByRole("radio").nth(0);
  const rdoMale = page.locator("#male");

  expect(rdoMale).toBeVisible();
  expect(rdoMale).toBeEnabled();

  expect(await rdoMale.isChecked()).toBe(false);
  expect(await rdoMale.isChecked()).toBeFalsy();

  // To check the radio button
  await rdoMale.check();
});
