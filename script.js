const toggle = document.getElementById("toggle");
const hiddenInput = document.getElementById("toggleInput");
const imgOne = document.querySelector(".img-presencial");
const imgTwo = document.querySelector(".img-online");

const activeFilter = "invert(54%) sepia(72%) saturate(2590%) hue-rotate(182deg) brightness(98%) contrast(97%)";

hiddenInput.value = "presencial";
imgOne.style.filter = activeFilter;
imgTwo.style.filter = "none";

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");

    if (toggle.classList.contains("active")) {
        hiddenInput.value = "online";
        imgTwo.style.filter = activeFilter;
        imgOne.style.filter = "none";
    } else {
        hiddenInput.value = "presencial";
        imgOne.style.filter = activeFilter;
        imgTwo.style.filter = "none";
    }
});
