document.addEventListener('DOMContentLoaded', () => {
  // === FORMULAIRE DE CONNEXION ===
  const loginForm = document.getElementById('login-form');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Empêche le rechargement

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Simulation simple (à remplacer par un vrai backend)
      if (email === "test@fygz.com" && password === "figurine") {
        alert("Connexion réussie !");
        window.location.href = "board.html"; // Redirection vers le board
      } else {
        alert("Identifiants incorrects.");
      }
    });
  }

  // === FORMULAIRE D'INSCRIPTION ===
  const registerForm = document.getElementById('register-form');

  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const email = document.getElementById('reg-email').value;
      const password = document.getElementById('reg-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;

      if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }

      // Simulation simple : stockage dans localStorage (sera remplacé par backend plus tard)
      const user = { username, email, password };
      localStorage.setItem('fygzUser', JSON.stringify(user));

      alert("Inscription réussie !");
      window.location.href = "login.html"; // Redirection vers la connexion
    });
  }

  // === MODALE AJOUT FIGURINE ===
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("figurineModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  if (openModalBtn && modal && closeModalBtn) {
    // Ouvrir la modale
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    // Fermer via le bouton X
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Fermer si clic en dehors
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Soumission du formulaire ajout figurine
  const figurineForm = document.getElementById("figurineForm");
  if (figurineForm) {
    figurineForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Ici plus tard on ajoutera la figurine en live ou via backend
      alert("Nouvelle figurine ajoutée !");
      modal.style.display = "none";
    });
  }

  // === DROPDOWN UNIVERS DANS LA MODALE D’AJOUT ===
  const dropdown = document.getElementById("dropdown-univers");
  const dropdownSelected = dropdown?.querySelector(".dropdown-selected");
  const dropdownList = dropdown?.querySelector(".dropdown-list");

  if (dropdown && dropdownSelected && dropdownList) {
    fetch("../data/univers.json") // charge les univers
      .then(response => response.json())
      .then(universList => {
        universList.forEach(univers => {
          const option = document.createElement("div");
          option.classList.add("dropdown-option");
          option.textContent = univers.name;

          // Au clic sur un univers
          option.addEventListener("click", () => {
            dropdownSelected.textContent = univers.name;
            dropdown.classList.remove("active");

            // BONUS : on stocke la valeur dans un input hidden pour l’envoyer avec le formulaire
            const hiddenField = document.getElementById("selected-univers");
            if (hiddenField) hiddenField.value = univers.name;
          });

          dropdownList.appendChild(option);
        });
      })
      .catch(err => console.error("Erreur chargement univers:", err));

    // Ouvrir/fermer la liste au clic
    dropdownSelected.addEventListener("click", () => {
      dropdown.classList.toggle("active");
    });

    // Fermer si clic à l’extérieur
    window.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target)) dropdown.classList.remove("active");
    });
  }
});
