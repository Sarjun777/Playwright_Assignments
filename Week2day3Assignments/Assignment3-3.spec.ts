import{test} from "@playwright/test"

test("launch sales force for assignment 3",async({page})=>{


    await page.goto("https://login.salesforce.com/")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")

    await page.locator("//input[@id='Login']").click()

    await page.locator("//div[@class='slds-icon-waffle']").click()

    await page.locator("//button[text()='View All']").click()

    await page.click("//p[text()='Individuals']")

    await page.locator("(//a[@class='slds-button slds-button_reset'])[14]").click()

    await page.click("//span[text()='New Individual']")

    await page.locator("//input[@placeholder='Last Name']").fill("Sarjun")

    await page.click("//span[text()='Save & New']")






})