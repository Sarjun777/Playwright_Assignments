import{test,chromium,webkit} from "@playwright/test"
test('launch 2 different browsers',async()=>{

    const browser=await chromium.launch({headless:false,channel:"msedge"})
   // const browser1=await chromium.launch({headless:false,channel:"Webkit"})
    const context=await browser.newContext()
    const page=await context.newPage()
   await page.goto("https://www.redbus.in")
    const edgetitle=await page.title()
    const edgeurl=await page.url()
    console.log ("redbus  title : ",edgetitle);
    console.log("redbus url : ",edgeurl);

    const webkitbrowser=await webkit.launch({headless:false})
    const webkitcontext=await webkitbrowser.newContext()
    const webkitpage=await webkitcontext.newPage()
    await webkitpage.goto("https://www.flipkart.com")
    const webkittitle=await webkitpage.title()
    const webkiturl=await webkitpage.url()

    console.log("Flipkart title : " ,webkittitle);
    console.log("Flipkart Url : ",webkiturl);
    
    
    
    


})