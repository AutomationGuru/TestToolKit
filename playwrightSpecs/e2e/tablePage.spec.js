// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

let homePage;
test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page)
  await homePage.navigateToHomePage()
});

test.describe('Table Page Specs', () => {
  test('Smart Table page', async ({ page }) => {
    await homePage.menu.expandTable()
    const smartTable = await homePage.menu.goToSmartTable()
    await expect(await smartTable.addNewRowButton).toBeVisible()
  });
});
