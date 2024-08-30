

export class SmartTablePages {
    
    constructor(page){
        this.page = page
    }
    get addNewRowButton() {
        return this.page.locator('ng2-st-add-button')
    }
}