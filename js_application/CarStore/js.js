function startApp() {
    sessionStorage.clear();
    showHideMenuLinks();

    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show();
        },
        ajaxStop: function () {
            $("#loadingBox").hide();
        }
    });
    $("#infoBox", "#errorBox").on("click", function () {
        $(this).fadeOut();
    });

    function showInfo(message) {
        $("#infoBox").show();
        $("#infoBox > span").text(message);
        setTimeout(function () {
            $("#infoBox").fadeOut();
        }, 2000);
    }

    function showError(error) {
        $("#errorBox").show();
        $("#errorBox > span").text(error);
        setTimeout(function () {
            $("#errorBox").fadeOut();
        }, 2000);
    }

    function handleAjaxError(response) {
        let errorMessage = JSON.stringify(response);
        if (response.readyState === 0) {
            errorMessage = "Cannot connect due to network error.";
        }
        if (response.responseJSON && response.responseJSON.description) {
            errorMessage = response.responseJSON.description;
        }
        showError(errorMessage);
    }

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_BJsOlr31E";
    const kinveySecret = "1017d6c0d6874eb4b985ab55c1da4aa8";

    const kinveyAppAuthHeader = {
        "Authorization": "Basic " + btoa(kinveyAppKey + ":" + kinveySecret),
    };

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem("authToken", userInfo._kmd.authtoken);
        sessionStorage.setItem("userId", userInfo._id);
        sessionStorage.setItem("userName", userInfo.username);
    }


    function getKinveyUserAuthHeaders() {
        return {
            "Authorization": "Kinvey " + sessionStorage.getItem("authToken"),
        };
    }

    $("#registerButton").on("click", showRegisterView);
    $("#registerUser").on("click", registerUser);
    $("#loginButton").on("click", showLoginView);
    $("#logUserButton").on("click", loginUser);
    $("#myListingsButton").on("click", showMyListingsView);
    $("#logout").on("click", logoutUser);
    $("#signUpButton").on("click", showRegisterView);
    $("#signInButton").on("click", showLoginView);
    $("#home").on("click", showHomeMenu);
    $("#showAllListingsButton").on("click", showAllListingsView);
    $("#createListingsButton").on("click", showCreateListingsView);
    $(".details").on("click", carDetails);
    $(".del").on("click", deleteCar);
    $("#createCar").submit(createCar);
    $("#editCars").submit(saveEditedCar);
    $("form").submit(function (event) {
        event.preventDefault();
        event.stopPropagation();
    });

    function hideAllViews() {
        $("#main").hide();
        $("#login").hide();
        $("#register").hide();
        $("#car-listings").hide();
        $("#create-listing").hide();
        $("#edit-listing").hide();
        $("#myAds").hide();
        $("#listingDetails").hide();
        $("#showAllListingsButton").hide();
        $("#myListingsButton").hide();
        $("#createListingsButton").hide();
        $("#profile").hide();
        $(".no-cars").hide();
    }

    function showHideMenuLinks() {
        hideAllViews();

        if (sessionStorage.getItem("authToken") === null) {
            $("#welcome").text("");
            $("#main").show();
        } else {
            $("#main").hide();
            $("#showAllListingsButton").show();
            $("#myListingsButton").show();
            $("#createListingsButton").show();
            $("#profile").show();
            $("#welcome").text(`Welcome ${sessionStorage.getItem("userName")}`);
        }
    }

    function registerUser() {
        let username = $("#registerUsername").val();
        let password = $("#registerPassword").val();
        let repeatPassword = $("#repeatPassword").val();

        let usernameRegex = /^[a-zA-Z]{3,}$/g;
        let passwordRegex = /^[a-zA-Z0-9]{6,}$/g;

        if (!usernameRegex.test(username)) {
            showError("Username should be at least 3 english characters long.")
        } else if (!passwordRegex.test(password)) {
            showError("Password should be at least 6 characters long.")
        } else if (password !== repeatPassword) {
            showError("Password and Repeat Password are different.")
        } else {
            $.ajax({
                method: "POST",
                url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
                data: {
                    username,
                    password
                },
                headers: kinveyAppAuthHeader,
            }).then(function (response) {
                showHideMenuLinks();
                saveAuthInSession(response);
                showAllListingsView();
                showInfo("User Registration Successful!");
            }).catch(handleAjaxError);
        }
    }

    function loginUser() {
        let username = $("#loginUsername").val();
        let password = $("#loginPassword").val();

        let usernameRegex = /^[a-zA-Z]{3,}$/g;
        let passwordRegex = /^[a-zA-Z0-9]{6,}$/g;

        if (!usernameRegex.test(username)) {
            showError("Username should be at least 3 english characters long.")
        } else if (!passwordRegex.test(password)) {
            showError("Password should be at least 6 characters long.")
        } else {
            $.ajax({
                method: "POST",
                url: kinveyBaseUrl + "user/" + kinveyAppKey + "/login",
                data: {
                    username,
                    password
                },
                headers: kinveyAppAuthHeader,
            }).then(function (response) {
                saveAuthInSession(response);
                showInfo("Login Successful!");
                showHideMenuLinks();
                showAllListingsView();
            }).catch(handleAjaxError);
        }
    }

    function logoutUser() {
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppKey + "/_logout",
            headers: getKinveyUserAuthHeaders(),
        }).then(function () {
            sessionStorage.clear();
            showInfo("Logout Successful.");
            showHideMenuLinks();
        }).catch(handleAjaxError);

    }

    function createCar() {
        let seller = sessionStorage.getItem("userName");
        let title = $("#createCars input[name='title']").val().trim();
        let description = $("#createCars input[name='description']").val().trim();
        let brand = $("#createCars input[name='brand']").val().trim();
        let model = $("#createCars input[name='model']").val().trim();
        let year = $("#createCars input[name='year']").val().trim();
        let imageUrl = $("#createCars input[name='imageUrl']").val().trim();
        let fuel = $("#createCars input[name='fuelType']").val().trim();
        let price = $("#createCars input[name='price']").val().trim();

        if (title.length > 33) {
            showError("Title too long.");
        } else if (description.length < 30 || description.length > 450) {
            showError("Description between 30 and 450 is required.");
        } else if (brand.length > 11 || fuel.length > 11 || model.length > 11) {
            showError("Brand, Fuel and Model should be less than 11 symbols.");
        } else if (year.length !== 4) {
            showError("Invalid year.");
        } else if (price > 1000000) {
            showError("Invalid price.");
        } else {
            $.ajax({
                method: "POST",
                url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads",
                data: {
                    seller,
                    title,
                    description,
                    brand,
                    model,
                    year,
                    imageUrl,
                    fuel,
                    price
                },
                headers: getKinveyUserAuthHeaders()
            }).then(function () {
                showAllListingsView();
                showInfo("Car Ad Created Successfully!")

            }).catch(handleAjaxError);

        }

    }

    function carDetails(car){
        showHideMenuLinks();
        $("#listingDetails").show();
        $(".my-listing-details").empty();

        let carTemplate = $(`<p id="auto-title">${car.title}</p>
                <img src="${car.imageUrl}">
                <div class="listing-props">
                    <h2>Brand: ${car.brand}</h2>
                    <h3>Model: ${car.model}</h3>
                    <h3>Year: ${car.year}</h3>
                    <h3>Fuel: ${car.fuel}</h3>
                    <h3>Price: ${car.price}$</h3>
                </div>
                <div class="listings-buttons">

                    <a href="#" class="button-list">Edit</a>
                    <a href="#" class="button-list">Delete</a>


                </div>
                <p id="description-title">Description:</p>
                <p id="description-para">${car.description}</p>`);

        $(".my-listing-details").append(carTemplate);
    }

    function deleteCar(car){
        if(sessionStorage.getItem("userId") === car._acl.creator){
            $.ajax({
                method: "DELETE",
                url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads/" + car._id,
                data:{ad},
                headers: getKinveyUserAuthHeaders(),
            }).then(function() {
                showInfo("Ad Deleted Successful!");
                showHideMenuLinks();
                showAllListingsView();
            }).catch(handleAjaxError);
        }
    }

    function saveEditedCar() {

    }

    function showLoginView() {
        hideAllViews();
        $("#login").show();
    }

    function showRegisterView() {
        hideAllViews();
        $("#register").show();
    }

    function showMyListingsView() {
        showHideMenuLinks();
        $(".my-listings").show();
    }

    function showCreateListingsView() {
        showHideMenuLinks();
        $("#create-listing").show();
    }

    function showHomeMenu() {
        showHideMenuLinks();
        $("#main").show();
    }

    function showAllListingsView() {
        showHideMenuLinks();

        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads",
            headers: getKinveyUserAuthHeaders(),
        }).then(function (resource) {
            $("#car-listings").show();
            $("#listings").empty();
            if (resource.length === 0) {
                $("#listings").append("<p class='no-cars'>No Cars in the Database</p>");
            } else {
                for (const res of resource) {
                    let ad = $(`<div class="listing">
                    <p>${res.title}</p>
                    <img src="${res.imageUrl}">
                    <h2>Brand: ${res.brand}</h2>
                    <div class="info">
                        <div id="data-info">
                            <h3>Seller: ${res.seller}</h3>
                            <h3>Fuel: ${res.fuel}</h3>
                            <h3>Year: ${res.year}</h3>
                            <h3>Price: ${res.price}$</h3>
                        </div>
                        <div id="data-buttons">
                            <ul>
                                <li class="action">
                                    <a href="#" class="button-carDetails details">Details</a>
                                </li>
                                <li class="action">
                                    <a href="#" class="button-carDetails edit">edit</a>
                                </li>
                                <li class="action">
                                    <a href="#" class="button-carDetails del">delete</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>`);
                    ad.appendTo($("#listings"));
                }
            }
        }).catch(handleAjaxError);
    }

}