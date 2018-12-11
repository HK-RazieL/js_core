function attachEvents() {
    let button = document.getElementById("submit");

    button.addEventListener("click", async function () {
            let field = document.getElementById("location").value;
            let cityUrl = "https://judgetests.firebaseio.com/locations/.json";
            let locationCode;
            let forecastField = document.getElementById("forecast");

            let data = await $.get(cityUrl);
            let city = data.find(obj => obj.name === field);
            locationCode = city.code;

            let todayForecastUrl = `https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`;
            let todayForecast = await $.get(todayForecastUrl);

            let threeDayForecastUrl = `https://judgetests.firebaseio.com/forecast/upcoming/${locationCode}.json`;
            let threeDayForecast = await $.get(threeDayForecastUrl);

            let symbols = {
                "Sunny": "&#x2600;", // ☀
                "Partly sunny": "&#x26C5;", // ⛅
                "Overcast": "&#x2601;", // ☁
                "Rain": "&#x2614;", // ☂
            };

            $("#forecast").empty();
            $("#forecast").append('<div id="current"><div class="label">Current conditions</div></div>');
            $("#forecast").append('<div id="upcoming"><div class="label">Three-day forecast</div></div>');
            displayTodayForecast(todayForecast);
            displayThreeDayForecast(threeDayForecast);
            forecastField.removeAttribute("style");


            function firstError() {
                console.log("first get error")
            }

            function secondError() {
                console.log("second get error");
            }

            function displayTodayForecast(forecast) {
                let symbol = `<span class="condition symbol">${symbols[forecast.forecast.condition]}</span>`;
                let info = `<span class="condition"><span class="forecast-data">${forecast.name}</span><span class="forecast-data">${forecast.forecast.low}&#176;/${forecast.forecast.high}&#176;</span><span class="forecast-data">${forecast.forecast.condition}</span></span>`;

                $("#current").append(symbol);
                $("#current").append(info);
            }

            function displayThreeDayForecast(forecast) {
                for (let i = 0; i < forecast.forecast.length; i++) {
                    let info = `<span class="upcoming"><span class="symbol">${symbols[forecast.forecast[i].condition]}</span><span class="forecast-data">${forecast.forecast[i].low}&#176;/${forecast.forecast[i].high}&#176;</span><span class="forecast-data">${forecast.forecast[i].condition}</span></span>`;

                    $("#upcoming").append(info);
                }
            }
        }
    );
}