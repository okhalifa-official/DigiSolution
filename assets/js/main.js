(function () {
  var d = document, to = 'support@digisolution.app';

  // Pause the CSS animations (brand loop, prompt cursor) while the tab is hidden
  d.addEventListener('visibilitychange', function () { d.documentElement.classList.toggle('paused', d.hidden); });

  var mail = function (subject, body) {
    window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  };

  // Hero prompt -> mailto with the typed text as the body
  var prompt = d.getElementById('prompt-form');
  if (prompt) {
    prompt.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = d.getElementById('prompt-input').value.trim();
      if (v) mail('New project enquiry', v);
    });
  }

  // Contact form -> mailto (no backend)
  var form = d.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = function (id) { return d.getElementById(id).value.trim(); };
      mail('Project enquiry from ' + v('name'), v('message') + '\n\n' + v('name') + '\n' + v('email'));
    });
  }
})();
