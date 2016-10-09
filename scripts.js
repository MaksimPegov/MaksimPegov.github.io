var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
if (!touchsupport){ // browser doesn't support touch
    document.documentElement.className += "non-touch";
}

function clickDown(){
	var acktive = $('.selected-row');
	var next = acktive.next('tr');
	if (next.length !== 0) {	
		next.addClass('selected-row');
		acktive.removeClass('selected-row');
	}else{
		console.log('No way down')
	}

}
function clickUp(){
	var acktive = $('.selected-row');
	var prev = acktive.prev('tr');
	if (prev.length !== 0) {
		acktive.removeClass('selected-row');
		prev.addClass('selected-row');
	}else{
		console.log('No way up');
	}
}
