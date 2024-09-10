from playwright.sync_api import Page, Locator # type: ignore

class Temperature:
    def __init__(self, page:Page):
        self.page=page

    @property
    def temperatureSection(self)-> Locator:
        return self.page.locator('ngx-temperature [tabtitle="Temperature"]')
    
    @property
    def temperatureGauge(self)-> Locator:
        return self.page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')