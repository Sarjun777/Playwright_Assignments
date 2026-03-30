import {test} from "@playwright/test"
test('launch leaftaps Assignment 4 ',async({page})=>{


    await page.goto("https://leafground.com/checkbox.xhtml ")

    //basic check box


    await page.click("(//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default'])[1]")

    // notification check box

    await page.locator("(//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default'])").nth(0).click()


  let notificationtext='Checked'
   let a= await page.locator("//span[.='Checked']").innerText()

   console.log("Notification check box test : ",a);

   if(notificationtext === a){
    console.log("Expected text is matched");
    
   }
   else{
    console.log("Expected text did not match");
    
   }

   await page.locator("//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").nth(2).click()


   //tri state check box

    const tri= await page.locator("//div[@id='j_idt87:ajaxTriState']")

    tri.click()

   //

   let b2="State = 1"

   let a1=await page.locator("//span[text()='State has been changed.']").innerText()   
   let b1=await page.locator("//p[text()='State = 1']").innerText()   

   console.log(a1);
   console.log(b1);

   if(b1===b2){

    console.log("it is in state 1");
    
   }
   else{
    console.log("It is in state 2");
    
   }

   //toggle
   await page.locator("//div[@id='j_idt87:j_idt100']").click()

   
   if(notificationtext === a){
    console.log("Expected text is matched");
    
   }
   else{
    console.log("Expected text did not match");
    
   }

   //disabled

   let d=await page.locator("//span[text()='Disabled']").innerText()
    
   let c="Disabled"

   if (c === d){
    console.log("item is disabled");
    
   }

   else{
    console.log("Not disabled");
    
   }

   await page.locator("//div[@aria-haspopup='listbox']").click()

    await page.locator("(//label[text()='Miami'])[2]").click()

    
    await page.locator("(//label[text()='Istanbul'])[2]").click()

    let cities=await page.locator("//ul[@data-label='Cities']").innerText()

    console.log(cities);

    await page.close()
    






   


   
   




})