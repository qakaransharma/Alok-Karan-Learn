import { test } from "@playwright/test";

/*
    only, skip,fail,fixme,slow
*/

// test.only("Test1", async () => {
//   console.log("Inside Test1 method");
// });

test.skip("Test2", async () => {
  console.log("Inside Test2 method");
});

test("Test3", async ({ browserName }) => {
  test.skip(browserName === "chromium", "Skipped if the browser is chromium");
  console.log("Inside Test3 method");
});

test.fail("Test4", async () => {
  console.log("Inside Test4 method");
});

test.fixme("Test5", async () => {
  console.log("Inside Test5 method");
});

test("Test6", async () => {
  console.log("Inside Test6 method");
});

test("Test7", async () => {
  test.slow(); // Triple the default timeout (default timeout 30 sec, after triple it will be 90 sec)
  console.log("Inside Test7 method");
});
