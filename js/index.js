document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('emailForm').addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var subject = document.getElementById('subject').value.trim();
      var message = document.getElementById('message').value.trim();

      // Vérifier si tous les champs sont remplis
      if (name === '' || email === '' || subject === '' || message === '') {
          alert('Veuillez remplir tous les champs du formulaire.');
          return; // Arrêter le processus si un champ est vide
      }

      var mailtoLink = 'mailto:destinataire@example.com' +
                       '?subject=' + encodeURIComponent(subject) +
                       '&body=Je suis: ' + encodeURIComponent(name) + '%0A' +
                       'Email: ' + encodeURIComponent(email) + '%0A' +
                       'Message: ' + encodeURIComponent(message);

      window.location.href = mailtoLink;

      // Vider les champs du formulaire
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
  });
});
