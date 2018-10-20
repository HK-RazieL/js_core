function timer() {
    let time = setInterval((
        $("#start-timer").on("click", () => {
            $("#seconds").val($("#seconds").val() + 1);

            if ($("#seconds").val() === 60){
                $("#seconds").val(0);
                $("#minutes").val($("#minutes").val() + 1);

                if($("#minutes").val() === 60) {
                    $("#minutes").val(0);
                    $("#hours").val($("#hours").val() + 1);
                }
            }
        })
    ), 1000);

    $("#stop-timer").on("click", clearInterval(time));
}