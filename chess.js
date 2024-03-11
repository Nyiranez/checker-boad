const boxes = document.getElementsByClassName("box")
const cerc = document.getElementsByClassName("cercle")[0]

let prevPosition = { top: 0, left: 0 }

let handleClickEvent = function (event) {
    console.log(event)
    // console.log("Target offset left: " + event.target.offsetLeft + ", Target offset top: " + event.target.offsetTop)
    console.log(prevPosition)

    let offsetTop = event.target.offsetTop
    let offsetLeft = event.target.offsetLeft

    if (prevPosition.top != offsetTop && prevPosition.left != offsetLeft) {
        cerc.style.top = offsetTop + "px";
        cerc.style.left = offsetLeft + "px";

        // Set to new values                                                               
        prevPosition.top = offsetTop
        prevPosition.left = offsetLeft
    }
}

// Register Click event listener to all elements with class 'box'
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", handleClickEvent)
}

