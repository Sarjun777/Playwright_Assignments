import {expect, test} from "@playwright/test"

test("Week4day2 Assignement manage multiple windows",async({page,context})=>{


    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")

    await page.locator(".decorativeSubmit").click()

    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

    await page.locator("//a[text()='Leads']").click()

    await page.locator("//a[text()='Merge Leads']").click()

      const [fromWindow] = await Promise.all([context.waitForEvent('page'),page.locator("(//img[@src='/images/fieldlookup.gif'])[1]").click()])


      await fromWindow.locator("(//div[contains(@class,'x-grid3-row')][1]//a[@class='linktext'])[1]").click()


      const [towindow] =await Promise.all([context.waitForEvent('page'),page.locator("(//img[@src='/images/fieldlookup.gif'])[2]").click()])

      await towindow.locator("(//a[@class='linktext'])[6]").click()


     // await page.locator("//a[text()='Merge']").click()

     // await page.waitForTimeout(2000)

      page.on("dialog",async(alert)=>{
          console.log("Alert message:", alert.message());
    console.log("Alert type:", alert.type());

    alert.accept()
      })

      await page.locator("//a[text()='Merge']").click()

    let pagetitle=  await page.title()
    console.log(pagetitle);

    await expect(pagetitle).toBe("View Lead | opentaps CRM")
    




   


})