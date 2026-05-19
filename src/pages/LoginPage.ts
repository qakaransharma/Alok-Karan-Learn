import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page;
  readonly txtUserName: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;

  // pageInstance coming from test file, assigning that pageinstance to
  // class level variable i.e page so that page variable can be used thoughout the class file
  constructor(page: Page) {
    this.page = page;
    this.txtUserName = this.page.locator("#user-name");
    this.txtPassword = this.page.locator("#password");
    this.btnLogin = this.page.locator("#login-button");
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async loginToApp(userName: string, password: string) {
    // Enter Username
    await this.txtUserName.fill(userName);
    // Enter Password
    await this.txtPassword.fill(password);
    // Click on Login
    await this.btnLogin.click();
  }
}
