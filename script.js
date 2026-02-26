// Step 1: Get button
const button = document.getElementById("toggleBtn");

// Step 2: Track state (true = lights ON)
let isLightOn = true;

button.addEventListener("click", function() {

    // Toggle Tailwind classes on body
    document.body.classList.toggle("bg-white");
    document.body.classList.toggle("text-black");
    document.body.classList.toggle("bg-slate-900");
    document.body.classList.toggle("text-white");

    // Change button text based on state
    if (isLightOn) {
        button.innerText = "Turn On Lights";
        isLightOn = false;
    } else {
        button.innerText = "Turn Off Lights";
        isLightOn = true;
    }

});