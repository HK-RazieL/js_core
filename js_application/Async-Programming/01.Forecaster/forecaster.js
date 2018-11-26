async function attachEvents() {
    let button = document.getElementById("submit");

    button.addEventListener("click", function () {
        let field = document.getElementById("location").value;
        let cityUrl = "https://judgetests.firebaseio.com/locations/.json";
        let locationCode;

        let test = $.get(cityUrl)
            .then(getData)
            .catch(firstError);

        function getData(data) {
            let city = data.find(obj => obj.name === field);
            locationCode = city.code;
        }

        let todayForecastUrl = `https://judgetests.firebaseio.com/forecast/today/${locationCode}.json`;

        $.get(todayForecastUrl)
            .then(function (data) {
                console.log(todayForecastUrl);
            })
            .catch(secondError);



        function firstError() {
            console.log("first get error")
        }

        function secondError() {
            console.log("second get error");
        }

    });
}