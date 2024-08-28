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

}