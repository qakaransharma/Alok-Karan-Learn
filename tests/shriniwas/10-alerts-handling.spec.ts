import { test, expect, Locator } from "@playwright/test";

// Press ctrl + k and 0: It will fold all the test cases

test("Alert Box", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // page.on('dialog') listener must handle the dialog. Otherwise your action will stall,
  // be it locator.click() or something else. That's because dialogs in Web are modals
  // and therefore block further page execution until they are handled.

  // Event Handling Code
  page.on("dialog", (dialog) => {
    // type() will help us to identify which type of dialog it is
    console.log("Type of Dialog: ", dialog.type());
    // It will click on OK button on alert box
    dialog.accept();

    // It will click on CANCEL button on alert box
    // dialog.dismiss();
  });

  await page.waitForTimeout(2000);

  const btnAlert = page.getByText("Click for JS Alert");
  await btnAlert.click();

  await page.waitForTimeout(2000);
});

test("Confirm Box", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // Event Handling Code
  page.on("dialog", (dialog) => {
    console.log("Type of Dialog: ", dialog.type());

    // To get the text present on the confirm box
    const confirmText = dialog.message();
    console.log("Confirm Box Text: ", confirmText);

    expect(confirmText).toEqual("I am a JS Confirm");

    dialog.dismiss();
  });

  await page.waitForTimeout(2000);

  const btnAlert = page.getByText("Click for JS Confirm");
  await btnAlert.click();

  await page.waitForTimeout(2000);
});

test("Prompt Box", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

  // Event Handling Code
  page.on("dialog", (dialog) => {
    console.log("Prompt Text: ", dialog.message());

    dialog.accept("India");

    console.log("Type of Dialog: ", dialog.type());

    expect(dialog.type()).toEqual("prompt");
    expect(dialog.message()).toContain("I am a JS prompt");
  });

  await page.waitForTimeout(2000);

  const btnAlert = page.getByText("Click for JS Prompt");
  await btnAlert.click();

  await page.waitForTimeout(2000);
});
