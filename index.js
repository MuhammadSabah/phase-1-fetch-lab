function fetchBooks() {
  // Return the fetch promise so .then() can be chained outside this function
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => {
      renderBooks(books);
      return books; // Optionally return books if you need to use the response outside
    });
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});
