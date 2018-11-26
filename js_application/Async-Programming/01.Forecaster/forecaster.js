function attachEvents() {
    let button = document.getElementById("submit");

    button.addEventListener("click", async function () {
        let field = document.getElementById("location").value;
        let cityUrl = "https://judgetests.firebaseio.com/locations/.json";
        let locationCode;
        let forecastField = document.getElementById("forecast");
        forecastField.removeAttribute("style");

        let data = await $.get(cityUrl);

        let city = data.find(obj => obj.name === field);
        locationCode = city.code;

        let todayForecastUrl =  `https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`;
        let forecastRequest = await $.get(todayForecastUrl);


        let threeDayForecastUrl = `https://judgetests.firebaseio.com/forecast/upcoming/${locationCode}.json`;
        let threeDayForecast = await $.get(threeDayForecastUrl);

        console.log(threeDayForecast);

        function firstError() {
            console.log("first get error")
        }

        function secondError() {
            console.log("second get error");
        }

    });
}