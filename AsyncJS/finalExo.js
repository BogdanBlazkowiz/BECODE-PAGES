inputField = document.querySelector(".search-field")


inputField.addEventListener("keyup", searchFieldInput)


async function searchFieldInput ({key}) {
    if (key === "Enter") {
        const listOfMeals = await getMeals(inputField.value)
        console.log(listOfMeals)
        makeMealsContainer()
        for (meal of listOfMeals.meals) {
            makeMealElement(meal);
        }
    }
}

async function getMeals (keyword) {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
    const response = await fetch(url, {
        headers: {
            accept: "application/json"
        }
    });
    const jsonList = await response.json().then((data) => {
        return data
    });
    return jsonList;
}

async function getMealById(id) {
    url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const response = await fetch(url, {
        headers: {
            accept: "application/json"
        }
    });
    const jsonList = await response.json().then((data) => {
        return data
    });
    return jsonList;
}



function makeMealElement (mealObj) {
    id = mealObj.idMeal;
    meal = mealObj.strMeal;
    imageSrc = mealObj.strMealThumb;
    template = document.querySelector(".image-template")
    mealElem = document.createElement("div");
    mealElem.innerHTML = template.innerHTML;
    mealElem.id = id
    mealElem.classList = "meal-card"
    mealElem.querySelector("h6").innerText = meal
    mealElem.querySelector("img").src = imageSrc
    mealElem.addEventListener("click", makeModal)
    document.querySelector(".recipes-container").appendChild(mealElem);
}

async function makeModal (evt) {
    recipe = evt.currentTarget;
    id = recipe.id;
    console.log(id)
    mealJson = await getMealById(id);
    mealInfo = mealJson.meals[0]
    console.log(mealInfo)
    meal = mealInfo.strMeal;
    imageSrc = mealInfo.strMealThumb;
    instructions = mealInfo.strInstructions;
    modalElem = document.createElement("div");
    modalElem.innerHTML = document.querySelector(".meal-modal-template").innerHTML;
    modalElem.id = id
    modalElem.classList = "meal-modal"
    modalElem.querySelector("h2").innerText = meal;
    modalElem.querySelector("img").src = imageSrc
    modalElem.querySelector("p").innerText = instructions
    list = modalElem.querySelector("ul");
    i = 1;
    while (mealInfo[`strIngredient${i}`]) {
        listText = mealInfo[`strIngredient${i}`]
        listText += ", "
        listText += mealInfo[`strMeasure${i}`]
        listElem = document.createElement("li");
        listElem.innerText = listText;
        list.appendChild(listElem);
        i += 1
    }
    document.querySelector(".search-container").style.filter = "blur(2px)";
    document.querySelector(".big-container").style.filter = "blur(2px)";
    document.querySelector("body").appendChild(modalElem);
    antiModalBtn = document.createElement("div");
    antiModalBtn.classList = "anti-modal";
    antiModalBtn.addEventListener("click", antiModal)
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").appendChild(antiModalBtn)
}

function antiModal(evt) {
    console.log("test");
    antiModalBtn = evt.currentTarget;
    document.querySelectorAll(".meal-modal").forEach((elem) => elem.remove());
    document.querySelector(".search-container").style.filter = "blur(0)";
    document.querySelector(".big-container").style.filter = "blur(0)";
    document.querySelector("body").style.overflow = "visible";
    antiModalBtn.remove();
}

function makeMealsContainer () {
    template = document.querySelector(".container-template")
    let mealElem;
    if (!document.querySelector(".meals-container")) {
        mealElem = document.createElement("div");
    }
    else {
        mealElem = document.querySelector(".meals-container")
    }
    mealElem.innerHTML = template.innerHTML;
    mealElem.classList = "meals-container"
    mealElem.querySelector("h4").innerText="You searched for: " + document.querySelector(".search-field").value;
    document.querySelector(".big-container").appendChild(mealElem);
}


