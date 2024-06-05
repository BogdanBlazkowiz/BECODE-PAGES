inputField = document.querySelector("#add");
addBtn = document.querySelector("#add-button");
addBtn.addEventListener("click", (evt) => {
    text = inputField.value
    localStorage.setItem(`${text}`, text);
    todoList()
})


function todoList() {
    if (document.querySelector("div") != null) {
        div = document.querySelector("div")
        div.remove()
    }
    div2 = document.createElement("div")
    for (let i = 0; i < Object.keys(localStorage).length; i++) {
        text = localStorage.getItem(Object.keys(localStorage)[i])
        newEle = document.createElement("div")
        newEle.style["border-bottom"] = "1px solid gray"
        newEle.style.width = "300px"
        field = document.createElement("p")
        newEle.appendChild(field)
        buttonDel = document.createElement("button")
        newEle.appendChild(buttonDel)
        buttonDel.id = `${text}`
        field.innerText = text
        newEle.style.color = "gray"
        buttonDel.innerText = "delete"
        newEle.style.display = "flex"
        buttonDel.style.height = "20px"
        buttonDel.style.margin = "15px";
        buttonDel.addEventListener("click", (e) => {
            btn = e.currentTarget
            console.log(btn.parentElement)
            localStorage.removeItem(btn.parentElement.querySelector("p").innerText)
            todoList()
        })
        div2.appendChild(newEle);
    }
    document.querySelector("body").appendChild(div2)
}



localStorage.clear()
