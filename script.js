let slide = 0;
let click = true;

let cardGroups = Array.from(document.getElementsByClassName("groups-container")[0].children);

let left = document.getElementsByClassName("left")[0];
let right = document.getElementsByClassName("right")[0];

const moveSlide = () => {
    cardGroups.forEach((e) => {
        e.classList.remove("hide-left");
        e.classList.remove("hide-right");
        e.classList.add("hide");
    });

    if (slide <= 0) {
        cardGroups[cardGroups.length - 1].classList.add("hide-left");

        cardGroups[slide].classList.remove("hide-left");
        cardGroups[slide].classList.remove("hide-right");
        cardGroups[slide].classList.remove("hide");

        cardGroups[slide + 1].classList.add("hide-right");
    } else if (slide >= (cardGroups.length - 1)) {
        cardGroups[slide - 1].classList.add("hide-left");

        cardGroups[slide].classList.remove("hide-left");
        cardGroups[slide].classList.remove("hide-right");
        cardGroups[slide].classList.remove("hide");

        cardGroups[0].classList.add("hide-right");
    } else {
        cardGroups[slide - 1].classList.add("hide-left");

        cardGroups[slide].classList.remove("hide-left");
        cardGroups[slide].classList.remove("hide-right");
        cardGroups[slide].classList.remove("hide");

        cardGroups[slide + 1].classList.add("hide-right");
    }
}

left.addEventListener("click", (e) => {
    if (click == true) {
        slide -= 1;
        if (slide < 0) {
            slide = cardGroups.length - 1;
        }

        moveSlide();

        setTimeout(() => {
            click = true;
        }, 500);

    }
    click = false;
});

right.addEventListener("click", (e) => {
    if (click == true) {
        slide += 1;
        if (slide > (cardGroups.length - 1)) {
            slide = 0;
        }

        moveSlide();

        setTimeout(() => {
            click = true;
        }, 500);

    }
    click = false;
});

moveSlide();
