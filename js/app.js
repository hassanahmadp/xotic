const burger = document.querySelector(".burger");
const blackBell = document.querySelector(".blackBell");
const whiteBell = document.querySelector(".whiteBell");
const nav = document.querySelector("header ul.fakeMenu");
const downArrow = document.querySelectorAll('.realMenu img[alt="down-arrow"]');
const dropList = document.querySelectorAll(".dropList");
const dropListFake = document.querySelectorAll(".dropList-fake");
const fakeDownArrow = document.querySelectorAll(".fakeMenu img[alt='down-arrow']");

// menu toggle
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  blackBell.classList.toggle("active");
  whiteBell.classList.toggle("active");
  nav.classList.toggle("active");
});

// toggle dropdown
for (let i = 0; i < downArrow.length; i++) {
  downArrow[i].addEventListener("click", () => {
    for (let j = 0; j < downArrow.length; j++) {
      if (i !== j) {
        dropList[j].classList.remove("active");
      }
    }
    dropList[i].classList.toggle("active");
  });
}

// toggle fake dropdown
for (let i = 0; i < fakeDownArrow.length; i++) {
  fakeDownArrow[i].addEventListener("mouseover", () => {
    dropListFake[i].classList.add("active");
  });
  fakeDownArrow[i].addEventListener("mouseleave", () => {
    dropListFake[i].classList.remove("active");
  });
}
