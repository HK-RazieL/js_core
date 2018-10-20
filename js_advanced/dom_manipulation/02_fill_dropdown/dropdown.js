function addItem() {
    let itemText = document.getElementById("newItemText").value;
    let itemValue = document.getElementById("newItemValue").value;

    let el = document.createElement("option");

    el.textContent = itemText + " " + itemValue;
    let menu = document.getElementById("menu");
    menu.add(el);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}