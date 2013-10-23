(function() {
	"use strict";

	var app = {

		/**
		 * Look at this stuff. Isn't it neat? Wouldn't you say my collection's complete?
		 */
		antiSpamMagicMissile: function() {
			// Overkill? Yes. Spam? No.
			var houseonthehill = 'thelonelycoder.com',
				banana = document.getElementById('banana'),
				cmd = 'otliam';
			banana.innerHTML = '<a href="' + cmd.split('').reverse().join('') + ':mike' + '&#64;' + houseonthehill + '">mike' + '&#64;' + houseonthehill + '</a>';
		},

		/**
		 * Add events and initialize the app.
		 */
		init: function() {
			app.loadGitHubProjects();
			app.antiSpamMagicMissile();
		},

		/**
		 * Load GitHub projects.
		 */
		loadGitHubProjects: function() {
			var section = document.getElementById('other-projects'),
				projects = document.getElementById('github-projects'),
				request = new XMLHttpRequest(),
				blacklist = [
					'NO-HTML5', 'Giant-Bomb-Recommengine', 'spotify-flickrstream', 'rpgdicebag'
				];

			request.addEventListener('load', function() {
				if (this.readyState == 4 && this.status == 200 ) {
					var data = JSON.parse(this.responseText),
						html = '',
						count = 0;

					html = '<div class="row">';
					for (var i = 0; i < data.length; i++) {
						if (blacklist.indexOf(data[i].name) != -1 || data[i].fork || !data[i].description) continue;

						if (count != 0 && count % 4 == 0) {
							html += '</div><div class="row">';
						}
						count++;

						html += '<div class="col-sm-3 project">\
							<h3><a href="' + data[i].html_url + '">' + data[i].name + '</a> <small>' + data[i].language + '</small></h3>\
							<p>' + data[i].description + '</p>\
						</div>';
					}
					html += '</div>';

					if (html.length) {
						projects.innerHTML = html;
					}

					document.getElementById('github-loading').remove();
				}
			}, false);
			request.addEventListener("error", function() {
				console.error(this.responseText);
				section.remove(); // let's just pretend this never happened, shall we?
			}, false);
			request.open('GET', 'https://api.github.com/users/michaelenger/repos?sort=updated', true);
			request.send();
		}

	};

	window.onload = function() {
		app.init(); // let's do this!
	}
})();
