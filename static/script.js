function buttonToggle(e) {
    const animateWindow = document.getElementById(e.dataset.for);

    // toggle the button
    if (e.classList.contains("pressed")) {
        e.classList.remove("pressed");
        e.classList.add("unpressed");

        if (animateWindow.classList.contains("slideIn")) {
            animateWindow.classList.remove("slideIn");
        }
        animateWindow.classList.add("slideOut");

    }
    else if (e.classList.contains("unpressed")) {
        e.classList.remove("unpressed");
        e.classList.add("pressed");

        if (animateWindow.classList.contains("slideOut")) {
            animateWindow.classList.remove("slideOut");
        }
        animateWindow.classList.add("slideIn");

    }

    // trigger the toggle logic
    // tween the window in
    console.log(animateWindow.classList);


}

// set onclick to toggle pressing/unpressing of things for all nav buttons
const buttons = document.getElementsByClassName("button");
const windows = document.getElementsByClassName("window");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons.item(i);
    button.addEventListener("click", function() {
        buttonToggle(button);
    });
}

// trigger it for the first item
buttonToggle(buttons.item(0));
buttons.item(0).classList.add("autopressed");

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

// this observer is called on the elements, not the buttons
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const bounding = entry.boundingClientRect;
        const root = entry.rootBounds;

        // check vertical intersection only
        const verticallyVisible = bounding.top < root.bottom && bounding.bottom > root.top;

        if (verticallyVisible) {
            // get the index of element
            const button = document.getElementById("button_" + entry.target.id);
            if (button.classList.contains("unpressed") && !button.classList.contains("autopressed")) {
                buttonToggle(button);
                button.classList.add("autopressed");
            }
        }
    })
}, {
    root: null,
    threshold: 0
});

for (let i = 1; i < windows.length; i++) {
    const window = windows.item(i);
    observer.observe(window);
}