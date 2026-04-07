import{test,expect} from "@playwright/test"

test('frame object',async({page})=>{

    // frame objects

    await page.goto("https://www.leafground.com/frame.xhtml")

    await page.frameLocator("//iframe[@src='default.xhtml']").locator("#Click").click()

    await expect(page.frameLocator("//iframe[@src='default.xhtml']").locator("#Click")).toHaveText("Hurray! You Clicked Me.")

    let noofframes=page.frames()

    let framelength=noofframes.length



    console.log("No of Frames : ",framelength);

    const framee=await page.frame({name:'frame2'})

    await framee?.locator("#Click").click()

    await expect(framee!.locator('#Click')).toHaveText("Hurray! You Clicked Me.")









    





})