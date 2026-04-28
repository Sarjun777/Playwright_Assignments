class LoginTest{

    public BrowserName="Chrome";
    private  password="admin123";
    protected username="tester";

public openapplication(){
    console.log("Open application");
    
}

    public login(){
        console.log("login ");

        console.log("Username : ",this.username);
        console.log("password : ",this.password);
        
        
        
    }  
   
   
    
    

}


let lt=new LoginTest()
console.log(lt.BrowserName);
lt.openapplication()
lt.login()


