button = document.querySelector("#modal-button");
function modal(evt) {
    btn = evt.currentTarget;
    if (!document.querySelector(".modal-div")) {
    modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-div");
    modalDiv.style.color = "black";
    modalDiv.style["background-color"] = "white";
    modalDiv.innerText = "Placeholder text for a placeholder div, in a placeholder modal inside a placeholder world."
    modalDiv.style.height = "200px";
    modalDiv.style.width = "200px";
    modalDiv.style.margin = "auto auto";
    modalDiv.style.padding = "10px 10px";
    modalDiv.style["z-index"] = "10";
    modalDiv.style.opacity = "1";
    modalDiv.style.position = "fixed";
    modalDiv.style.left = "33vh";
    modalDiv.style.top = "33vh";
    cross = document.createElement("img");
    cross.src = "images/cross-close-svgrepo-com.svg";
    cross.style.width = "20px";
    cross.style.height = "20px";
    cross.style["z-index"] = "1";
    cross.style.position = "fixed";
    cross.style.left = "63vh";
    cross.style.top = "34vh";
    cross.addEventListener("click", (evt) => {
        btn = evt.currentTarget
        document.querySelector(".modal-div").style.display = "none";
        document.querySelector("#modal-button").style.display = "block";
        document.querySelector(".anti-modal").style.display = "none";
        document.querySelector("#modal-button").addEventListener("click", modal)
        document.querySelector("body").style.overflow = "visible";
    })
    document.querySelector(".anti-modal").appendChild(modalDiv);
    document.querySelector(".modal-div").appendChild(cross);
    }
    else {
        document.querySelector(".modal-div").style.display = "block";
    }
    btn.removeEventListener("click", modal);
    btn.style.display = "none";
    document.querySelector(".anti-modal").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
}

function antiModal(evt) {
    if( evt.target !== this) return;
    btn = evt.currentTarget;
    if (!(btn.classList == ".modal-div")) {
        document.querySelector("body").style.overflow = "visible";
    document.querySelector(".modal-div").style.display = "none";
    document.querySelector("#modal-button").style.display = "block";
    btn.style.display = "none";
    document.querySelector("#modal-button").addEventListener("click", modal)
    }
}

document.querySelector(".anti-modal").addEventListener("click", antiModal)
button.addEventListener("click", modal);