/* ========================= Theme Light and Dark Mode ========================= */
const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click", () => {
    dayNight.querySelector("em").classList.toggle("fa-sun")
    dayNight.querySelector("em").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("em").classList.add("fa-sun")
    }
    else {
        dayNight.querySelector("em").classList.add("fa-moon")
    }
})