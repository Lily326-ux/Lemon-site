(function() {
  var link = document.querySelector('.hover_state_link');
  var dropdown = document.querySelector('.hover_state-dropdown');
  dropdown.style.display = 'none';
  link.addEventListener('click', function() {
    var display = dropdown.style.display;
    dropdown.style.display = display === 'none' ? 'block': 'none';
  })
})();