/* jshint devel:true */
(function() {

  'use strict';

  var dropdown = document.querySelectorAll('.dropdown'),
      dropdownActive = false;

  for (var i = dropdown.length - 1; i >= 0; i--) {

    dropdown[i].addEventListener('click', function(e) {
      var dropdownMenu = this.querySelectorAll('.dropdown-menu');
      e.stopPropagation();
      if (dropdownActive) {
        return closeDropdown(dropdownMenu);
      }
      return openDropdown(dropdownMenu);
    });

  };

  var navCollapse = document.querySelectorAll('.nav-collapse'),
      navActive = false;

  navCollapse[0].addEventListener('click', function() {
    var body = document.querySelectorAll('body')[0];
    if (navActive) {
      removeClass(body, 'menu-open')
      return navActive = false;
    }
    addClass(body, 'menu-open')
    return navActive = true;
  });

  function hasClass(ele,cls) {
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  }

  function addClass(ele,cls) {
    if (!hasClass(ele,cls)) ele.className += ' '+cls;
  }

  function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
      var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
      ele.className=ele.className.replace(reg,' ');
    }
  }

  function closeDropdown(el) {
    for (var i = el.length - 1; i >= 0; i--) {
      removeClass(el[i], 'open');
    };
    return dropdownActive = false;
  }

  function openDropdown(el) {
    addClass(el[0], 'open');
    return dropdownActive = true;
  }

})();
