import {test,expect} from "@playwright/test";

test("Мой первый тест", async ({page}) => {
await page.goto("https://example.com");

await expect(page.getByText('This domain is for use in documentation examples')).toBeVisible();
})