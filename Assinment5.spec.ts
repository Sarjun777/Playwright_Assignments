import {test} from "@playwright/test"
test('playwright locators',async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.getByRole('textbox', {name:'USERNAME'}).fill("Demosalesmanager")
    await page.getByRole('textbox', {name:'PASSWORD'}).fill("crmsfa")

    await page.getByRole('button', {name:'login'}).click()

  await page.getByText("CRM/SFA").click()

  await page.getByRole('link', {name:"Leads"}).click()

  await page.getByText("Create Lead").click()

    await page.locator("#createLeadForm_companyName").fill("SS PRIVATE LIMITED")

    await page.locator("#createLeadForm_firstName").fill("Sarjun")

    await page.locator("#createLeadForm_lastName").fill("C")


    await page.locator("#createLeadForm_personalTitle").fill("Mr")

    await page.locator("#createLeadForm_generalProfTitle").fill("SARJUN'S")

    await page.locator("#createLeadForm_annualRevenue").fill("100000")


    await page.locator("#createLeadForm_departmentName").fill("SPORTS")

    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9994891606")

    await page.getByRole('button',{name:"Create Lead"}).click()



    

})