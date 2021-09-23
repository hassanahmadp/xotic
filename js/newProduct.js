const searchCat = document.querySelector(".searchCat");
const catInput = document.querySelector("#catInput");
const cat = document.querySelector(".cat");
const catSel = document.querySelector(".input .desCat_selected");
const changeCat = document.querySelector(".input .desCat_selected a");
const catli = document.querySelectorAll(".cat li");
const disclaim = document.querySelector(".disclaim");

// cat toggle
catInput.addEventListener("focusin", () => {
  cat.classList.add("active");
});
catInput.addEventListener("focusout", () => {
  setTimeout(() => {
    cat.classList.remove("active");
  }, 200);
});
for (let i = 0; i < catli.length; i++) {
  catli[i].addEventListener("click", () => {
    catSel.classList.add("active");
    disclaim.classList.add("active");
  });
}
changeCat.addEventListener("click", () => {
  // catInput.textContent = '';
  disclaim.classList.remove("active");
  catSel.classList.remove("active");
  catInput.focus();
});
