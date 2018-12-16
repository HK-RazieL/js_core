const app = Sammy("#container", function() {
        this.use("Handlebars", "hbs");

        this.get("#/loginPage", viewController.loginView);
    });

$(() => {app.run()});