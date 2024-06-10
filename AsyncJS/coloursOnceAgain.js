function generateBG (color, delay) {
    randomNum = Math.random();
    return new Promise((resolve, reject) => {
        if (randomNum > 0.5) {
            reject("too big");
        }
        setTimeout(() => {
            document.querySelector("body").style["background-color"] = color;
            resolve("done");
        }, delay);
    })
}
async function setBG () {
    for (color of ["blue", "yellow", "red", "cyan", "violet", "green", "purple"]) {
        try {
            await generateBG(color, 1000);
        }
        catch {
            console.log("oh no! an error");
        }
    }
}

setBG()