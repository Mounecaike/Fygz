document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Empêche le rechargement
  
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        // Simulation simple (à remplacer plus tard par un vrai backend)
        if (email === "test@fygz.com" && password === "figurine") {
          alert("Connexion réussie !");
          window.location.href = "board.html"; // Redirige vers ton tableau de collection
        } else {
          alert("Identifiants incorrects.");
        }
      });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    // ... login déjà présent ici
  
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
  
        // Simulation simple : enregistre dans le localStorage (à remplacer plus tard)
        const user = {
          username,
          email,
          password,
        };
  
        localStorage.setItem('fygzUser', JSON.stringify(user));
        alert("Inscription réussie !");
        window.location.href = "login.html"; // Redirection vers la connexion
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("figurineModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

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

  // Soumission du formulaire
  const figurineForm = document.getElementById("figurineForm");
  figurineForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Nouvelle figurine ajoutée !");
    modal.style.display = "none";
  });
});
