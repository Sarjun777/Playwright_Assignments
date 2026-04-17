import {test} from"@playwright/test"
import dotenv from "dotenv"

let file=process.env.envfiles || "Production"

dotenv.config({path : `datatestcases/${file}.env`})

test.beforeAll("launch the application",async()=>{

    console.log("Before all Launch application");
    
    
})

test.afterAll("close the application",async()=>{


    console.log("After All Close");
    
})

test.beforeEach("Login leaftaps",async({page})=>{
    await page.goto(process.env.lf_url as string)

    await page.locator("#username").fill(process.env.lf_username as string)
    await page.locator("#password").fill(process.env.lf_password as string)
    await page.locator("//input[@class='decorativeSubmit']").click()
     await page.locator("//a[contains(text(),'CRM/SFA')]").click()

})
test.afterEach("logout leaftaps",async({page})=>{

    await page.locator("//a[text()='Logout']").click()


})

test("click leads",async({page})=>{
await page.locator("//a[text()='Leads']").click()

 await page.locator("//a[text()='Create Lead']").click()
    //company name
    await page.locator("#createLeadForm_companyName").fill(process.env.lf_companyname as string)

    //first name
    await page.locator("#createLeadForm_firstName").fill(process.env.lf_Firstname as string)

    //lastname

    await page.locator("#createLeadForm_lastName").fill(process.env.lf_Lastname as string)
      // source dropdown

    await page.locator("#createLeadForm_dataSourceId").selectOption({label:process.env.lf_source as string})

    //marketing campaign Dropdown

    await page.locator("#createLeadForm_marketingCampaignId").selectOption({value:process.env.lf_marketing as string})

    let marketing=await page.locator("//select[@id='createLeadForm_marketingCampaignId']//option")

    let marketingvalues= await marketing.count()
    console.log(marketingvalues);

    for(let i=0;i<marketingvalues;i++){

        let marketingdropdowns=await marketing.nth(i).innerText()

        console.log(marketingdropdowns);
        
    }

    //industry

    await page.locator("//select[@id='createLeadForm_industryEnumId']").selectOption({index:Number(process.env.lf_Industry)})

    //currency

    await page.locator("#createLeadForm_currencyUomId").selectOption({value:process.env.lf_Currency as string})

    //country

    await page.locator("#createLeadForm_generalCountryGeoId").selectOption({label:process.env.lf_Country as string})

    // state

    await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption({value:process.env.lf_State as string})
    
    let state=await page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']//option")

    let statevalues=await state.count()
    console.log(statevalues);

    for (let i=0;i<statevalues;i++){

        let states= await state.nth(i).innerText()
        console.log(states);
        
    }

     

     await page.locator("//input[@value='Create Lead']").click()


    
    



    
    



})