import { test } from "@playwright/test";

test.describe("Group1", async () => {
  test("Test1", async () => {
    console.log("I am inside test1");
  });

  test("Test2", async () => {
    console.log("I am inside test2");
  });
});

test.describe("Group2", async () => {
  test("Test3", async () => {
    console.log("I am inside test3");
  });

  test("Test4", async () => {
    console.log("I am inside test4");
  });
});
