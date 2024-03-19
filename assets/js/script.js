function toggleLanguage() {
  var elementsEn = document.querySelectorAll('.lang-en');
  var elementsPtBr = document.querySelectorAll('.lang-pt-br');

  elementsEn.forEach(function(element) {
      element.style.display = (element.style.display === 'none') ? 'block' : 'none';
  });

  elementsPtBr.forEach(function(element) {
      element.style.display = (element.style.display === 'none') ? 'block' : 'none';
  });
}
