// === FIGURINES DE BASE SI JSON FAIL ===
const fakeFigurines = [
  {
    nom: "Sangoku",
    univers: "Dragon Ball",
    prix: 45.99,
    dateAchat: "2023-08-12",
    lieuAchat: "Micromania",
    image: "../assets/img/goku-fygz.jpg"
  },
  {
    nom: "Ezio",
    univers: "Assassin's Creed",
    prix: 59.90,
    dateAchat: "2024-02-01",
    lieuAchat: "Amazon",
    image: "../assets/img/ezio-fygz-jpg.jpg"
  },
  {
    nom: "Tanjiro",
    univers: "Demon Slayer",
    prix: 39.50,
    dateAchat: "2023-12-05",
    lieuAchat: "Fnac",
    image: "../assets/img/tanjiro-fygz.png"
  }
];

// === FONCTION POUR AFFICHER LES FIGURINES SUR LE BOARD ===
function renderFigurines(figurines) {
  const container = document.getElementById("figurine-list");
  container.innerHTML = "";

  figurines.forEach(fig => {
    const card = document.createElement("div");
    card.className = "vitrine-div";
    card.style.cursor = "pointer";

    card.innerHTML = `
      <div class="img-wrapper">
        <img src="${fig.image}" alt="${fig.nom}">
      </div>
      <h2>${fig.nom}</h2>
      <p>${fig.univers}</p>
    `;

    card.addEventListener("click", () => {
      document.getElementById("detail-image").src = fig.image || "../assets/img/placeholder.jpg";
      document.getElementById("detail-nom").textContent = fig.nom;
      document.getElementById("detail-univers").textContent = fig.univers;
      document.getElementById("detail-prix").textContent = fig.prix ?? "N/A";
      document.getElementById("detail-date").textContent = fig.dateAchat ?? "N/A";
      document.getElementById("detail-lieu").textContent = fig.lieuAchat ?? "N/A";
      document.getElementById("figurineDetailsModal").style.display = "flex";
    });

    container.appendChild(card);
  });

  // === CALCUL DES STATS ===
  updateStats(figurines);
}

function updateStats(figurines) {
  const totalItems = figurines.length;

  // Somme des prix (ignore undefined)
  const totalValue = figurines.reduce((sum, f) => sum + (f.prix || 0), 0);

  // Univers uniques
  const universSet = new Set(figurines.map(f => f.univers));
  const totalUnivers = universSet.size;

  // Injection dans le DOM
  document.getElementById("stat-total").textContent = totalItems;
  document.getElementById("stat-value").textContent = `${totalValue.toFixed(2)} €`;
  document.getElementById("stat-univers").textContent = totalUnivers;
}

// === INIT PAGE BOARD ===
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("figurineDetailsModal");
  const closeModal = document.getElementById("closeDetailsModal");

  // Charger les figurines depuis JSON
  fetch("../data/figurines.json")
    .then(res => res.json())
    .then(figurines => {
      console.log("✅ Figurines JSON chargées:", figurines);
      renderFigurines(figurines);
    })
    .catch(err => {
      console.warn("⚠️ Erreur JSON, fallback sur fake:", err);
      renderFigurines(fakeFigurines);
    });

  // Fermer la modale
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
