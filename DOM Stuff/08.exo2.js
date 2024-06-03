button = document.querySelector("button");

function colours () {
    newRgb = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
    document.querySelector("body").style.backgroundColor = newRgb;
    document.querySelector("h1").innerText = newRgb;
}

button.addEventListener("click", colours);