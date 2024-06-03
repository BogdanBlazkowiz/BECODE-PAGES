buttons = document.querySelectorAll("button");

const peekaboo = (evt) => {
    button = evt.currentTarget;
    if (button.innerText == "Open tab") {
        console.log(button.innerText)
        button.nextSibling.nextSibling.style.display = "block";
        button.innerText = "Close tab";
        console.log(button.innerText)
    }
    else {
        button.nextSibling.nextSibling.style.display = "none";
        button.innerText = "Open tab";
    }
}
for (i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", peekaboo)
}
