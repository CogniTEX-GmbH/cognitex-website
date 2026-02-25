/**
 * Cognitex – Dark / Light Theme Toggle
 * Reads preference from localStorage, applies immediately to prevent FOUC.
 */

// Apply saved theme ASAP (before DOMContentLoaded) to prevent flash
(function () {
  var saved = localStorage.getItem('cgx-theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
})();

// SVG icons
var SUN_SVG  = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>';
var MOON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';

function updateToggleBtn() {
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  var theme = document.documentElement.getAttribute('data-theme') || 'dark';
  var icon  = btn.querySelector('.ti');
  if (icon) icon.innerHTML = (theme === 'dark') ? SUN_SVG : MOON_SVG;
  btn.setAttribute('aria-label', (theme === 'dark') ? 'Light Mode aktivieren' : 'Dark Mode aktivieren');
  btn.setAttribute('title',      (theme === 'dark') ? 'Light Mode'            : 'Dark Mode');
}

document.addEventListener('DOMContentLoaded', function () {
  updateToggleBtn();

  var btn = document.getElementById('themeToggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var html    = document.documentElement;
    var current = html.getAttribute('data-theme') || 'dark';
    var next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('cgx-theme', next);
    updateToggleBtn();
  });
});
