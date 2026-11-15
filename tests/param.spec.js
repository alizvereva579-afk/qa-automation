import {test,expect} from '@playwright/test';
import { LoginPage } from './LoginPage.js';
let wrongPassword = [ '', '123',' ', 'super_secret'];
for(const pass of wrongPassword) {
    test(`Проверка пароля: ${pass}`, async ({page}) => {
let robot = new LoginPage(page);
await page.goto('https://the-internet.herokuapp.com/secure');
 await robot.login('tomsmith', pass);
await expect(page.locator('.flash.error')).toBeVisible();    
})
}