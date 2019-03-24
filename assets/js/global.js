/**
 * Global JS
 */

require('../lib/bootstrap/js/bootstrap.min.js');

// Navbar toggle hamburger
$(document).ready(function() {
  $('.navbar-toggle').click(function() {
  	$(this).toggleClass('open');
  });
});
