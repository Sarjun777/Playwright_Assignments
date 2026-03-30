import{test} from "@playwright/test"

test("open salesforce",async({page})=>{


    await page.goto("https://login.salesforce.com")

      await page.locator("input[id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")

    await page.locator("input[id='Login']").click()

    await page.locator("div[class='slds-icon-waffle']").click()

    await page.locator("//button[text()='View All']").click()

    await page.locator("(//a[@class='slds-text-heading_small'])[7]").click()

    await page.locator("(//span[text()='Leads'])[1]").click()

    await page.locator("//div[text()='New']").click()

    await page.click("//button[@aria-label='Salutation']")

    await page.locator("//input[@name='lastName']").fill("C")

    await page.locator("//input[@name='Company']").fill("FS Private Limited")

    await page.locator("(//button[text()='Save'])[2]").click()



})