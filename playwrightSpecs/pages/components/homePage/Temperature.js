export class Temperature {
    constructor(page){
        this.page = page;
    }
    get temperatureSection(){
        return this.page.locator('ngx-temperature [tabtitle="Temperature"]')
    }
    get temperatureGauge(){
        return this.page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle')
    }
}