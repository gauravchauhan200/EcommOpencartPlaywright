
/*   Test Case: Account Registration
    Tags: @master @sanity @regression

    Steps:
    1 Navigate to the application URL
    2 Go to 'MyAccount' and click Register
    3 Fill in registration details with random data
    4 Agree to privacy policy and submit the form
    5 Validate the confirmation message
*/

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let config: TestConfig;
let homePage: HomePage;
let registraionPage: RegistrationPage;



// This hook runs before each test
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    await page.goto(config.appUrl);
    homePage = new HomePage(page);
    registraionPage = new RegistrationPage(page);
})

//This hook runs after each test
test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
})



test('User registration test @master @sanity @regression', async () => {

    //Goto My account click the Registration

    await homePage.clickMyAccount();
    await homePage.clickRegistration();

    //Fill in registration page with random data
    await registraionPage.setFirstName(RandomDataUtil.getFirstName());
    await registraionPage.setLastName(RandomDataUtil.getlastName());

    await registraionPage.setEmail(RandomDataUtil.getEmail());
    await registraionPage.setTelephone(RandomDataUtil.getPhoneNumber());

    const password = RandomDataUtil.getPassword();
    await registraionPage.setPassword(password);
    await registraionPage.setConfirmPassword(password);
    await registraionPage.setPrivacyPolicy();
    await registraionPage.clickContinue();

    //Validating the message

    const confirmationMessage = await registraionPage.getMsgConfirmation();
    expect(confirmationMessage).toContain('Your Account Has Been Created!');


})