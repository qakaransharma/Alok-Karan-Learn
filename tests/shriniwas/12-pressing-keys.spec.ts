import { test, expect, Locator } from "@playwright/test";

// `F1` - `F12`, `Digit0`- `Digit9`, `KeyA`- `KeyZ`, `Backquote`, `Minus`, `Equal`, `Backslash`, `Backspace`, `Tab`,
// `Delete`, `Escape`, `ArrowDown`, `End`, `Enter`, `Home`, `Insert`, `PageDown`, `PageUp`, `ArrowRight`, `ArrowUp`,
test.skip("Press ENTER key", async ({ page }) => {
  await page.goto("https://www.facebook.com/");

  const txtEmail = page.locator('[name="email"]');

  await txtEmail.press("Enter");

  const txtError = await page
    .locator(
      "//form[@id='login_form']//span[contains(text(), 'The email address')]",
    )
    .innerText();

  console.log("Error Message: ", txtError);

  expect(txtError).toContain(
    "The email address or mobile number you entered isn't connected to an account. Find your account and log in.",
  );
});

test("Press keys", async ({ page }) => {
  await page.goto("https://www.facebook.com/");

  const txtEmail = page.locator('[name="email"]');

  // await page.fill('[name="email"]', "shriniwasalle@gmail.com");
  await txtEmail.fill("shriniwasalle@gmail.com");

  await txtEmail.press("Control+A");

  await txtEmail.press("Backspace");
});
