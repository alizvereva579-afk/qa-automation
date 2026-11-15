import { test,expect } from "@playwright/test";
test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

await page.locator('[data-test="username"]').fill('standard_user');

await page.locator('[data-test="password"]').fill('secret_sauce');

await page.locator('[data-test="login-button"]').click();
});
test('Успешный логин', async ({page}) => {
 await expect(page.locator('[data-test="title"]')).toBeVisible(); 
});
test('Добавление товара в корзину', async ({page}) => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
}); 
test('Логин с неверным паролем', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

await page.locator('[data-test="username"]').fill('standard_user');

await page.locator('[data-test="password"]').fill('wrong_password');

await page.locator('[data-test="login-button"]').click();
await expect(page.locator('[data-test="error"]')).toBeVisible();
}); 