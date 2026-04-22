import {expect, request, test} from "@playwright/test"
import { log } from "node:console"

const username="admin"
const password="sooM+H@w1P2P"
const login=`${username}:${password}`
const value=btoa(login)
console.log(value);

let id:any

test.describe.serial("run tests in serial",async()=>{
test("using api in playwright in POST ",async({request})=>{

    let responses=await request.post('https://dev231684.service-now.com/api/now/table/problem',
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${value}`

            },
            data:{

                "description":"login is not happening properly in service now"
               

            }
        }       )
    let res=await responses.json()
        console.log("response values",res);

        let resstatustext=await responses.statusText()
        console.log(resstatustext);

        await expect(resstatustext).toBe("Created")

        let resstatus= await responses.status()
        console.log(resstatus);

        await expect(resstatus).toBe(201)

        id=res.result.sys_id
        console.log(id);
        
})

test("fetch the information using get",async({request})=>{

    let responses=await request.get(`https://dev231684.service-now.com/api/now/table/problem/${id}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${value}`
            }
            

        }
    )

    let res=await responses.json()
    console.log(res);

    let resstatus=await responses.status()
    console.log(resstatus);

    await expect(resstatus).toBe(200)


    let resstatusText=await responses.statusText()
    console.log(resstatusText);

    await expect(resstatusText).toBe("OK")
    
    
    
})

test("Patch or update the information",async({request})=>{

    let responses=await request.patch(`https://dev231684.service-now.com/api/now/table/problem/${id}`,
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Basic ${value}`
            },
            data:{
                "description":"login not happening"
            }
            }

        
    )
    let res=await responses.json()
    console.log(res);

    let resstatus=await responses.status()
    console.log(resstatus);

    await expect(resstatus).toBe(200)

    let resstatusText=await responses.statusText()
    console.log(resstatusText);

    await expect(resstatusText).toBe("OK")

    

    
    
})

test("delete a record",async({request})=>{

    let responses=await request.delete(`https://dev231684.service-now.com/api/now/table/problem/${id}`,
        {
            headers:{
                 "Content-Type":"application/json",
                "Authorization":`Basic ${value}`
            }


    })

 //   let res=await responses.json()
  //  console.log(res);

    let resstatus= await responses.status()
    console.log(resstatus);

    await expect(resstatus).toBe(204)
    let resstatusText= await responses.statusText()
    console.log(resstatusText);
    await expect(resstatusText).toBe("No Content")

    
    
    
})


})