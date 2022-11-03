function init() {
  const numbers = [];

  // Generate 25 random numbers
  for (let i = 0; i < 25; i++) {
    // If button is number 12 (center), create a hit button
    if (i == 12) {
      const center = document.createElement("button");
      center.innerText = "🤹‍♀️";
      center.classList.add("hit");
      document.querySelector("section").appendChild(center);
      continue; // Skip to next iteration
    }

    // Create a number button

    // Generate a random number between 1 and 75
    const number = Math.floor(Math.random() * 75) + 1;

    // If the number is already in the array, loop again
    if (numbers.includes(number)) {
      i--; // Decrement i to loop again
      continue; // Skip to next iteration
    }

    // Add the number to the array
    numbers.push(number);

    // Create a button element with the number
    const button = document.createElement("button");
    button.innerText = number;

    // Add click event listener
    button.addEventListener("click", function () {
      // If already checked, remove the hit class
      if (button.classList == "hit") {
        button.classList.remove("hit");
      } else {
        button.classList.add("hit");
      }
    });

    // Add the button to the section
    document.querySelector("section").appendChild(button);
  }
}

init();
