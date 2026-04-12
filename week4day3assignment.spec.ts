import {test,expect} from "@playwright/test"

test("file upload assignment",async({page})=>{

    await page.goto("https://login.salesforce.com/")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")

    await page.locator("#password").fill("TestLeaf@2025")

    await page.getByRole("button",{name:'Log In'}).click()

    //app launcher icon

    await page.locator("//div[@class='slds-icon-waffle']").click()

    await page.locator("//button[text()='View All']").click()

    await page.getByPlaceholder("Search apps or items...").fill("Accounts")

    await page.locator("//mark[text()='Accounts']").click()

    await page.locator("//div[text()='New']").click()

    await page.locator("//input[@name='Name']").fill("Sarjun's")

    await page.getByRole("combobox",{name: 'Type'}).click()

    await page.locator("//lightning-base-combobox-item[@data-value='Prospect']").click()

     await page.getByRole("combobox",{name: 'Industry'}).click()

     await page.locator("//lightning-base-combobox-item[@data-value='Banking']").click()

     await page.locator("(//button[text()='Save'])[2]").click()

     let titlename=await page.locator("//lightning-formatted-text[@slot='primaryField']").innerText()

     console.log(titlename);
     
     await expect(titlename).toBe("Sarjun's")

     const fileupload=await page.locator("//input[@type='file']")

     await fileupload.setInputFiles('utils/Nishi Vilma A-Angular-Resume.pdf')

     await page.locator("//span[text()='Done']").click()

     let popup= await page.locator("//span[@data-aura-class='forceActionsText']").innerText()

     console.log(popup);

     //await expect(       popup     ).toBe("1 file was uploaded.")



     let filename=await page.locator("(//span[text()='Nishi Vilma A-Angular-Resume'])[2]").innerText()

     console.log(filename);
     
     
     await expect(filename).toBe("Nishi Vilma A-Angular-Resume")









})