import {test} from "@playwright/test"
test("Assignment 4 -2 Radio Button",async({page})=>{

    await page.goto("https://leafground.com/radio.xhtml")
    //click favorite Browser
    await page.locator("(//label[text()='Chrome'])[1]").click()

    // select cities
    await page.locator("//label[text()='Bengaluru']").click()

    // select age
    await page.locator("//label[text()='1-20 Years']").click()
})