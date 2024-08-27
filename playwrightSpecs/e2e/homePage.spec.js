// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

let homePage;
test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page)
  await homePage.navigateToHomePage()
});

test.describe('Home Page Specs', () => {
  test('Verify the header', async ({ page }) => {
    await expect(homePage.header.hamBurgIcon).toBeVisible()
    await expect(homePage.header.themeDropdown).toBeVisible()
    expect((await homePage.header.themeDropdown.textContent()).trim()).toBe("Light")
    expect((await homePage.header.logo.textContent()).trim()).toBe("ToolKit-test")
    await homePage.header.themeDropdown.click()
    await expect(homePage.header.dropDownList).toBeVisible()
    await homePage.header.selectDropdDown('Cosmic');    
    expect((await homePage.header.themeDropdown.textContent()).trim()).toBe("Cosmic")
    await expect(await homePage.header.headerSection).toHaveCSS('background-color', 'rgb(50, 50, 89)')    
  });

  // test('get started link', async ({ page }) => {
  //   await page.goto('https://playwright.dev/');

  //   // Click the get started link.
  //   await page.getByRole('link', { name: 'Get started' }).click();

  //   // Expects page to have a heading with the name of Installation.
  //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  // });
});
