const { test, expect } = require('@playwright/test');
    const path = require('path');

    test('login success test', async ({ page }) =>  {
        // Open local HTML file
        const filePath = path.join(__dirname, '..', 'login.html');
        await page.goto('file://' + filePath);

        // Perform actions
        await page.fill('#username', 'admin');
        await page.fill('#password', 'password');
        await page.click('button');

        // Assertion
        await expect(page.locator('#message')).toBeVisible();
    });
    