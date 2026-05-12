const API_URL = "http://localhost:3000/games";

const cardContainer = document.getElementById("cardContainer");

const loadGames = async () => {

  try {

    const response = await fetch(API_URL);

    const games = await response.json();

    renderGames(games);

  } catch (error) {

    console.error("Failed to load games:", error);

  }

};

const createGameCard = (game) => {

  return `
  
    <div class="col-12 col-sm-6 col-lg-4">

      <div class="card gameCard h-100">

        <img
          src="${game.image}"
          class="card-img-top"
          alt="${game.title}"
        >

        <div class="card-body d-flex flex-column">

          <h5 class="card-title">
            ${game.title}
          </h5>

          <p class="card-text">
            ${game.description}
          </p>

          <div class="mt-auto pt-3">

            <span class="badge">
              ${game.genre}
            </span>

            <span class="badge">
              ${game.year}
            </span>

            <span class="badge">
              ⭐ ${game.rating}
            </span>

          </div>

        </div>

      </div>

    </div>

  `;

};

const renderGames = (games) => {

  cardContainer.innerHTML = "";

  games.forEach((game) => {

    cardContainer.innerHTML += createGameCard(game);

  });

};

loadGames();