let button = document.querySelector(".button");
let bulb = document.getElementById("bulb");
let all = document.getElementById("all");
let count = 0;

button.addEventListener("click", function() {
    if (count == 0) {
        button.innerHTML = "OFF"
        bulb.style.backgroundColor = "yellow"; // Bulb is on
        all.style.backgroundColor = "white"; // All background is transparent
        count = 1;
    } else {
        button.innerHTML = "ON";
        bulb.style.backgroundColor = "white"; // Bulb is off
        all.style.backgroundColor = "yellow"; // All background is yellow
        count = 0;
    }
});

button.addEventListener("dblclick", function() {
    if (count == 0 || count == 1){
        bulb.style.backgroundColor = "white";
        button.style.backgroundColor = "white";
        all.style.backgroundColor = "white";
        button.innerHTML = "ON"
    }

})
