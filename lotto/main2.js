function doNumber() {
  const number = Math.floor(Math.random() * (40 - 1) + 1);

  document.querySelector("#numbers").innerHTML += `<h1>${number}</h1>`;
}
