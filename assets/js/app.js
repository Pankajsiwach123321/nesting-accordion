let accordion1 = document.querySelectorAll(".accordion-items1")

accordion1.forEach(function (show1) {
    show1.addEventListener("click", function () {
        const hide = document.querySelector(".active1")
        show1.classList.toggle("active1")
        hide && hide.classList.remove("active1")
    })
});
let accordion2 = document.querySelectorAll(".accordion-items2")

accordion2.forEach(function (show2) {
    show2.addEventListener("click", function () {
        const hide = document.querySelector(".active2")
        show2.classList.toggle("active2")
        hide && hide.classList.remove("active2")
    })
});
let accordion3 = document.querySelectorAll(".accordion-items3")

accordion3.forEach(function (show3) {
    show3.addEventListener("click", function () {
        const hide = document.querySelector(".active3")
        show3.classList.toggle("active3")
        hide && hide.classList.remove("active3")
    })
});