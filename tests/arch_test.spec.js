// @ts-check
const { test, expect } = require("@playwright/test");

test("Get Started E2E : Close/Open all accordion menus", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await page.getByRole("link", { name: "Get started" }).click();

  await test.step("Close ALL", async () => {
    await page.getByRole("button", { name: "Getting Started" }).click();
    await page.getByRole("button", { name: "Playwright Test" }).click();
    await page.getByRole("button", { name: "Guides" }).click();
  });

  await test.step("Open ALL", async () => {
    await page.getByRole("button", { name: "Integrations" }).click();
    await page.getByRole("button", { name: "Migration" }).click();
    await page.getByRole("button", { name: "Guides" }).click();
    await page.getByRole("button", { name: "Playwright Test" }).click();
  });

  await expect(page).toHaveTitle('Installation | Playwright');
});
