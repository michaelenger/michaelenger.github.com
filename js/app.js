var domain = 'thelonelycoder.com',
	banana = document.getElementById('banana'),
	cmd = 'otliam';
// Overkill? Yes. Spam? No.
banana.innerHTML = '<a href="' + cmd.split('').reverse().join('') + ':mike' + '&#64;' + domain + '"><img src="img/banana.png" alt=""></a>';
