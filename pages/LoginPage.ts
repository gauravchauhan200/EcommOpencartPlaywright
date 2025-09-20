
import { Page, expect, Locator } from '@playwright/test';


export class LoginPage {
    private readonly page: Page;

    //locator
    private readonly txtLoginId: Locator;
    private readonly txtPassword: Locator;
    private readonly loginBtn: Locator;
    private readonly txtErrorMessage:Locator;

    constructor(page: Page) {
        this.page = page;

        // Initilizing CSS Locator
        this.txtLoginId = page.locator('#input-email');
        this.txtPassword = page.locator('#input-password');
        this.loginBtn = page.locator('input[value="Login"]');
        this.txtErrorMessage =page.locator('.alert.alert-danger.alert-dismissible');
    
    }


    async setEmail(loginId: string): Promise<void> {
        await this.txtLoginId.fill(loginId);
    }

    async setPassword(password: string) {
        await this.txtPassword.fill(password);
    }

    async clickLogin() {
        await this.loginBtn.click();
    }


    /*
    perform complete login action
    @param email- email address to enter
    @para, password - password to enter
    */

    async login(loginId: string, password: string) {
        await this.setEmail(loginId);
        await this.setPassword(password);
        await this.clickLogin();
    }

    async getloginErrorMessage():Promise<null| string>
    {
        return(this.txtErrorMessage.textContent());
    }


















}