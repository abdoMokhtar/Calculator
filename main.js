const number = document.querySelectorAll("span");
const show = document.querySelector("p.show");
let clear = document.querySelector(".clear");
let delet = document.querySelector(".delete");

number.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.textContent == "=") {
      let calc = eval(show.textContent);
      if (calc < 1) {
        show.textContent = calc.toFixed(1);
      } else {
        show.textContent = calc;
      }
    } else {
      show.textContent += ele.textContent;
    }
  });
});

clear.addEventListener("click", () => {
  show.textContent = "";
});

delet.addEventListener("click", () => {
  show.textContent = show.textContent.toString().slice(0, -1);
});
