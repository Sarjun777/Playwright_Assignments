function launchBrowser(browsername){

    if(browsername=="Chrome"){
        console.log("Chrome EXECUTED");
        
    }
    else{
        console.log("Invalid Input");
        
    }

}

let browser="Chrome"

launchBrowser(browser);

function runTests(testtype){


    switch(testtype){

        case "smoke":
            console.log("Smoke Testing");
            break;

        case "sanity":
            console.log("Sanity Testing");
            break;

        case "Regression":
            console.log("Regression Testing");
            break;

           default :
           
           console.log("Smoke");
           
                
            


            



    }
}
let test="smoke"
runTests(test);
runTests("sanity");
runTests("Regression");
runTests("nsjc");
