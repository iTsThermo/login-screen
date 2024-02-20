function requiredText(elem) {
    console.log("Input is invalid");
    const parent = document.getElementById(elem);
    parent.style.cssText = "border: 1px solid red;"
    const text = document.getElementById(elem+'-p');
    let name;
    switch(elem){
        case "first_name":
            name = "first name";
            break;
        case "last_name":
            name = "last name";
            break;
        case "email":
            name = "e-mail";
            break;
        case "phone_number":
            name = "phone number";
            break;
        case "password":
            name = "password";
            break;
        case "confirm_password":
            name = "password";
            break;
    }
    text.textContent = "*Enter a valid "+name;
}

function clearError(elem){
    const parent = document.getElementById(elem);
    parent.style.cssText = "border: 1px solid transparent;"
    const text = document.getElementById(elem+'-p');
    text.textContent = "";
}

function passwordError(elem){
    const parent = document.getElementById(elem);
    parent.style.cssText = "border: 1px solid red";
    const text = document.getElementById('password-p');
    text.textContent = "*Passwords do not match";
}

function validate(event){
    let input = document.getElementsByTagName("input");
    let flag = true;    
    const pass = document.getElementById("password");
    const pass_c = document.getElementById("confirm_password");

    for (let i = 0; i < input.length; i++){
        if (input[i].value == ""){
            console.log(input[i].id);
            requiredText(input[i].id);
            flag = false;
        }
        else{
            clearError(input[i].id);
        }
    }

    if (pass.value != pass_c.value || pass.value == "" || pass_c.value == ""){
        passwordError("password");
        passwordError("confirm_password");
        flag = false;
    }
    else{
        clearError("password");
        clearError("confirm_password");
    }

    if (!flag){
        event.preventDefault();
    }
    return flag;
}

