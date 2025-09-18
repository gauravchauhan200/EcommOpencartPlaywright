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
            this.txtLastname.fill(lName);
        }
       
        //@param email - email to enter
        async setEmail(email:string):Promise<void>
        {
            this.txtEmail.fill("email");
        }







}