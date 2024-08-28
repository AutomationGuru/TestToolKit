import { Header } from "./components/homePage/Header"
import { Menu } from "./components/homePage/Menu"
import { Temperature } from "./components/homePage/Temperature"


export class BasePage {    

    constructor(page){
        this.page = page
        this.header = new Header(page)
        this.menu = new Menu(page)
        this.temperature = new Temperature(page)
    }
    async navigateToHomePage(){
        await this.page.goto('/');
    }
}