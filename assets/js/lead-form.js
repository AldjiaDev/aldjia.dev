/* Formulaires d'inscription à la checklist (MailerLite) : page /checklist/ et pied de page.
   Chaque <form data-lead-form> envoie à l'URL de son attribut action, puis redirige
   vers data-success (page de remerciement). */
(function () {
  document.querySelectorAll('form[data-lead-form]').forEach(function (form) {
    var status = form.querySelector('[data-lead-status]');
    var say = function (msg) { if (status) status.textContent = msg; };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('[name="fields[email]"]');
      var consent = form.querySelector('[name="consent"]');
      if (!email.value || !email.checkValidity()) { say('Indiquez une adresse email valide.'); email.focus(); return; }
      if (consent && !consent.checked) { say('Cochez la case de consentement pour recevoir la checklist.'); consent.focus(); return; }
      if (!form.getAttribute('action')) { say('Le formulaire n’est pas encore actif. Écrivez-moi à aldjia.boughias@gmail.com.'); return; }
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      say('Envoi en cours…');
      var data = new FormData(form);
      data.delete('consent');
      fetch(form.action, { method: 'POST', body: data })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.success) { window.location.href = form.dataset.success; }
          else { throw new Error(); }
        })
        .catch(function () {
          btn.disabled = false;
          say('L’envoi n’a pas fonctionné. Réessayez dans un instant, ou écrivez-moi à aldjia.boughias@gmail.com.');
        });
    });
  });
})();
