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
			$(headerImage)
				.stop()
				.animate({top: offsetTop}, 25);
		}
	});
}

// Load projects from GitHub
$(document).ready(function() {
	var projects = $('#projects .container'),
		blacklist = [
			'Ninja-vs-Samurai', 'NO-HTML5', 'Giant-Bomb-Recommengine', 'rpgdicebag', 'LoremIpsumCodaPlugin'
		];
	$.get('https://api.github.com/users/michaelenger/repos?sort=updated', function(data) {
		var count = 0,
			row = '';
		for (var i = 0; i < data.length; i++) {
			if (blacklist.indexOf(data[i].name) != -1 || data[i].fork || !data[i].description) continue;

			if (count != 0 && count % 4 == 0) {
				projects.append('<div class="row">' + row + '</div>');
				row = '';
			}

			row += '<div class="col-sm-3">\
				<h3><a href="' + data[i].html_url + '">' + data[i].name + '</a> <small>' + data[i].language + '</small></h3>\
				<p>' + data[i].description + '</p>\
				</div>';

			count++;
		}

		if (row.length) {
			projects.append('<div class="row">' + row + '</div>');
		}

		$('#projects-loading').remove();
	});
});

})(jQuery.noConflict());
