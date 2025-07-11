let scrollContainer = document.querySelector(".slider-main");
let leftbtn = document.getElementById("leftbtn");
let rightbtn = document.getElementById("rightbtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})

nextBtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollleft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});