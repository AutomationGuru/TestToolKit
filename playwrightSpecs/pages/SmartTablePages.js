

export class SmartTablePages {
    
    constructor(page){
        this.page = page
    }
    get addNewRowButton() {
        return this.page.locator('.ng2-smart-actions-title a')
    }
}