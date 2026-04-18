import { test, expect, Locator, Frame } from "@playwright/test";

// An iframe (Inline frame) is an HTML element that allows you to embed another HTML document
// within current document
// iframes are commonly used to embed external content e.g: video, maps or web pages

test.skip("Iframe using frame method and name option", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html");

  // 1. page.frame() : using name option
  const frame = page.frame({ name: "SingleFrame" });

  if (frame) {
    const txtInput = frame.locator('//div[@class="row"]//input').nth(0);
    await txtInput.fill("Shriniwas");
  }

  // frame?.locator('//div[@class="row"]//input').nth(0);
});

test.skip("Iframe using frame method and url option", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html");

  // 1. page.frame() : using url option
  const frame = page.frame({
    url: "https://demo.automationtesting.in/SingleFrame.html",
  });

  if (frame) {
    const txtInput = frame.locator('//div[@class="row"]//input').nth(0);
    await txtInput.fill("Shriniwas");
  }
});

test("Iframe using framelocator method", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html");

  // 1. page.frameLocator() : using url option
  // const frame = page.frameLocator('[id="singleframe"]');

  const totalFrames: Frame[] = page.frames();

  console.log("Total Count of Frames:", totalFrames.length);

  const frame = page.frameLocator('[src="SingleFrame.html"]');
  // const frame = page.frameLocator('[name="singleframe"]');

  if (frame) {
    const txtInput = frame.locator('//div[@class="row"]//input').nth(0);
    await txtInput.fill("Shriniwas");
  }
});

test("Inner Iframe", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Frames.html");

  await page.locator('//div[@class="tabpane"]//a[@href="#Multiple"]').click();

  const parentFrame = page.frameLocator("[src='MultipleFrames.html']"); // Parent Frame

  const childFrame = parentFrame.frameLocator('[src="SingleFrame.html"]'); // Child Frame

  const txtInput = childFrame.locator("//div[@class='row']//input").nth(0);

  await txtInput.fill("Inner Iframe - Shriniwas");
});
