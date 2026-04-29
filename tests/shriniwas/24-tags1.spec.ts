/*
Test1 : @sanity
Test2 : @regression
Test3 : @sanity
Test4 : @regression
Test5 : @sanity @regression
*/

import test from "@playwright/test";

// Approach 1
test("@sanity Test1", async () => {
  console.log("Inside Test1 method");
});

test("@sanity Test2", async () => {
  console.log("Inside Test2 method");
});

test("Test3", async () => {
  console.log("Inside Test3 method");
});

