import { expect, test } from "@playwright/test"

test('the user login with sucess', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    // await expect(page.title()).toBe('Swag Labs'); 

    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL(/inventory/);

    const productTitle  = await page.locator('.header_secondary_container > span')
    await expect(productTitle).toHaveText('Products');

});

test('user login with error', async ({page}) => {

});