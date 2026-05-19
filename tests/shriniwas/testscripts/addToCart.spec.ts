import { test } from "@playwright/test";
import { LoginPage } from "../../../src/pages/LoginPage";
import { ProductsPage } from "../../../src/pages/ProductsPage";

test("Verify Add To Cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.goto();
  await loginPage.loginToApp("standard_user", "secret_sauce");

  await productsPage.clickAddToCart();
});
