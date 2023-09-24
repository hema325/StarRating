
const stars = document.querySelectorAll(".rating-box>.stars>i");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        stars.forEach((str, idx) => {
            if (idx <= index)
                str.classList.add("active");
            else
                str.classList.remove("active");
        });
    });

    star.addEventListener("mouseover", () => {
        stars.forEach((str, idx) => {
            if (idx <= index)
                str.classList.add("hovering");
            else
                str.classList.remove("hovering");
        })
    });

    star.parentElement.addEventListener("mouseleave", () => {
        stars.forEach(str => {
            str.classList.remove("hovering");
        })
    });
});