let currentLang = 'en';

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  currentLang = currentLang === 'en' ? 'hu' : 'en';
  elements.forEach(el => {
    el.innerHTML = el.getAttribute(`data-${currentLang}`);
  });
}

function toggleCollapse(button) {
  const collapse = button.nextElementSibling;
  collapse.style.display = (collapse.style.display === "none" || collapse.style.display === "") ? "block" : "none";

  // Change button text if you want
  const span = button.querySelector('span');
  const en = span.getAttribute('data-en');
  const hu = span.getAttribute('data-hu');

  if (span.textContent.startsWith("Show") || span.textContent.startsWith("Korábbi") || span.textContent.startsWith("Other")) {
    span.textContent = span.textContent.replace("Show", "Hide").replace("mutatása", "elrejtése").replace("Other", "Hide");
  } else if (span.textContent.startsWith("Hide") || span.textContent.startsWith("Rejtsd el")) {
    span.textContent = span.getAttribute('data-en');
  }
}

// Show button when user scrolls down
window.onscroll = function() {
  document.getElementById("topBtn").style.display =
    document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function copyToClipboard(button) {
  const textToCopy = button.parentElement.querySelector('.contact-text').innerText;

  navigator.clipboard.writeText(textToCopy).then(() => {
    const original = button.innerHTML;
    button.innerHTML = "✅"; // feedback
    setTimeout(() => button.innerHTML = original, 1500);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}
