function attachEventsListeners() {
    let inputs = document.getElementsByTagName("input");
    let buttons = [];
    for(let i = 0; i < inputs.length; i++){
        if (inputs[i].type === "button") {
            buttons.push(inputs[i]);
        }
    }

    buttons.forEach((b) => {
       b.addEventListener("click", () => {
            //to do...
       });
    });
}