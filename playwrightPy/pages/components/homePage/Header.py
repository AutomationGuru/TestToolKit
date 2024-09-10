from playwright.sync_api import Page, Locator # type: ignore

class Header:
    def __init__(self, page: Page):
        self.page = page
    
    @property
    def logo(self)-> Locator:
        return self.page.locator(".logo")
    
    @property
    def headerSection(self)-> Locator:
        return self.page.locator('nb-layout-header')
    
    @property
    def hamBurgIcon(self)-> Locator:
        return self.page.locator(".sidebar-toggle nb-icon")
    
    @property
    def themeDropdown(self)-> Locator:
        return self.page.locator(".header-container nb-select")
    
    @property
    def dropDownList(self)-> Locator:
        return self.page.locator("nb-option-list")

    @property
    def dropDownListAllOptions(self)-> Locator:        
        return self.page.locator('nb-option-list nb-option')

    def selectDropdDown(self, selectTheme="Dark"):
        (self.dropDownListAllOptions).filter({hasText: selectTheme}).click()         # type: ignore
    