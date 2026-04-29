/*
Test1 : @sanity
Test2 : @regression
Test3 : @sanity
Test4 : @regression
Test5 : @sanity @regression
*/

import test from "@playwright/test";

// Approach 2
test("Test1", { tag: "@sanity" }, async () => {
  console.log("Inside Test1 method");
});

test("Test2", { tag: "@sanity" }, async () => {
  console.log("Inside Test2 method");
});

test("Test3", { tag: "@regression" }, async () => {
  console.log("Inside Test3 method");
});

test("Test4", { tag: ["@sanity", "@regression"] }, async () => {
  console.log("Inside Test4 method");
});

test("Test5", { tag: "@regression" }, async () => {
  console.log("Inside Test5 method");
});
