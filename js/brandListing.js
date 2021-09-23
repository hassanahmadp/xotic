const createButton = document.querySelector(".pageHead button");
const cross = document.querySelector(".cross");
const createColor = document.querySelector(".createColor");
const colorBox = document.querySelector(".colorBox");
const colorBoxClose = document.querySelector(".colorBox img[alt='cross sign']");
const colorBoxCloseBtn = document.querySelector(".colorBox button:nth-child(1)");
const createOverLay = document.querySelector(".cnp.createNew-overLay");

// show create brand from
createButton.addEventListener("click", () => {
  createOverLay.classList.add("active");
});
cross.addEventListener("click", () => {
  createOverLay.classList.remove("active");
});

// show color box
createColor.addEventListener("click", () => {
  colorBox.classList.add("active");
});

colorBoxClose.addEventListener("click", () => {
  colorBox.classList.remove("active");
});
colorBoxCloseBtn.addEventListener("click", () => {
  colorBox.classList.remove("active");
});
