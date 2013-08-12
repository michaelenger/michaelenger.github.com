(function($) {
"use strict";

// Overkill? Yes. Spam? No.
var houseonthehill = 'thelonelycoder.com',
	banana = document.getElementById('banana'),
	cmd = 'otliam';
banana.innerHTML = '<a href="' + cmd.split('').reverse().join('') + ':mike' + '&#64;' + houseonthehill + '">mike' + '&#64;' + houseonthehill + '</a>';

// P-p-p-arallax
if (window.addEventListener) {
	var headerImage = document.getElementById('header-image');
	window.addEventListener('scroll', function(e) {
		var top = window.pageYOffset || document.documentElement.scrollTop;
		if (top > 0 && top <= headerImage.parentNode.offsetHeight) {
			var offset = 1 - ((headerImage.parentNode.offsetHeight - top) / headerImage.parentNode.offsetHeight),
				offsetTop = ((headerImage.parentNode.offsetHeight - headerImage.offsetHeight) * offset);
			console.log(offsetTop);
			$(headerImage)
				.stop()
				.animate({top: offsetTop}, 25);
		}
	});
}

})(jQuery.noConflict());
