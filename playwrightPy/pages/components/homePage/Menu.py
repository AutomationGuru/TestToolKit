from playwright.sync_api import Page, Locator # type: ignore
from playwrightPy.pages.SmartTablePages import SmartTablePages 

class Menu:
    def __init__(self, page:Page):
        self.page = page

    @property
    def menuSideBarExpanded(self)-> Locator:        
        return self.page.locator('[tag="menu-sidebar"]')
    
    @property
    def menuSidebarSection(self)-> Locator:        
        return self.page.locator('nb-menu')
    
    @property
    def menuSidebarallLinks(self)-> Locator:        
        return self.page.locator('nb-menu li')
    
    @property
    def tableLink(self)-> Locator:        
        return self.page.locator('[title="Tables & Data"]')
    
    @property
    def smartTableLink(self)-> Locator:        
        return self.page.locator('[title="Smart Table"]')
    
    def expandTable(self):
        self.tableLink.click()
    
    def goToSmartTable(self) -> SmartTablePages:
        self.smartTableLink.click()
        return SmartTablePages(self.page)