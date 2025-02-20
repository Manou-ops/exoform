alert("RASSUSSEZ VOUS DE VOULOIR PARTICIPER ET D'ETRE DISPONIBLE")

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact .formu");
  const successSection = document.querySelector(".succes");

  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche l'envoi du formulaire

      // Récupération des valeurs du formulaire
      const nom = form.noms.value.trim();
      const prenom = form.prenom.value.trim();
      const dateNaissance = form.nom.value;
      const numero = form.numero.value.trim();
      const motivation = form.message.value.trim();

      // Vérifications
      if (!nom || !prenom || !dateNaissance || !numero || !motivation) {
          alert("Tous les champs sont obligatoires.");
          return;
      } 

      // Vérification de l'âge minimum de 18 ans
      const birthDate = new Date(dateNaissance);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      if (age < 18 || (age === 18 && monthDiff < 0) || (age === 18 && monthDiff === 0 && dayDiff < 0)) {
          alert("Vous devez avoir au moins 18 ans pour vous inscrire.");
          return;
      }

      // Vérification du numéro de téléphone
      const regexNumero = /^01\d{8}$/;
      if (!regexNumero.test(numero)) {
          alert("Le numéro de téléphone doit commencer par 01 et contenir 10 chiffres.");
          return;
      }

      // Vérification de la longueur de la motivation
      if (motivation.length < 1000 || motivation.length > 2500) {
          alert("La motivation doit contenir entre 1000 et 2500 caractères.");
          return;
      }

      // Affichage des informations si tout est valide
      document.getElementById("result-nom").textContent = nom;
      document.getElementById("result-prenom").textContent = prenom;
      document.getElementById("result-date").textContent = dateNaissance;
      document.getElementById("result-numero").textContent = numero;
      document.getElementById("result-motivation").textContent = motivation;

      // Affichage de la section succès
      successSection.style.visibility = "visible";

      alert("Inscription réussie !");
      form.reset(); // Réinitialiser le formulaire après soumission
  });
});


