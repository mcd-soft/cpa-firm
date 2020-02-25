'use strict';

const Main = (function() {
  function init() {
    $('.menu-comps .navigation a').each(function(i, element) {
      if (location.href === element.href) {
        $(this).css('color', 'white');
      }
    });
  }

  return {
    init: init,
  };
})();

$(function() {
  Main.init();
});
