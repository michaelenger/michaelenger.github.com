
function moveLeft() {
	var current = $('.current-slide');
	var prev = current.prev();
	if (prev.length != 0) {
		current.removeClass('current-slide');
		prev.addClass('current-slide');
	}
}

function moveRight() {
	var current = $('.current-slide');
	var next = current.next();
	if (next.length != 0) {
		current.removeClass('current-slide');
		next.addClass('current-slide');
	}
}

var lua = {
	brown: /(".*?")/g,
	blue: /([^\w](if)|(then)|(elseif)|(else)|(end)|(local)|(function))/ig,
	grey: /(--.+)$/gm,
	red: /(\d+)/g
};

function highlight(text) {
	var reg;
	for (var color in lua) {
		text = text.replace(lua[color], '<span style="color:' + color + '">$1</span>');
	}
	return text;
}

jQuery( function ($) {

// Highlight syntax
$('pre').each(function(i) {
	var html = $(this).html();
	$(this).html(highlight(html));
});

// Handle keypresses
$(document).keypress(function(event){
	
	if ( event.keyCode == 37 ) { // left
		event.preventDefault();
		moveLeft();
	} else if( event.keyCode == 39 || event.which == 32 ) { // right
		event.preventDefault();
		moveRight();
	}
	
});

});