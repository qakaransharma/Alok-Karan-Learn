import { Locator, Page } from "@playwright/test";

export class ProductsPage {
  readonly page;
  readonly btnAddToCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnAddToCart = this.page.locator("#add-to-cart-sauce-labs-backpack");
  }

  async clickAddToCart() {
    await this.btnAddToCart.click();
  }
}
