import "uno.css";
import "@unocss/reset/tailwind.css";
import "./style.css";
import { upVote } from "./firebase";

document.querySelectorAll(".relative").forEach((icon, index) => {
  icon.addEventListener("click", (event) => {
    upVote(index);
  });
});
