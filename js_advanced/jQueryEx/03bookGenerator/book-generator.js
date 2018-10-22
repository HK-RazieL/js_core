function createBook(selector, title, author, ISBN) {
    let bookGenerator = (function () {
        let id = 1;
        return function (selector, title, author, ISBN) {
            let fragment = document.createDocumentFragment();
            let container = $(selector);
            let bookContainer = $("<div>");
            let bookTitle = $("<p>");
            bookTitle.text(title);
            let bookAuthor = $("<p>");
            bookAuthor.text(author);
            let bookISBN = $("<p>");
            bookISBN.text(ISBN)

            bookTitle.addClass("title");
            bookAuthor.addClass("author");
            bookISBN.addClass("isbn");
            bookContainer.attr("id", "book" + id);

            let selectButton = $("<button>Select</button>");
            let deselectButton = $("<button>Deselect</button>");

            $(selectButton).on("click", () => {
                bookContainer.css("border", "2px solid blue");
            });

            $(deselectButton).on("click", () => {
                bookContainer.css("border", "none");
            });

            bookTitle.appendTo(fragment);
            bookAuthor.appendTo(fragment);
            bookISBN.appendTo(fragment);
            selectButton.appendTo(fragment);
            deselectButton.appendTo(fragment);

            bookContainer.append(fragment);
            container.append(bookContainer);
            id++;
        }

    }());

    bookGenerator(selector, title, author, ISBN);
}