(function($) {
"use strict";

// Overkill? Yes. Spam? No.
var houseonthehill = 'thelonelycoder.com',
	banana = document.getElementById('banana'),
	cmd = 'otliam';
banana.innerHTML = '<a href="' + cmd.split('').reverse().join('') + ':mike' + '&#64;' + houseonthehill + '">mike' + '&#64;' + houseonthehill + '</a>';

// Load projects from GitHub
$(document).ready(function() {
	var projects = $('#github-projects .container'),
		blacklist = [
			'NO-HTML5', 'Giant-Bomb-Recommengine', 'spotify-flickrstream', 'rpgdicebag'
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
