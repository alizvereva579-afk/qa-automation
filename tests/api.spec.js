import {test,expect} from '@playwright/test';
test('API: Получение списка пользователей.', async ({page}) => {
let response = await page.request.get('https://jsonplaceholder.typicode.com/users');
await expect(response.status()).toBe(200);
const data = await response.json();
await expect(data.length).toBe(10); 
});