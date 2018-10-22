function validate() {
    let username = $("#username").val();
    let password = $("#password").val();
    let confirmPassword = $("#confirm-password").val();
    let isCompany = $("#company");

    isCompany.change(() => {
        if(isCompany.is(":checked")){
            $('#companyInfo').css('display','block');
        }else {
            $('#companyInfo').css('display','none');
        }
    });

    function validity(field) {

    }

}