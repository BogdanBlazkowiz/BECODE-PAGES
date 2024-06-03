function doStuff() {
    for (i = 0; i<100; i++) {
        newButton = document.createElement("button");
        newButton.innerText = "I am button " + (i+1);
        document.querySelector("div").appendChild(newButton);
    }
    document.querySelector("h1").innerText = "There are a lot of buttons here !";
}

setTimeout(doStuff, 2000);
