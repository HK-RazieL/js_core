function loadRepos(){
    $("#repos").empty();

    let username = $("#username").val();
    let url = "https://api.github.com/users/" + username + "/repos";

    $.get(url, function (data) {
        $(data).each(function(index, item) {
            $("#repos").append("<li><a href=\"" + item.html_url + "\">" + item.full_name + "</a></li>");
        })
    });

}