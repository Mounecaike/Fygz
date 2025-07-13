const figurines = [
  {
    nom: "Sangoku",
    univers: "Dragon Ball",
    image: "../assets/img/goku-fygz.jpg"
  },
  {
    nom: "Ezio",
    univers: "Assassin's Creed",
    image: "../assets/img/ezio-fygz-jpg.jpg"
  },
  {
    nom: "Tanjiro",
    univers: "Demon Slayer",
    image: "../assets/img/tanjiro-fygz.png"
  },
  // ... etc.
];


function renderFigurines(figurines) {
  const container = document.getElementById("figurine-list");

  figurines.forEach(fig => {
    const card = document.createElement("div");
    card.className = "vitrine-div";
    card.innerHTML = `
      <div class="img-wrapper">
        <img src="${fig.image}" alt="${fig.nom}">
      </div>
      <h2>${fig.nom}</h2>
      <p>${fig.univers}</p>
    `;
    container.appendChild(card);
  });
}

// Au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  renderFigurines(figurines);
});
renderFigurines()