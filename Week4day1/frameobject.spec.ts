import{test,expect} from "@playwright/test"

test('frame object',async({page})=>{

    // frame objects

    await page.goto("https://www.leafground.com/frame.xhtml")

    const frameref=await page.frame({name:"frame2"})

    await frameref?.locator("#Click").click()

  //  let text="Hurray! You Clicked Me."

   // let loctors=await page.locator("//button[text()='Hurray! You Clicked Me.']").innerText()

    await expect(frameref!.locator("#Click"))
    .toHaveText("Hurray! You Clicked Me.");
    
})