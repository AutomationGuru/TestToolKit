from playwright.sync_api import Page, Locator # type: ignore

class SmartTablePages:
    
    def __init__(self, page:Page):
        self.page = page
    
    @property
    def addNewRowButton(self)-> Locator:
        return self.page.locator('.ng2-smart-actions-title a')