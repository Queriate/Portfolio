function toggleLanguage(language) {
  var elementsEn = document.querySelectorAll('.lang-en');
  var elementsPtBr = document.querySelectorAll('.lang-pt-br');
  
  if (language === 'en') {
      elementsEn.forEach(function(element) {
          element.style.display = 'block';
      });
      elementsPtBr.forEach(function(element) {
          element.style.display = 'none';
      });
  } else if (language === 'pt-br') {
      elementsEn.forEach(function(element) {
          element.style.display = 'none';
      });
      elementsPtBr.forEach(function(element) {
          element.style.display = 'block';
      });
  }
}
