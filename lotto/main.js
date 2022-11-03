let count = 0;

function lockNumber(element) {
  if (element.classList == "locked") {
    element.classList.remove("locked");
    count--;
  } else if (count < 7) {
    element.classList.add("locked");
    count++; // count = count + 1
  }

  console.log(count);
}

function generateNumbers() {
  while (count < 7) {
    // 1. random number
    const rNumber = Math.floor(Math.random() * 40) + 1;

    console.log(rNumber);

    // 2. get element with number
    const element = document.getElementById(rNumber);

    // 3. check if number is locked, if not lock it
    if (element.classList != "locked") {
      // 4. "lock" the number (add class "locked")
      lockNumber(element);
    }
  }
}

function init() {
  const left = document.getElementById("left");

  for (let i = 1; i < 13; i++) {
    const newDiv = document.createElement("div");
    newDiv.id = "box" + i;

    for (let i = 1; i < 41; i++) {
      const newButton = document.createElement("button");

      newButton.id = i;
      newButton.innerHTML = i;
      newButton.onclick = function () {
        lockNumber(this);
      };

      newDiv.appendChild(newButton);
    }

    left.appendChild(newDiv);
  }
}

init();
