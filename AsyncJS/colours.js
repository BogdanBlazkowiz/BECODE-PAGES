document.querySelector("body").style["background-color"] = "blue";
setTimeout(() => {
    document.querySelector("body").style["background-color"] = "yellow";
    setTimeout(() => {
        document.querySelector("body").style["background-color"] = "red";
        setTimeout(() => {
            document.querySelector("body").style["background-color"] = "cyan";
            setTimeout(() => {
                document.querySelector("body").style["background-color"] = "violet";
                setTimeout(() => {
                    document.querySelector("body").style["background-color"] = "green";
                    setTimeout(() => {
                        document.querySelector("body").style["background-color"] = "purple";
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)