(function() {
	"use strict";

	var app = {

		/**
		 * Look at this stuff. Isn't it neat? Wouldn't you say my collection's complete?
		 */
		antiSpamMagicMissile: function() {
			// Overkill? Yes. Spam? No.
			var houseonthehill = 'gmail.com',
				banana = document.getElementById('banana'),
				cmd = 'otliam',
				classOf2004 = 'liame';
			banana.innerHTML = '<a class="' +
				classOf2004.split('').reverse().join('') + '" href="' +
				cmd.split('').reverse().join('') + ':meutvikling' + '&#64;' +
				houseonthehill + '">meutvikling' + '&#64;' + houseonthehill +
				'</a>';
		},

		/**
		 * Add events and initialize the app.
		 */
		init: function() {
			// Do stuff
			app.antiSpamMagicMissile();
		}

	};

	window.onload = function() {
		app.init(); // let's do this!
	}
})();
