import { test, expect } from '@playwright/test';

test('responsiveness check', async ({ page }) => {
    await page.goto('/');

    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    // Wait for any animations or layout shifts
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshot-mobile.png', fullPage: true });

    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshot-tablet.png', fullPage: true });

    // Desktop
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'screenshot-desktop.png', fullPage: true });
});
