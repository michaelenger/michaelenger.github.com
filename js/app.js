(function() {
	"use strict";

	var app = {

		/**
		 * Projects that shouldn't be considered when building project list.
		 *
		 * @var array
		 */
		projectBlacklist: [
			'NO-HTML5', 'Giant-Bomb-Recommengine', 'spotify-flickrstream'
		],

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
			// Events
			if (document.addEventListener) {
				document.getElementById('more-link').addEventListener('click', function(e) {
					e.preventDefault();
					app.moreClicked();
				});
			}

			// Do stuff
			app.loadGitHubProjects();
			app.antiSpamMagicMissile();
		},

		/**
		 * Load GitHub projects.
		 */
		loadGitHubProjects: function() {
			var request = new XMLHttpRequest();

			request.addEventListener('load', function() {
				if (this.readyState == 4 && this.status == 200 ) {
					var data = JSON.parse(this.responseText);
					if (data.length) {
						app.updateGitHubProjects(data);
					}

					document.getElementById('github-loading').remove();
				}
			}, false);
			request.addEventListener("error", function() {
				console.error(this.responseText);
				document.getElementById('other-projects').remove(); // let's just pretend this never happened, shall we?
			}, false);
			request.open('GET', 'https://api.github.com/users/michaelenger/repos?sort=updated', true);
			request.send();
		},

		/**
		 * Fill the GitHub projets section with info from retrieved data.
		 *
		 * @param object data Data for the projects
		 */
		updateGitHubProjects: function(data) {
			var projects = document.getElementById('github-projects'),
				html = '',
				count = 0;

			html = '<div class="row">';
			for (var i = 0; i < data.length; i++) {
				if (app.projectBlacklist.indexOf(data[i].name) != -1 || data[i].fork || !data[i].description) continue;

				if (count != 0 && count % 4 == 0) {
					html += '<div class="clearfix visible-md visible-lg"></div>';
				} else if (count != 0 && count % 3 == 0) {
					html += '<div class="clearfix visible-sm"></div>';
				}
				count++;

				html += '<div class="col-md-3 col-sm-4 project">\
					<h3><a href="' + (data[i].homepage ? data[i].homepage : data[i].html_url) + '">' + data[i].name.replace(/-/g, ' ') + '</a> <small>' + data[i].language + '</small></h3>\
					<p>' + data[i].description + '</p>\
				</div>';
			}
			html += '</div>';

			if (html.length) {
				projects.innerHTML = html;
			}
		},

		/**
		 * "More" button was clicked.
		 */
		moreClicked: function() {
			var projects = document.getElementById('projects');
			app.scrollWindow(projects.offsetTop, 350);
		},

		/**
		 * Scroll the window to target position.
		 */
		scrollWindow: function(target, duration) {

			var start = window.scrollY,
				diff = target - start,
				time = Date.now();

			function animationStep() {
				var now = Date.now(),
					dt = now - time,
					step = (window.scrollY - start) / diff,
					position = dt > duration ? target : Math.easeOutQuad(dt, start, diff, duration);

				window.scroll(window.scrollX, position);

				// We're done here
				if (position != target) {
					window.requestAnimationFrame(animationStep);
				}
			}

			window.requestAnimationFrame(animationStep);
		}

	};

	// Easing algorithm thanks to: https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
	Math.easeOutQuad = function (t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	};

	window.onload = function() {
		app.init(); // let's do this!
	}
})();
