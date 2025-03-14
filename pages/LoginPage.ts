import { Page, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username: string, password: string) {
        await this.page.locator('[data-test="username"]').fill(username);
        await this.page.locator('[data-test="password"]').fill(password);
        await this.page.locator('[data-test="login-button"]').click();
    }

    async assertLoginSuccess() {
        await expect(this.page).toHaveURL(/inventory/);
        await expect(this.page.locator('.header_secondary_container > span')).toHaveText('Products');
    }

    async assertLoginFailure() {
        const errorText = this.page.locator('[data-test="error"]');
        await expect(errorText).toBeVisible();
    }
}
