function buttonToggle(e) {

    // toggle the button
    if (e.classList.contains("pressed")) {
        e.classList.remove("pressed");
        e.classList.add("unpressed");
    }
    else if (e.classList.contains("unpressed")) {
        e.classList.remove("unpressed");
        e.classList.add("pressed");
    }

    // trigger the toggle logic
}

// set onclick to toggle pressing/unpressing of things for all nav buttons
const buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    const button = buttons.item(i);
    button.addEventListener("click", function() {
        buttonToggle(button);
    });
}

// trigger it for the first item
buttonToggle(buttons.item(0));

let blinked = false;
const shellBlinker = document.getElementById("fake-input");
function toggleBlink() {
    if (blinked) {
        shellBlinker.textContent = "guest $  ";
        blinked = false;
    }
    else {
        shellBlinker.textContent = "guest $ █";
        blinked = true;
    }

}

// set the fake input to blink
window.setInterval(toggleBlink, 1000);