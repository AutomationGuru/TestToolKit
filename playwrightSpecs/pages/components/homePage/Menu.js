import { SmartTablePages } from "../../SmartTablePages";

export class Menu {
    constructor(page){
        this.page = page;
    }
    get menuSideBarExpanded(){
        return this.page.locator('[tag="menu-sidebar"]')
    }
    get menuSidebarSection(){
        return this.page.locator('nb-menu')
    }
    get menuSidebarallLinks(){
        return this.page.locator('nb-menu li')
    }
    get tableLink(){
        return this.page.locator('title="Tables & Data"')
    }
    get smartTableLink(){
        return this.page.locator('title="Smart Table"')
    }
    async expandTable(){
        await tableLink.click()
    }
    async goToSmartTable(){
        await smartTableLink.click()
        return new SmartTablePages(this.page)
    }

}