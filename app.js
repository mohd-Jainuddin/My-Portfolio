// change theme logic start...

const allColor = [
  "green",
  "red",
  "brown",
  "purple",
  "blue",
  "maroon",
];
let count = 0;

let btn = document.getElementById("theme-btn");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  console.log("clicked");
  if (count == 6) {
    body.style.backgroundColor = "indigo";
    count = 0;
  } else {
    body.style.backgroundColor = allColor[count];
    count++;
  }
});
