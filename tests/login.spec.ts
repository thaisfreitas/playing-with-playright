import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Tests", () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    test("The user logs in successfully", async () => {
        await loginPage.login("standard_user", "secret_sauce");
        await loginPage.assertLoginSuccess();
    });

    test("The user inserts wrong credentials", async () => {
        await loginPage.login("standard_user", "123");
        await loginPage.assertLoginFailure();
    });
});