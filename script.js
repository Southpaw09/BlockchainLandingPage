const tabButtons = document.querySelectorAll(".tab-btn");
const tabContent = document.querySelectorAll(".tab-content");

console.log(tabContent);

// for (let i = 0; i < tabButtons.length; i++) {
//   for (let j = 0; j < tabButtons.length; j++) {
//     tabButtons[j].classList.remove("active");
//     tabContent[j].classList.remove("active");
//   }
//   tabButtons[i].addEventListener("click", () => {
//     tabButtons[j].classList.add("active");
//     tabContent[j].classList.add("active");
//   });
// }

tabButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    for (let j = 0; j < tabButtons.length; j++) {
      tabButtons[j].classList.remove("active");
      tabContent[j].classList.remove("active");
    }
    tabButtons[index].classList.add("active");
    tabContent[index].classList.add("active");
  });
});
