import { test, expect, Locator } from "@playwright/test";

test("Right Click Action", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  const btnRightClick = page.locator("//span[text()='right click me']");

  await btnRightClick.click({ button: "right" });

  const option = page.getByRole("listitem").filter({ hasText: "Delete" });

  await page.waitForTimeout(2000);
  await option.click();
});

test("Double Click Action", async ({ page }) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  const btnDoubleClick = page.locator("//span[text()='right click me']");

  await btnDoubleClick.dblclick(); // Double click on element
});
