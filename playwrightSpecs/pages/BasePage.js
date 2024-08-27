import { Header } from "./components/Header"
import { Menu } from "./components/Menu"


export class BasePage {    

    constructor(page){
        this.page = page
        this.header = new Header(page)
        this.menu = new Menu(page)
    }
    async navigateToHomePage(){
        await this.page.goto('/');
    }
}