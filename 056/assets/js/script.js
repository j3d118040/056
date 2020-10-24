//carousel time inteval
$('.carousel').carousel({
	interval:3000
})

// Scroll Down & Scroll Up			
function scrollDown(){
	var x = $('.section-1').offset().top;
	window.scrollTo(0,x);
}
function goUp(){
	window.scrollTo(0,0);
}

// Animation When Scroll Down			
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
			(element_top_position <= window_bottom_position)) {
			$element.addClass('in-view');
		} 
	});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');