import {Page,expect,Locator} from '@playwright/test';

export class HomePage{

private readonly page: Page;

//locators
private readonly lnkMyAccount:  Locator;
private readonly lnkRegister:   Locator;
private readonly linklogin:     Locator;
private readonly txtSearchbox:  Locator;
private readonly btnSearch:     Locator;



//--------constructors---------

constructor(page:Page)
{
    this.page=page;
    this.lnkMyAccount=page.locator('span:has-text("My Account")');
    this.lnkRegister=page.locator('a:has-text("Register")');
    this.linklogin=page.locator('a:has-text("Login")');
    this.txtSearchbox=page.locator('input[name="search"]');
    this.btnSearch=page.locator('span[class="input-group-btn"]>button[type="button"]');
}



//---------action method--------
//check if HomePage exist

async isHomePageExist()
{
    let title:string = await this.page.title();
    if(title)
    {
        return true;
    }
    return false;
}



// Click "My Account" link
async clickMyAccount(){
    try{
        await this.lnkMyAccount.click();
    }catch(error){
        console.log(`Exception occured while checking 'My Account':${error}`);
        throw error;
    }
}


                // click "login" lnk
async clickLogin(){
    try{
        await this.linklogin.click();
    }catch(error){
        console.log(`Exception occured while checking 'clickLogin':${error}`);
        throw error;
    }
}


            // Enter product name in the searchbox
async enterProductName(pName:string){
    try{
        await this.txtSearchbox.fill(pName);
    }catch(error){
        console.log(`Exception occured while checking 'enterProductName':${error}`);
        throw error;
    }
    }



async clickSearch(){
       try{
        await this.btnSearch.click();
    }catch(error){
        console.log(`Exception occured while checking 'clicksearch':${error}`);
        throw error;
        }
    }



}

 



