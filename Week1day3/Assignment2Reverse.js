function reverseString(name){

let newreverse=""
   //console.log(name.split(""));

   for(let i=name.length-1; i>=0;i--){

    console.log(name[i])

    newreverse+=name[i]

   
    
   }
   console.log(newreverse);

   if(name === newreverse){
    console.log("true");

    
   }
   else{
    console.log("false");
    
   } 


   
}
let string="malayalam"
reverseString(string)