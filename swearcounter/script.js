let count = 0;

document.querySelector("button").addEventListener("click", function () {
  // count = count + 1
  count++;

  document.querySelector("span").innerText = count;

  if (count == 10) alert("Kvaso!");
});
