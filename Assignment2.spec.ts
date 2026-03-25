import{test} from "@playwright/test"

test("launch leaf taps",async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")

    await page.locator("[class='decorativeSubmit']").click()

await page.locator("text=CRM/SFA").click();

await page.getByRole('link', { name: 'Leads' }).click();

    await page.getByRole('link',{name: 'Create Lead'}).click()

    await page.locator("#createLeadForm_companyName").fill("FS PRIVATE LIMITED")

    await page.locator("#createLeadForm_firstName").fill("Sarjun")

    await page.locator("#createLeadForm_lastName").fill("C")

    await page.locator("#createLeadForm_personalTitle").fill("SOlutions")

    await page.locator("#createLeadForm_generalProfTitle").fill("Private Limited")

    await page.locator("#createLeadForm_annualRevenue").fill("500000")

    await page.locator("#createLeadForm_departmentName").fill("Information Technology")

    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9994891606")

   await page.locator("input[value='Create Lead']").click()

await page.waitForTimeout(5000);
    
})


//http://leaftaps.com/opentaps/control/main