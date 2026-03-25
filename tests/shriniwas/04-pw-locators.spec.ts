/*

page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
page.getByRole() to locate by explicit and implicit accessibility attributes.
*/

import { test, expect } from "@playwright/test";

test("Verify getByText", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

  const heading = page.getByText("Welcome to Our Store"); // case-insensitive

  // const heading = page.getByText("Welcome to our store", { exact: true }); // Exact match
  // const heading = page.getByText("Welcome to"); // substring/partial text

  // const heading = page.getByText(/Welcome\s[A-Za-z]+\s[A-Za-z]+\s[A-Za-z]+$/i);

  // const heading = page.getByText(/Welcome\s+.*$/i);

  await expect(heading).toBeVisible();
});

test("Verify getByLabel", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

  const loc = page.getByLabel("First name:");

  await loc.fill("Shriniwas");
});

test("Verify getByPlaceholder", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

  const loc = page.getByPlaceholder("Search store");

  await loc.fill("iPhone"); // Enter a value
});

test("Verify getByAltText", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

  const loc = page.getByAltText("nopCommerce demo store");

  await expect(loc).toBeVisible();
});

test("Verify getByTitle", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");

  const loc = page.getByTitle("Notification");

  await expect(loc).toBeVisible();
});

test("Verify getByTestId", async ({ page }) => {
  await page.goto("https://utkarsh-react-testing-library-demo.netlify.app/");

  // data-testid=""
  // data-test-id=""
  const loc = page.getByTestId("task-container");

  await expect(loc).toBeVisible();
});
