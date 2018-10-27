function validate() {
    let username = $("#username").val();
    let mail = $("#email").val();
    let password = $("#password").val();
    let confirmPassword = $("#confirm-password").val();
    let isCompany = $("#company");
    let button = $("#submit");
    let formElements = $("#userInfo");

    isCompany.change(() => {
        if(isCompany.is(":checked")){
            $('#companyInfo').css('display','block');
        }else {
            $('#companyInfo').css('display','none');
        }
    });

    let usernameRegex = "/([a-zA-Z\d]{3,20})/g";
    let passwordRegex = "/[\w]{5,15}/g";
    let mailRegex = "/.+@.+\..+/g";

    button.on("click", (a) => {
        a.preventDefault();
        a.stopPropagation();

        if(username.match(usernameRegex) !== null) {
            a.target.css("border", "none");
        } else {
            a.target.css("border-color", "red");
        }

        if(password.match(passwordRegex) !== null) {
            formElements.css("border", "none");
        } else {
            formElements.css("border-color", "red");
        }

        if(mail.match(mailRegex) !== null) {
            formElements.css("border", "none");
        } else {
            formElements.css("border-color", "red");
        }

    });

}