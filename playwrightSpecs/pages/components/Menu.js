export class Menu {
    constructor(page){
        this.page = page;
    }
    get hamBurgIcon(){
        return this.page.locator(".sidebar-toggle").locator("nb-icon")
    }
}