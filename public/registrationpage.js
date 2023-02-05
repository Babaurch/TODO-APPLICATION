let signupBtn = document.getElementById("signUp");
let signupBtn2 = document.getElementById("log2");
let signInBtn = document.getElementById("signIn");
let signInBtn2 = document.getElementById("log1");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let register = document.getElementById("signUpBtn");
let login = document.getElementById("signInBtn");
// const form = document.getElementById("form1");




signInBtn.onclick = () =>{
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    register.classList.add("disabled")
    login.classList.remove("disabled")
    signInBtn2.classList.add("disable");
    signupBtn2.classList.remove("disable");
    // location.refresh();  
};

signupBtn.onclick = () =>{
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    register.classList.remove("disabled")
    login.classList.add("disabled")
    signupBtn2.classList.add("disable");
    signInBtn2.classList.remove("disable"); 
    // location.refresh(); 
};


//USER REGISTRATION
const registerUser = () =>{
    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
try {
    let signUpData = {
        "fullname": fullname.value,
        "email": email.value,
        "password": password.value,
        }
    
        fetch('https://todoapp-cu0k.onrender.com/register', {
        
        method: 'POST',
        body: JSON.stringify(signUpData),
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
        })
        .then(response => response.json())
        .then(result => {
        console.log(result);
        window.alert(result.message);
        // window.alert(JSON.stringify(result.status));
    })
} catch (error) {
    console.log(error);
}
}
// .catch((error) => {
   
     
//     });
// };   


//USER LOGIN
const loginUser = () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    let loginData = {
        "email": email.value,
        "password": password.value,
    }

    fetch('https://todoapp-cu0k.onrender.com/login', {

        method: 'POST',
        body: JSON.stringify(loginData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            window.alert(JSON.stringify(result.message));
        if(result.status == "Success"){
            location.href = "/task";
        //   return  window.location.replace("/views/task.ejs");
        //   return res.redirect("task");
        }
            let welcome = document.getElementById("welcome");
            welcome.innerText = `welcome`;
        }).catch((error) => {
            console.log(error);
        });

};










