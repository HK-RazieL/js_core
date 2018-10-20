function create(sentences) {
    let array = sentences.forEach((sentence) => {
        let block = document.createElement("div");
        let text = document.createElement("p");
        text.textContent = sentence;
        block.appendChild(text);
        text.style.display = "none";
        block.addEventListener("click", () => {
            let t = block.getElementsByTagName("p")[0];
            t.style.display = "block";
        });

        document.getElementById("content").appendChild(block);
    });

}