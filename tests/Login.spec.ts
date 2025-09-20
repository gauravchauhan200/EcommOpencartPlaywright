import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { LoginPage } from '../pages/LoginPage';

/*
Tags: @master @sanity @regression

Steps:
1 Navigate to the application
2 navigate to the login page
3 Enter valid credentials
4 Verify sucessful login by checking "my account " page presence

*/

let config: TestConfig;
let homePage: HomePage;
let loginPage: LoginPage;
let myAccountPage: MyAccountPage;


// This hook runs before each test
test.beforeEach(async ({ page }) => {
    config = new TestConfig();              //load config (URL,credential)
    await page.goto(config.appUrl);         //navigate to base URL                                        
    homePage = new HomePage(page);          //Initilize page object
    loginPage = new LoginPage(page);
    myAccountPage = new MyAccountPage(page);
});


//Optional cleanup after each Test
test.afterEach(async ({ page }) => {
    await page.close();                     //close browser tab(good practice in local and dev run)
})



test('User login test',async()=>{
   
    //Navigate to login page via HomePage

    await homePage.clickMyAccount();
    await homePage.clickLogin();
    
    //Enter valid credential to login
    await loginPage.setEmail(config.email);
    await loginPage.setPassword(config.password);
    await loginPage.clickLogin();

    //Alternatively
   // await loginPage.login(config.email,config.password)

   //Verify sucessful login by checking "my account " page presence

    const isLoggedIn=await myAccountPage.isMyAccountPageExists();
    expect(isLoggedIn).toBeTruthy();
})

