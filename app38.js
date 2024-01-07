let btn = document.querySelector("#one");

let currMode = "light";

btn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    document.querySelector("body").style.background = "red";
  } else {
    currMode = "light";
    document.querySelector("body").style.background = "yellow";
  }
  console.log(currMode);
});
