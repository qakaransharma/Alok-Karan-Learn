import { test } from "@playwright/test";

test("Capture the screenshot", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const now = new Date();
  const currentDateTime = `${String(now.getDate()).padStart(2, "0")}_${String(now.getMonth() + 1).padStart(2, "0")}_${now.getFullYear()}_${String(now.getHours()).padStart(2, "0")}_${String(now.getMinutes()).padStart(2, "0")}_${String(now.getSeconds()).padStart(2, "0")}`;

  console.log(currentDateTime);
  await page.screenshot({
    path: "screenshots/" + currentDateTime + "_screenshot.png",
  });
});
test("Capture the Screenshot of element", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const now = new Date();
  const currentDateTime = `${String(now.getDate()).padStart(2, "0")}_${String(now.getMonth() + 1).padStart(2, "0")}_${now.getFullYear()}_${String(now.getHours()).padStart(2, "0")}_${String(now.getMinutes()).padStart(2, "0")}_${String(now.getSeconds()).padStart(2, "0")}`;

  console.log(currentDateTime);

  const imgLocator = page.getByAltText("Tricentis Demo Web Shop");

  await imgLocator.screenshot({
    path: "screenshots/" + currentDateTime + "_screenshot.png",
  });
});

test("Full page screenshot", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const now = new Date();
  const currentDateTime = `${String(now.getDate()).padStart(2, "0")}_${String(now.getMonth() + 1).padStart(2, "0")}_${now.getFullYear()}_${String(now.getHours()).padStart(2, "0")}_${String(now.getMinutes()).padStart(2, "0")}_${String(now.getSeconds()).padStart(2, "0")}`;

  console.log(currentDateTime);

  await page.screenshot({
    path: "screenshots/" + currentDateTime + "_screenshot.png",
    fullPage: true,
  });
});

test("Take screenshot of particular section", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  const now = new Date();
  const currentDateTime = `${String(now.getDate()).padStart(2, "0")}_${String(now.getMonth() + 1).padStart(2, "0")}_${now.getFullYear()}_${String(now.getHours()).padStart(2, "0")}_${String(now.getMinutes()).padStart(2, "0")}_${String(now.getSeconds()).padStart(2, "0")}`;

  console.log(currentDateTime);

  const productFeatureLocator = page.locator(".product-grid");

  await productFeatureLocator.screenshot({
    path: "screenshots/" + currentDateTime + "_screenshot.png",
  });
});
