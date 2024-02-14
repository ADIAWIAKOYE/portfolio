document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('emailForm').addEventListener('submit', function(event) {
      event.preventDefault();

      var name = encodeURIComponent(document.getElementById('name').value);
      var email = encodeURIComponent(document.getElementById('email').value);
      var subject = encodeURIComponent(document.getElementById('subject').value);
      var message = encodeURIComponent(document.getElementById('message').value);

      var mailtoLink = 'mailto:destinataire@example.com' +
                       '?subject=' + subject +
                       '&body=Je suis: ' + name + '%0A' +
                       'Email: ' + email + '%0A' +
                       'Message: ' + message;

      window.location.href = mailtoLink;

      // Vider les champs du formulaire
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('subject').value = "";
      document.getElementById('message').value = "";
  });
});