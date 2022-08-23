let users = JSON.parse(localStorage.getItem('users')) || [];

// Login()
class user{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    validate_email(){
        let res = this.email.includes("@")?true:false;
        return res;
    }
    Login(){
        if(this.validate_email()){
            let flag = false;
            users.forEach(({email,password})=> {
                if (email == this.email && password == this.password) {
                    flag = true;
                } 
            });
            if(flag){
                alert("Log in Successful!");
                window.location.href = "profile.html";
            }
            else{
                alert("Users doesn't exist!");
            }
        }
    }
}

let Login = ()=>{
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;
    let u1 = new user(email,password);
    u1.Login();
}