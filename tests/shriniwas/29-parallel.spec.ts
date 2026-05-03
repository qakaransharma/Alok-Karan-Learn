import { test } from "@playwright/test";

// What does this "8 cores" mean?
// task manager -> performance -> CPU -> Cores
// Cores are like small workers inside your machine that can run tasks in parallel

// If you make fullParallel = false, it will execute the tests in sequencial mode even though
// you provide workers more than 1
// serial = 1 workers
// parallel = more than 1 workers

// test.describe.configure({ mode: "parallel" });
// test.describe.configure({ mode: "serial" });

test("Test 1", async () => {
  console.log("Test 1");
});

test("Test 2", async () => {
  console.log("Test 2");
});

test("Test 3", async () => {
  console.log("Test 3");
});

test("Test 4", async () => {
  console.log("Test 4");
});

test("Test 5", async () => {
  console.log("Test 5");
});

test("Test 6", async () => {
  console.log("Test 6");
});

test("Test 7", async () => {
  console.log("Test 7");
});

test("Test 8", async () => {
  console.log("Test 8");
});

test("Test 9", async () => {
  console.log("Test 9");
});

test("Test 10", async () => {
  console.log("Test 10");
});
