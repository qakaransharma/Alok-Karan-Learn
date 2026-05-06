import { test } from "@playwright/test";

const dataForEach = [
  { name: "Shri1", expected: "Hello, Shri1" },
  { name: "Shri2", expected: "Hello, Shri2" },
  { name: "Shri3", expected: "Hello, Shri3" },
];

console.log("---------------------------------------------------");

dataForEach.forEach(({ name, expected }) => {
  test(`Iterating array ${name}`, async () => {
    console.log(name);
    console.log(expected);
  });
});

const dataForLoop = ["Laptop", "Smartphone", "Sneaker"];

for (const data of dataForLoop) {
  test(`Iterating single dim array ${data}`, async () => {
    console.log(data);
  });
}

const dataForEachLoop = ["Value1", "Value2", "Value3"];

dataForEachLoop.forEach((data) => {
  test(`Iterating array using foreach ${data}`, async () => {
    console.log(data);
  });
});
