const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');
const hamburgerButton = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');
const homeAnchor = document.querySelector(".home");
const discoverAnchor = document.querySelector(".discover");
const directoryAnchor = document.querySelector(".directory");
const joinAnchor = document.querySelector(".join");


const todayTemp = document.querySelector(".today");
const tomorrowTemp = document.querySelector(".next-day");
const nextTomorrowTemp = document.querySelector(".next-two-days");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

const currentTemp = document.querySelector(".current-temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector(".description");
const maxTemp = document.querySelector(".max-temp");
const minTemp = document.querySelector(".min-temp");
const humidity = document.querySelector(".humidity");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const myKey = "5bf3d3e13785fa06895c717e38cefa7f"

const url = `https://api.openweathermap.org/data/2.5/weather?lat=6.32&lon=8.11&units=metric&appid=${myKey}`;

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
        displayWeatherForecast(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  apiFetch();

  function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    maxTemp.innerHTML = `High: ${Math.round(data.main.temp_max)}&deg;C`;
    minTemp.innerHTML = `Low: ${Math.round(data.main.temp_min)}&deg;C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    const options = {hour: '2-digit', minute:'2-digit'}
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], options);
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], options);
    sunrise.textContent = `Sunrise: ${sunriseTime}`;
    sunset.textContent = `Sunset: ${sunsetTime}`;
  }



  // async function getForecast() {
  //   try {
  //     const response = await fetch(url);
  //     if (response.ok) {
  //       const data = await response.json();
  //       displayForecast(data);
  //     } else {
  //       throw Error(await response.text());
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // function displayForecast(data) {
  //   const forecastList = data.list;
  //   const today = new Date();
  //   const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  //   const nextTomorrow = new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000);
  
  //   const todayForecast = forecastList.find((item) => {
  //     const forecastDate = new Date(item.dt * 1000);
  //     return forecastDate.getDate() === today.getDate();
  //   });
  
  //   const tomorrowForecast = forecastList.find((item) => {
  //     const forecastDate = new Date(item.dt * 1000);
  //     return forecastDate.getDate() === tomorrow.getDate();
  //   });
  
  //   const nextTomorrowForecast = forecastList.find((item) => {
  //     const forecastDate = new Date(item.dt * 1000);
  //     return forecastDate.getDate() === nextTomorrow.getDate();
  //   });
  
  //   if (todayForecast && tomorrowForecast && nextTomorrowForecast) {
  //     document.querySelector('.today').textContent = `Today: ${Math.round(todayForecast.main.temp)}°C`;
  //     document.querySelector('.next-day').textContent = `Tomorrow: ${Math.round(tomorrowForecast.main.temp)}°C`;
  //     document.querySelector('.next-two-days').textContent = `${tomorrow.getDate() + 1}th: ${Math.round(nextTomorrowForecast.main.temp)}°C`;
  //   }
  // }
  
  // getForecast();
 
  // Fetch data from the API
fetch(url)
  .then(response => response.json())
  .then(data => {
  // Extract temperatures for today, tomorrow, and next tomorrow
  const todayTemp = data.daily[0].temp.day;
  const tomorrowTemp = data.daily.temp.day;
  const nextTomorrowTemp = data.daily[2].temp.day;

  // Display temperatures
  console.log(`Today's temperature: ${todayTemp}°C`);
  console.log(`Tomorrow's temperature: ${tomorrowTemp}°C`);
  console.log(`Next tomorrow's temperature: ${nextTomorrowTemp}°C`);
})
.catch(error => console.error('Error fetching weather data:', error));






  // function displayWeatherForecast(data) {
  //   const forecastList = data.list;
  //   const today = new Date();
  //   const tomorrow = new Date(today.getTime() + 24 * 60 *60 * 1000);
  //   const nextTomorrow = new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000);

  //   const todayForecast = forecastList.find(item => {
  //       const forecastDate = new Date(item.dt * 1000)
  //       return forecastDate.getDate() === today.getDate();
  //   });

  //   const tomorrowForecast = forecastList.find(item => {
  //       const forecastDate = new Date(item.dt * 1000)
  //       return forecastDate.getDate() === tomorrow.getDate();
  //   });

  //   const nextTomorrowForecast = forecastList.find(item => {
  //       const forecastDate = new Date(item.dt * 1000);
  //       return forecastDate.getDate() === nextTomorrow.getDate();
  //   })

  //   if (todayForecast && tomorrowForecast && nextTomorrowForecast) {
  //       todayTemp.innerHTML = `Today: ${Math.round(todayForecast.main.temp)}&deg;C`;
  //       tomorrowTemp.innerHTML = `Tomorrow: ${Math.round(tomorrowForecast.main.temp)}&deg;C`;
  //       nextTomorrowTemp.innerHTML = `Next Tomorrow: ${Math.round(nextTomorrowForecast.main.temp)}&deg;C`;
  //   }
  // }

hamburgerButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamburgerButton.classList.toggle('show');
});

homeAnchor.textContent = "📍 Home";
homeAnchor.style.borderBottom = "2px solid blue";

homeAnchor.addEventListener("click", () => {
    homeAnchor.textContent = "📍 Home";
    homeAnchor.style.borderBottom = "2px solid blue";
    directoryAnchor.style.borderBottom = "";
    joinAnchor.style.borderBottom = "";
    discoverAnchor.textContent = "Discover";
    directoryAnchor.textContent = "Directory";
    joinAnchor.textContent = "Join";
})

discoverAnchor.addEventListener("click", () => {
	  homeAnchor.textContent = " Home";
    discoverAnchor.textContent = "📍 Discover";
    discoverAnchor.style.borderBottom = "2px solid blue";
    homeAnchor.style.borderBottom = "";
    directoryAnchor.style.borderBottom = "";
    joinAnchor.style.borderBottom = "";
    directoryAnchor.textContent = "Directory";
    joinAnchor.textContent = "Join";
})

directoryAnchor.addEventListener("click", () => {
    homeAnchor.textContent = " Home";
    discoverAnchor.textContent = "Discover";
    directoryAnchor.textContent = "📍 Directory";
    directoryAnchor.style.borderBottom = "2px solid blue";
    discoverAnchor.style.borderBottom = "";
    homeAnchor.style.borderBottom = "";
    joinAnchor.style.borderBottom = "";
    joinAnchor.textContent = "Join";
})

joinAnchor.addEventListener("click", () => {
	homeAnchor.textContent = " Home";
    discoverAnchor.textContent = "Discover";
    directoryAnchor.textContent = "Directory";
    joinAnchor.textContent = "📍 Join";
    joinAnchor.style.borderBottom = "2px solid blue";
    discoverAnchor.style.borderBottom = "";
    homeAnchor.style.borderBottom = "";
    directoryAnchor.style.borderBottom = "";
})