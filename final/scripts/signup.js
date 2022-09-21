
let users = JSON.parse(localStorage.getItem('users')) || [];
class user {
    constructor(email, number, password) {
        this.email = email;
        this.password = password;
        this.number = number
    }
    validate_email() {
        let res = this.email.includes("@")? true : false;
        console.log(res)
        return res;
    }
    signup() {
        if (this.validate_email()) {
            console.log("yes");
            let flag = false;
            users.forEach(({ email, password, number }) => {
                if (email == this.email && password == this.password) {
                    flag = true;
                }
            });
            if (flag) {
                alert("User Already Exist");
            }
            else {
                alert(`Welcome, Successfully Sign Up`);
                users.push(this);
                localStorage.setItem('users', JSON.stringify(users));
                window.location.href = "Onboarding.html"
            }
        }
    }
}
let signUp = () => {
    let Email = document.getElementById("email").value;
    let Password = document.getElementById('password').value;
    let Number = document.getElementById('number').value;
    let u1 = new user(Email, Number,Password );
    u1.signup()
    console.log(users);
}

// let signUp = () => {
// let Email = document.getElementById("email").value;
// let Password = document.getElementById('password').value;
// let Number = document.getElementById('number').value;
// let obj = {
//     email:Email,
//     password:Password,
//     number:Number
//   }
//
// } 