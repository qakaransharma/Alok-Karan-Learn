// browser -> chromium, firefox, webkit
// context -> profiles
// page -> tabs, windows

// context1(profile1) : Designer (button, forms, desktops)
// context2(profile2) : Agent UI (form will be displayed here)

// page -> windows, tab, popups

// browser -> context -> page

import { test, expect, chromium } from "@playwright/test";

test("Browser Context", async () => {
  const browser = await chromium.launch(); // create a browser
  const context = await browser.newContext(); // create a context from browser
  const page1 = await context.newPage(); // create a page from context
  const page2 = await context.newPage(); // create a page from context

  // await page1.goto("https://www.amazon.in/");
  // await page1.goto("https://www.flipkart.com/");

  await page1.goto("https://www.amazon.in/");
  expect(page1.url()).toBe("https://www.amazon.in/");

  await page2.goto("https://www.flipkart.com/");
  expect(page2.url()).toBe("https://www.flipkart.com/");

  console.log("Total no of pages:", context.pages().length);
});
