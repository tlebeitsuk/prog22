// fetch(
//   "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=rain"
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

async function getRain(position) {
  console.log("position :", position);

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&daily=precipitation_sum&timezone=auto`
  );
  const data = await response.json();

  console.log("data : ", data);

  const image = document.querySelector("img");
  const text = document.querySelector("#text");
  const precipitation = data.daily.precipitation_sum[1];

  if (precipitation > 0) {
    // rain, do stuff
    image.src = "rain.png";
    text.innerHTML = `
    <h1>Kom ihåg <br>kurakläder!</h1>
    <p>${precipitation} mm</p>`;
  } else {
    // no rain, do stuff
    image.src = "sun.png";
    text.innerHTML = "<h1>Inga kurakläder<br> behövs idag!</h1>";
  }
}

function getLocation() {
  // Promt for user location and pass position to getRain-function
  navigator.geolocation.getCurrentPosition(getRain);
}

// Call function to get browser location
getLocation();
