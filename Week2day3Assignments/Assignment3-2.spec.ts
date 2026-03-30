import {test} from "@playwright/test"
test("launch leaftaps",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
     await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")

    await page.locator("[class='decorativeSubmit']").click()

    await page.locator("(//a)[2]").click()

    await page.locator("//a[text()='Leads']").click()

    await page.locator("//a[text()='Create Lead']").click()

       await page.locator("#createLeadForm_companyName").fill("LSTPRIVATE LIMITED")

    await page.locator("#createLeadForm_firstName").fill("C")

    await page.locator("#createLeadForm_lastName").fill("Sarjun")

    await page.locator("//input[@class='smallSubmit']").click()

    await page.locator("//a[text()='Edit']").click()

    await page.locator("#updateLeadForm_companyName").fill("LP")

    await page.click("//input[@value='Update']")



})