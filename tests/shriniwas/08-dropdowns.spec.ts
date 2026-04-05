import { test, expect, Locator } from "@playwright/test";

test("Dropdown Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const ddlCountry = await page.locator("#country");

  await ddlCountry.selectOption("Canada"); // Visible Text
  await ddlCountry.selectOption({ value: "india" }); // By Value
  await ddlCountry.selectOption({ label: "Australia" }); // By Label
  await ddlCountry.selectOption({ index: 4 }); // By Index: Starting from 0th index

  // Count the options available in the dropdown
  //select[@id="country"]/option

  const ddlOptions = page.locator("#country > option");

  // To check the count of options
  await expect(ddlOptions).toHaveCount(10);

  // To check if the option is present in the dropdown
  const textOptions: string[] = await ddlOptions.allTextContents();

  const textOptionsWithoutSpaces = textOptions.map((text) => text.trim());

  console.log(textOptionsWithoutSpaces);

  expect(textOptionsWithoutSpaces).toContain("China");

  // To print all the texts from the option element
  for (const textOption of textOptionsWithoutSpaces) {
    console.log(textOption);
  }
});

test("Multiple Selection Dropdown Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const ddlColors = await page.locator("#colors");
  // await ddlColors.selectOption(["Red", "Blue", "Green"]); // Visible text
  await ddlColors.selectOption([
    { label: "Red" },
    { label: "Blue" },
    { label: "Green" },
  ]);

  await page.waitForTimeout(2000);
  // await ddlColors.selectOption([{ value: "blue" }]);
  // await ddlColors.selectOption([{ index: 0 }, { index: 1 }, { index: 2 }]);
  // await ddlColors.selectOption([]);

  // await page.locator("#colors > option:nth-child(1)").click();
});

test("Verify Duplicate Values", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const ddlColors = await page.locator("#colors > option");

  const textOptions = await ddlColors.allTextContents();
  console.log(textOptions);

  const textOptionsWithoutSpaces: string[] = textOptions.map((text) =>
    text.trim(),
  );
  console.log(textOptionsWithoutSpaces);

  const withoutDuplicates = new Set<string>();
  const duplicatesArray: string[] = [];

  // Set-> withoutDuplicates : {Red, Blue, Green, Yellow, White}
  // duplicatesArray -> [Red, Green]
  for (const textOption of textOptionsWithoutSpaces) {
    if (withoutDuplicates.has(textOption)) {
      duplicatesArray.push(textOption);
    } else {
      withoutDuplicates.add(textOption);
    }
  }

  console.log("withoutDuplicates: ", withoutDuplicates);
  console.log("duplicatesArray: ", duplicatesArray);

  expect(duplicatesArray.length).toBeGreaterThan(0);
  // expect(duplicatesArray.length).not.toBeGreaterThan(0);
});
