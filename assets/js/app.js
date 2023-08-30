let accordion = document.querySelectorAll(".accordion-items")

accordion.forEach(function (show) {
    show.addEventListener("click", function () {
        const hide = document.querySelector(".active")
        show.classList.toggle("active")
        hide && hide.classList.remove("active")
    })
});