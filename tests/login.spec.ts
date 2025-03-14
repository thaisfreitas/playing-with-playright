import { expect, test } from "@playwright/test"

test('the user login with sucess', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL(/inventory/);

    const productTitle  = await page.locator('.header_secondary_container > span')
    await expect(productTitle).toHaveText('Products');

});

test('The user insert wrong credencial', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("123");
    await page.locator('[data-test="login-button"]').click();

    const errorText = await page.getByText('Username and password do not match any user in this service')    

    await expect(errorText).toBeVisible();

});