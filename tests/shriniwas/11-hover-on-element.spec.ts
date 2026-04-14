import { test, expect, Locator } from "@playwright/test";

test("Hover on Element", async ({ page }) => {
  await page.goto("https://only-testing-blog.blogspot.com/2015/03/chart.html");

  const link = page.getByRole("link", { name: "Hover over me" });

  // Hover on the element
  await link.hover();

  await page.waitForTimeout(2000);

  const tooltipLocator = page.locator(".ui-tooltip-content");

  const tooltipText = await tooltipLocator.textContent();

  console.log("Tooltip Text:", tooltipText);

  expect(tooltipText).toEqual("tooltip text");
});
