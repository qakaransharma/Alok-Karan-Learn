import { test } from "@playwright/test";
// login
// logout

// - Search Product
// - Add to cart
// - Checkout

// Before All will execute before all the test blocks only once
test.beforeAll("Before All", async () => {
  console.log("Inside Before All");
});

// After All will execute after all the test blocks only once
test.afterAll("After All", async () => {
  console.log("Inside After All");
});

// BeforeEach will execute before each test block
test.beforeEach("Login", async () => {
  console.log("Before Each : I am in Login method");
});

// AfterEach will execute after each test block
test.afterEach("Logout", async () => {
  console.log("After Each : I am in Logout method");
});

test("Search Product", () => {
  console.log("Search Product Test");
});

test("Add to cart", () => {
  console.log("Add to cart Test");
});

test("Checkout", () => {
  console.log("Checkout Test");
});
