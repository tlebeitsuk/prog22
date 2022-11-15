// The "switch" statement
// ============================================
// A switch statement can replace multiple if checks

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert("Too small");
//     break;
//   case 4:
//     alert("Exactly!");
//     break;
//   case 5:
//     alert("Too big");
//     break;
//   default:
//     alert("I don't know such values");
// }

let browser = "Firefox";

switch (browser) {
  case "Edge":
    alert("You've got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Opera":
    alert("Okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

// Same with if..else
if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Opera") {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
