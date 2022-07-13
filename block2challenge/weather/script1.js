// import favorites from './favorites.json' assert {type: 'json'}
// import favorites from './favorites.js'

let usedName = undefined;
let favorites = []

let weather = {
  apiKey: "033b7b4476333f8426d606e31ace84c2",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=metric&appid=" +
      this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => { this.displayWeather(data), usedName = data.name });
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search .search-button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

function addToFavorite() {
  const rightCard = document.getElementById('right-card')
  const innerValue = document.createElement("div")
  const innerText = document.createTextNode(usedName)
  const innerCard = document.createElement("div")

  // adding classes
  innerValue.classList.add("inner-value")
  innerValue.id = "inner-value"
  innerCard.classList.add("inner-card")

  // delete button and function
  let deleteButton = new Image()
  deleteButton.src = "../svg/delete.svg"
  deleteButton.width = "25"
  deleteButton.height = "25"
  deleteButton.alt = "Delete Button"
  deleteButton.classList.add("delete")
  deleteButton.onclick = function () {
    deleteFavorite(usedName)
    innerValue.remove()
  }

  // appending child
  rightCard.appendChild(innerValue)
  innerValue.appendChild(innerCard)
  innerCard.appendChild(innerText)
  innerValue.appendChild(deleteButton)

  // adding values to local storage
  favorites.push(usedName)
  console.log(favorites)
  // localStorage.setItem("favorites", `${favorites}`)
}

function deleteFavorite(usedName) {
  // const lists = localStorage.getItem("favorites")

  // splitting array
  // const arrayList = lists.split(',')
  // splicing array
  console.log(usedName)
  // const filteredArray = favorites.filter(list => list !== usedName)
  // console.log(filteredArray)
}


document.querySelector(".favorite-button").addEventListener("click", function () {
  addToFavorite()
})


weather.fetchWeather("Denver");