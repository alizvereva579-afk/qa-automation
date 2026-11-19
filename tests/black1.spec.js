import {test,expect} from '@playwright/test';
import { LoginPage } from './LoginPage.js';
test.beforeEach(async ({page}) => {
   await page.goto('https://www.saucedemo.com/');
    
});
test('Проверка корзины', async ({page}) => {
    let robot = new LoginPage(page);
   await robot.login('standard_user','secret_sauce');
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test="shopping-cart-link"]').click();
await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
await expect(page.locator('[data-test="inventory-item-price"]')).toHaveText('$29.99');
})


