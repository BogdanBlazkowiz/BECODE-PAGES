function username (evt) {
    evt.preventDefault();
    div = evt.currentTarget;
    target = evt.target;
    input = div.querySelector("input");
    para = div.querySelector("p");
    if (target.id == "submit") {
        currentInput = input.value;
        if (currentInput.length < 11 && currentInput.length > 4 && currentInput == currentInput.toLowerCase()) {
            input.style.color = "green";
            para.innerText = "";
        }
        else {
            input.style.color = "red";
            para.innerText = "Username must be only lowercase and at least 5 characters and at most 10 characters."
            para.style.color = "red";
        }
    }
}

function email (evt) {
    evt.preventDefault();
    div = evt.currentTarget;
    target = evt.target;
    input = div.querySelector("input");
    para = div.querySelector("p");
    if (target.id == "submit") {
        currentInput = input.value;
        const regexEmail = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        matched = currentInput.match(regexEmail);
        if (matched && matched[0] == currentInput) {
            input.style.color = "green";
            para.innerText = "";
        }
        else {
            input.style.color = "red";
            para.innerText = "Email adress must be valid."
            para.style.color = "red";
        }
    }
}

function password (evt) {
    evt.preventDefault();
    div = evt.currentTarget;
    target = evt.target;
    input = div.querySelector("input");
    para = div.querySelector("p");
    if (target.id == "submit") {
        currentInput = input.value;
        if (currentInput.length < 16 && currentInput.length > 7) {
            input.style.color = "green";
            para.innerText = "";
        }
        else {
            input.style.color = "red";
            para.innerText = "Password must be at least 8 characters and at most 15 characters."
            para.style.color = "red";
        }
    }
}

function passwordConf (evt) {
    evt.preventDefault();
    div = evt.currentTarget;
    target = evt.target;
    input = div.querySelector("input");
    para = div.querySelector("p");
    if (target.id == "submit") {
        currentInput = input.value;
        if (currentInput == div.previousSibling.previousSibling.querySelector("input").value) {
            input.style.color = "green";
            para.innerText = "";
        }
        else {
            input.style.color = "red";
            para.innerText = "Both passwords need to be the same."
            para.style.color = "red";
        }
    }
}
document.querySelectorAll("div")[0].addEventListener("click", username)
document.querySelectorAll("div")[1].addEventListener("click", email)
document.querySelectorAll("div")[2].addEventListener("click", password)
document.querySelectorAll("div")[3].addEventListener("click", passwordConf)