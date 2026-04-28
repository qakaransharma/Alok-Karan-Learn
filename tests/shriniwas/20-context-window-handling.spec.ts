// browser -> chromium, firefox, webkit
// context -> profiles
// page -> tabs, windows, pop-ups

// context1(profile1) : Designer (button, forms, desktops)
// context2(profile2) : Agent UI (form will be displayed here)

// page -> windows, tab, popups

// browser -> context -> page

import { test, expect, chromium, Browser } from "@playwright/test";

test("Browser Context", async () => {
  const browser = await chromium.launch(); // create a browser
  const context = await browser.newContext(); // create a context from browser
  const page1 = await context.newPage(); // create a page1 from context
  const page2 = await context.newPage(); // create a page2 from context

  // await page1.goto("https://www.amazon.in/");
  // await page1.goto("https://www.flipkart.com/");

  await page1.goto("https://www.amazon.in/");
  expect(page1.url()).toBe("https://www.amazon.in/");

  await page2.goto("https://www.flipkart.com/");
  expect(page2.url()).toBe("https://www.flipkart.com/");

  console.log("Total no of pages:", context.pages().length);
});

// Handling Tabs
test("Handle Tabs", async () => {
  const browser = await chromium.launch(); // create a browser
  const context = await browser.newContext(); // create a context from browser

  const parentPage = await context.newPage();

  await parentPage.goto("https://testautomationpractice.blogspot.com/");

  // To handle the page event before clicking on the button
  // await context.waitForEvent("page");
  // await parentPage.locator("button:has-text('New Tab')").click();

  await Promise.all([
    context.waitForEvent("page"),
    parentPage.locator("button:has-text('New Tab')").click(),
  ]);

  // Count the opened pages
  const pages = context.pages();
  console.log("Number of pages : ", pages.length);

  console.log("Title of Child Tab", await pages[1].title());
  console.log("Title of Parent Tab", await pages[0].title());

  // for (const page of pages) {
  //   if ((await page.title()).includes("Selenium")) {
  //     await page.title();
  //     await page.close();
  //   }
  // }
});

// Handle Pop Ups
test("Handle Pop Ups", async () => {
  // TODO
  // Click on Pop up windows buttons
});

// Authentication Pop Ups
test("Auth Pop Ups", async ({ browser }) => {
  //the-internet.herokuapp.com/basic_auth

  // Approach1
  // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");

  // Approach 2
  const context = await browser.newContext({
    httpCredentials: { username: "admin", password: "admin" },
  });

  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/basic_auth");
});
