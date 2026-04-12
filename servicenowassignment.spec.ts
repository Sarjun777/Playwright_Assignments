import {expect, test} from "@playwright/test"

test("service now assignment",async({page})=>{

    await page.goto("https://dev280319.service-now.com/navpage.do")

    await page.locator("#user_name").fill("admin")
    await page.locator("#user_password").fill("YApVc0-vyN5-")

    await page.getByRole("button",{name:'Log in'}).click()

    await page.getByRole("menuitem",{name:'All'}).click()

    await page.getByText("Service Catalog").click()

  //  await page.frameLocator("iframe[name='gsft_main']").getByText("Mobiles").click()

   // await page.getByText("Mobiles").click()

   const frame = page.frameLocator("iframe[name='gsft_main']");

// now perform action inside iframe
await frame.locator("//a[@aria-label='Mobiles. Cell phones to meet your business needs.']").click();

    await frame.locator("//a//strong[text()='Apple iPhone 13 pro']").click()

    await frame.getByText("Yes").click()

    await frame.locator("//select[@class='form-control cat_item_option ']").selectOption({value:'unlimited'})

await frame.locator("//input[@class='cat_item_option sc-content-pad form-control']").fill("99")

await frame.locator("//label[text()='Sierra Blue']").click()

await frame.locator("//label[text()='512 GB [add $300.00]']").click()

await frame.getByRole("button",{name:'Order Now'}).click()

let successmsge=await frame.locator("//span[text()='Thank you, your request has been submitted']").innerText()

console.log(successmsge);

await expect(successmsge).toBe("Thank you, your request has been submitted")

await page.screenshot({ path: 'servicenow_fullpage.png', fullPage: true })


})