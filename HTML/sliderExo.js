img = document.querySelector("img");
img.addEventListener("click", (e) => {
    imgTarget = e.currentTarget;
    document.querySelector(".menu").style.left = "0px";
    imgTarget.style.display = "none";
})
