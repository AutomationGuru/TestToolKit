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

  test('check Menu block and hamburg section', async ({ page }) => {
    await expect(homePage.menu.menuSideBarExpanded).toBeVisible()
    expect(await (homePage.menu.menuSideBarExpanded).getAttribute('class')).toContain("expanded")
    await homePage.header.hamBurgIcon.click()
    expect(await (homePage.menu.menuSideBarExpanded).getAttribute('class')).toContain("compacted")
    await homePage.header.hamBurgIcon.click()
    await expect(homePage.menu.menuSidebarSection).toBeVisible()
  }); 

  test('Check temp menu', async ({ page }) => {
    await expect(homePage.temperature.temperatureSection).toBeVisible()
    await expect(homePage.temperature.temperatureGauge).toBeVisible()
  });
});
