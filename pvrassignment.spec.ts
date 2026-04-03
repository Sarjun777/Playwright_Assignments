import {test,expect} from "@playwright/test"

test("pvr cinema assignemnt",async({page})=>{

    await page.goto("https://www.pvrcinemas.com/")

    await page.getByPlaceholder("Search for city").fill("Chennai")

    await page.locator("//li[text()='Chennai']").click()

    await page.locator("//span[text()='Cinema']").click()

    await page.locator("//span[text()='Select Cinema']").click()

    //await page.locator("//div[@class='p-dropdown-items-wrapper']/ul/li").first().click()

    await page.locator("//span[text()='INOX National,Virugambakkam Chennai']").click()

    //await page.locator("//span[text()='Select Date']").click()


   // await page.locator("(//ul[@class='p-dropdown-items']//li)[1]").click()

    await page.locator("//span[text()='Today']").click()

    await page.locator("//ul[@class='p-dropdown-items']//li").first().click()

    await page.locator("//ul[@class='p-dropdown-items']//li").nth(0).click()

    await page.locator("//div[@class='quick-lefts ']//button").click()

    await page.locator("//button[text()='Accept']").click()

    await page.locator("(//span[text()='19'])[2]").click()

 let moviename=   await page.locator("//div[@class='summary-movies-content']/h5").innerText()
 console.log((moviename));

 const seatnumber= await page.locator("//div[@class='seat-number']/p").innerText()
 console.log(seatnumber);
 
 expect(seatnumber).toBe("C19")

 let total=await page.locator("//div[@class='grand-amount']").innerText()
 console.log(total);
 await expect(total).toContain("218.02")

 
let pagetitle=await page.title()
console.log(pagetitle);


await expect(pagetitle).toBe("PVR Cinemas")

await page.locator("//button[text()='Proceed']").click()

 



 







})
