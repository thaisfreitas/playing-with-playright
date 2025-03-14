import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

test.describe("Products Test", () => {
    let loginPage: LoginPage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productsPage = new ProductsPage(page);

        await loginPage.navigate();
        await loginPage.login("standard_user", "secret_sauce");
    });

    test("The products name should start with 'Sauce Labs'", async () => {
        await productsPage.verifyProductTitlesStartWith("Sauce Labs");
    });
});