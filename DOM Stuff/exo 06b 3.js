liEles = document.querySelector("ul").querySelectorAll("li");
console.log(liEles);
for (i=0; i<5;i++) {
    liEles[i].classList.toggle("highlight");
}