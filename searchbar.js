// Solution with Exact String Match
const searchInput = document.querySelector("#search-input");
const products = Array.from(document.querySelectorAll(".product"));

// function search(input) {
//   const searchQuery = input.value.trim().toLowerCase();

//   products.forEach((product) => {
//     const text = product.textContent.toLowerCase();

//     product.style.display = text.includes(searchQuery) ? "block" : "none";
//   });
// }

searchInput.addEventListener("input", () => search(searchInput));

// Solution with Word-Level Search

function search(input) {
  const searchWords = input.value.trim().toLowerCase().split(/\s+/);

  products.forEach((product) => {
    const text = product.textContent.toLowerCase();

    const matches = searchWords.every((word) => text.includes(word));

    product.style.display = matches ? "block" : "none";
  });
}
