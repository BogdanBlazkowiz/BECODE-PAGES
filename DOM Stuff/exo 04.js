list_items = document.getElementsByClassName("list-item");
// first item text
firstText = list_items[0].innerText;
console.log(firstText);
// new item with same text as first and at the end
newItem = document.createElement("li");
newItem.classList.add("list-item");
newItem.innerText = firstText;
document.querySelector("ul").appendChild(newItem);
// all purple
list_items = document.getElementsByClassName("list-item");
for (i = 0; i<list_items.length; i++) {
    list_items[i].style.color = "purple"
}
// last gold
list_items[list_items.length-1].style.color= "gold";
// red Hall
list_items[3].innerHTML = "Annie ";
const redText = document.createElement("span");
redText.innerText = "Hall";
redText.style.color = 'red';
list_items[3].append(redText);
