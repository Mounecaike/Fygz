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
  