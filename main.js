let cart = [];
let selectedGame = null;
console.log("JS loaded correctly");

let allGames = [];

const API_URL = "./db.json";
const container = document.getElementById("cardContainer");

console.log("Container found:", container);

async function loadGames() {
  try {
    console.log("Fetching data...");

    const response = await fetch(API_URL);
  const data = await response.json();

  const games = data.games;

    allGames = data.games;

renderGames(allGames);

  } catch (error) {
    console.log("Error:", error);
  }
}

function renderGames(games) {
  container.innerHTML = "";

  games.forEach(game => {
    const col = document.createElement("div");
    col.classList.add("col-12", "col-sm-6", "col-lg-4");

    col.innerHTML = `
      <div
    class="card h-100 shadow"
    data-bs-toggle="modal"
    onclick="openModal(${game.id})"'
  >
        <img
  src="${game.image}"
  class="card-img-top clickableContent"
  alt="${game.title}"
  data-bs-toggle="modal"
  data-bs-target="#gameModal"
  onclick="openModal(${game.id})"
>
        <div class="card-body d-flex flex-column">
          <h5
  class="card-title clickableContent"
  data-bs-toggle="modal"
  data-bs-target="#gameModal"
  onclick="openModal(${game.id})"
>
    ${game.title}
  </h5>
          <p
  class="card-text clickableContent"
  data-bs-toggle="modal"
  data-bs-target="#gameModal"
  onclick="openModal(${game.id})"
>
  ${game.description}
</p>

  <div class="mt-3 mb-3">

          <span class="badge bg-primary">
      ${game.genre}
    </span>

          <span class="badge bg-secondary">
      ${game.year}
    </span>

          <span class="badge bg-success">
      ⭐ ${game.rating}
    </span>

        </div>
<p class="gamePrice">
    €${game.price}
  </p>

  <button
  class="btn btn-primary mt-auto buyButton"
  onclick="event.stopPropagation(); addToCart(${game.id})"
>
    Add to Cart
  </button>

</div>
    `;

    container.appendChild(col);
  });
}

function openModal(gameId) {

  selectedGame =
    allGames.find(game => game.id === gameId);

  document.getElementById("modalTitle").textContent =
    selectedGame.title;

  document.getElementById("modalImage").src =
    selectedGame.image;

  document.getElementById("modalDescription").textContent =
    selectedGame.description;

  document.getElementById("modalDescription").textContent =
    selectedGame.longDescription;

  document.getElementById("modalGenre").textContent =
    selectedGame.genre;

  document.getElementById("modalYear").textContent =
    selectedGame.year;

  document.getElementById("modalRating").textContent =
    `⭐ ${selectedGame.rating}`;

}

const filterButtons = document.querySelectorAll(".filterButton");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const selectedGenre =
      button.dataset.genre;

    if (selectedGenre === "All") {

      renderGames(allGames);

      return;
    }

    const filteredGames =
      allGames.filter(game =>
        game.genre.includes(selectedGenre)
      );

    renderGames(filteredGames);

  });

});

function addToCart(gameId) {

  const game =
    allGames.find(game => game.id === gameId);

  cart.push(game);

  updateCart();

  showNotification();

}

function showNotification() {

  const notification =
    document.getElementById("cartNotification");

  notification.classList.add("showNotification");

  setTimeout(() => {

    notification.classList.remove("showNotification");

  }, 3000);

}

function updateCart() {
    document.getElementById("totalPrice");

  cartItems.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {

    cartItems.innerHTML = `
      <p class="text-center">
        Your cart is empty.
      </p>
    `;

    totalPrice.textContent = "0";

    return;
  }

  cart.forEach((game, index) => {

    total += game.price;

    cartItems.innerHTML += `

      <div class="cartItem">

        <div class="cartGameInfo">

          <img src="${game.image}">

          <div>
            <h5>${game.title}</h5>
            <p>€${game.price}</p>
          </div>

        </div>

        <button
          class="btn removeButton"
          onclick="removeFromCart(${index})"
        >
          Remove
        </button>

      </div>

    `;

  });

  totalPrice.textContent =
    total.toFixed(2);

}

function removeFromCart(index) {

  cart.splice(index, 1);

  updateCart();

}


loadGames();