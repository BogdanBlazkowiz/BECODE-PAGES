function promiseFactory () {
    return (new Promise((resolve) => {
        setTimeout(() => {
          resolve("working fine");
        }, 1000);
      }))
}

document.querySelector("body").style["background-color"] = "blue";

const colourPromise = promiseFactory();

colourPromise
.then((data) => {
    document.querySelector("body").style["background-color"] = "yellow";
    console.log(data);
    return promiseFactory();
})
.then((data) => {
    document.querySelector("body").style["background-color"] = "red";
    console.log(data);
    return promiseFactory();
})
.then((data) => {
    document.querySelector("body").style["background-color"] = "cyan";
    console.log(data);
    return promiseFactory();
})
.then((data) => {
    document.querySelector("body").style["background-color"] = "violet";
    console.log(data);
    return promiseFactory();
})
.then((data) => {
    document.querySelector("body").style["background-color"] = "green";
    console.log(data);
    return promiseFactory();
})
.then((data) => {
    document.querySelector("body").style["background-color"] = "purple";
    console.log(data);
    return promiseFactory();
})