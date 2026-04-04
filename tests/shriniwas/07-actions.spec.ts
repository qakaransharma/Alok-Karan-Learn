import { test, expect, Locator } from "@playwright/test";

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
  expect(await rdoMale.isChecked()).toBe(true);
  expect(await rdoMale.isChecked()).toBeTruthy();
});

test("Checkbox Actions 1", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const chkSunday = page.getByLabel("Sunday");
  await chkSunday.check(); // click on Sunday checkbox

  await expect(chkSunday).toBeChecked();
  // await expect(chkSunday).not.toBeChecked(); // To verify checkbox not to be checked

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const checkBoxes: Locator[] = days.map((label) => page.getByLabel(label));

  expect(checkBoxes.length).toBe(7); // To verify the count of days

  // Select all the checkboxes and assert if they are checked or not
  for (const checkbox of checkBoxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  // Uncheck all the checkboxes
  // for (const checkbox of checkBoxes) {
  //   await checkbox.uncheck();
  //   await expect(checkbox).not.toBeChecked();
  // }

  // Uncheck last 4 checkboxes
  for (const checkbox of checkBoxes.slice(-4)) {
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }

  for (const checkBox of checkBoxes) {
    if (await checkBox.isChecked()) {
      await checkBox.uncheck();
      await expect(checkBox).not.toBeChecked();
    } else {
      await checkBox.check();
      await expect(checkBox).toBeChecked();
    }
  }
});

test("Checkbox Actions 2", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const checkBoxes: Locator[] = days.map((label) => page.getByLabel(label));

  const indexes: number[] = [1, 4, 6];

  for (const index of indexes) {
    await checkBoxes[index].check();
    await expect(checkBoxes[index]).toBeChecked();
  }
});
