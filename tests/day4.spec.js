 import { test, expect } from '@playwright/test';

test.beforeEach( async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
});
test('Позитив', async ({page}) => {
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
})
test('Допоолнительный', async ({page}) => {
  await expect(page.getByText('You logged into a secure area')).toBeVisible();
});
test('Негатив', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox',{ name: 'Password' }).fill('SuperSecretPassword');
  await page.getByRole('button', { name: ' Login' }).click()
  await expect(page.getByText('Your password is invalid! ×')).toBeVisible();
})
import { LoginPage } from './LoginPage.js';
const myRobot = new LoginPage(page);
await myRobot.login('tomsmith','SuperSecretPassword!');