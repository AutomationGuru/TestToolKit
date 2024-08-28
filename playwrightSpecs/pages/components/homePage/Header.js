const { expect } = require('@playwright/test');

export class Header {
    constructor(page){
        this.page = page;
    }
    get logo(){
        return this.page.locator(".logo")
    }
    get headerSection(){
        return this.page.locator('nb-layout-header')
    }
    get hamBurgIcon(){
        return this.page.locator(".sidebar-toggle nb-icon")
    }
    get themeDropdown(){
        return this.page.locator(".header-container nb-select")
    }
    get dropDownList(){
        return this.page.locator("nb-option-list")
    }
    get dropDownListAllOptions(){
        // Typically use this instead but this one does not have list
        //const optionList = page.getByRole('list').locator('nb-option')
        return this.page.locator('nb-option-list nb-option')
    }


    async selectDropdDown(selectTheme="Dark"){        
        await (await this.dropDownListAllOptions).filter({hasText: selectTheme}).click()        
    }

}