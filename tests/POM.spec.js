import {test,expect} from '@playwright/test';
import { LoginPage } from './LoginPage.js';
test.beforeEach(async ({page}) => {
await page.goto('https://the-internet.herokuapp.com/login');
});
test('Позитивный тест', async ({page}) => {
    let myRobot = new LoginPage(page);
   await myRobot.login('tomsmith','SuperSecretPassword!');
await expect(page.getByRole('heading',{name: 'Secure Area', exact: true})).toBeVisible();
});
