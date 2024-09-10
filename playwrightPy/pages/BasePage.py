from playwright.sync_api import Page
from playwrightPy.pages.components.homePage.Header import Header
from playwrightPy.pages.components.homePage.Menu import Menu
from playwrightPy.pages.components.homePage.Temperature import Temperature 

class BasePage:

    def _init_(self, page: Page):
        self.page = page
        self.header = Header(page)
        self.menu = Menu(page)
        self.temperature = Temperature(page)
    
    def navigateToHomePage(self):
         self.page.goto('/')