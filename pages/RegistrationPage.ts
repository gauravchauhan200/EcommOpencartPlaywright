import {Page,Locator,expect} from '@playwright/test';

export class RegistrationPage
{   private readonly page: Page;


    //Locators using CSS selectors
    private readonly txtFirstname:  Locator;
    private readonly txtLastname:   Locator;
    private readonly txtEmail:      Locator;
    private readonly txtTelephone:  Locator;
    private readonly txtPassword:   Locator;
    private readonly txtConfirmPassword:Locator;
    private readonly chkdPolicy:    Locator;
    private readonly btnContinue:   Locator;
    private readonly msgConfirmation:Locator;


    constructor(page:Page)
    {   this.page=page;

        //Initialize locators with CSS selectors
        this.txtFirstname =page.locator('#input-firstname');
        this.txtLastname =page.locator('#input-lastname');
        this.txtEmail= page.locator('#input-email');;
        this.txtTelephone =page.locator('input[type="tel"]');
        this.txtPassword =page.locator('#input-password');
        this.txtConfirmPassword =page.locator('#input-confirm');
        this.chkdPolicy =page.locator('input[name="agree"]');
        this.btnContinue =page.locator('input[value="Continue"]');
        this.msgConfirmation=page.locator('h1:has-text("Your Account Has Been Created!")');
    }


        //Sets the first name in the registration form
        //@param fname - First name to enter

        async setFirstName(fname:string): Promise<void>      
        {   
             await this.txtFirstname.fill(fname);     
        }
        
        //@param lname - last name to enter
        async setLastName(lName:string): Promise<void>
        {
           await this.txtLastname.fill(lName);
        }
       
        //@param email - email to enter
        async setEmail(email:string):Promise<void>
        {
             await this.txtEmail.fill(email);
        }

        async setTelephone(tel:string): Promise<void>
        {
             await this.txtTelephone.fill(tel);
        }

        async setPassword(pass:string): Promise<void>
        {
             await this.txtPassword.fill(pass);
        }

        async setConfirmPassword(confPass:string):Promise<void>
        {
            await this.txtConfirmPassword.fill(confPass);
        }

        async setPrivacyPolicy():Promise<void>
        {
            await this.chkdPolicy.check();
        }

        async clickContinue():Promise<void>
        {
             await this.btnContinue.click();
        }

        //Get the confirmation message text
        //@return Promise<string>- Confirmation message text

        async getMsgConfirmation():Promise<string>
        {
            return await this.msgConfirmation.textContent() ?? '';
        }



        

        //complete registration workflow
        //@param userData - Object contaning registration data

        async completeRegistration(userData:{firstName:string;
            lastName:string;
            email:string;
            telephone:string;
            password:string;}):Promise<void>
        {
            await this.setFirstName(userData.firstName);
            await this.setLastName(userData.lastName);
            await this.setEmail(userData.email);
            await this.setTelephone(userData.password);
            await this.setConfirmPassword(userData.password);
            await this.setPrivacyPolicy();
            await this.clickContinue();
            await expect(this.msgConfirmation).toBeVisible();
            
        }


}