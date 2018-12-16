const viewController = (function () {
    function loginView(){
        this.partial("Templates/loginPage.html");
    }

    return {
        loginView
    }
})();