// Pasirenkame mygtuką ir nustatome įvykį
const toggleButton = document.getElementById('toggle-theme');

// Patikriname, ar vartotojas jau pasirinko tamsų režimą
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Mygtuko paspaudimo funkcija
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Išsaugome vartotojo pasirinkimą naršyklės localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
