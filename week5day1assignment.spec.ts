import {test} from "@playwright/test"

import leaftapstestcase from "../../datatestcases/leaftapstestcases.json"

for (let testcases of leaftapstestcase){
test(`testing using json ${testcases.Testcase}`,async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill(testcases.username)
    await page.locator("#password").fill(testcases.password)
    await page.locator("//input[@class='decorativeSubmit']").click()
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    //company name
    await page.locator("#createLeadForm_companyName").fill(testcases.Companyname)

    //first name
    await page.locator("#createLeadForm_firstName").fill(testcases.Firstname)

    //lastname

    await page.locator("#createLeadForm_lastName").fill(testcases.Lastname)

    // source dropdown

    await page.locator("#createLeadForm_dataSourceId").selectOption({label:testcases.Source})

    //marketing campaign Dropdown

    await page.locator("#createLeadForm_marketingCampaignId").selectOption({value:testcases.marketing})

    let marketing=await page.locator("//select[@id='createLeadForm_marketingCampaignId']//option")

    let marketingvalues= await marketing.count()
    console.log(marketingvalues);

    for(let i=0;i<marketingvalues;i++){

        let marketingdropdowns=await marketing.nth(i).innerText()

        console.log(marketingdropdowns);
        
    }

    //industry

    await page.locator("//select[@id='createLeadForm_industryEnumId']").selectOption({index:testcases.Industry})

    //currency

    await page.locator("#createLeadForm_currencyUomId").selectOption({value:testcases.Currency})

    //country

    await page.locator("#createLeadForm_generalCountryGeoId").selectOption({label:testcases.Country})

    // state

    await page.locator("#createLeadForm_generalStateProvinceGeoId").selectOption({value:testcases.State})
    
    let state=await page.locator("//select[@id='createLeadForm_generalStateProvinceGeoId']//option")

    let statevalues=await state.count()
    console.log(statevalues);

    for (let i=0;i<statevalues;i++){

        let states= await state.nth(i).innerText()
        console.log(states);
        
    }

     

     await page.locator("//input[@value='Create Lead']").click()


    
    



    
    

    




})


}