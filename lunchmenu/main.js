import "uno.css";
import "@unocss/reset/tailwind.css";
import "./style.css";
import { getMenu } from "./firebase";

const data = await getMenu();

document.querySelector("#monday").innerText = data.monday.text;
document.querySelector("#tuesday").innerText = data.tuesday.text;
document.querySelector("#wednesday").innerText = data.wednesday.text;
document.querySelector("#thursday").innerText = data.thursday.text;
document.querySelector("#friday").innerText = data.friday.text;

document.querySelector("#monday-count").innerText = data.monday.count;
document.querySelector("#tuesday-count").innerText = data.tuesday.count;
document.querySelector("#wednesday-count").innerText = data.wednesday.count;
document.querySelector("#thursday-count").innerText = data.thursday.count;
document.querySelector("#friday-count").innerText = data.friday.count;

document.querySelectorAll(".relative").forEach((icon) => {
  icon.addEventListener("click", (event) => {
    upVote();
  });
});
