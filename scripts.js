var photos = ["photo/maksim1000px.jpg","photo/anton1000px.jpg","photo/mama1000px.jpg"];
var photo = $("#img")[0];
var index = 0;

var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
$(document).ready(function() {
	photo.src = photos[index]
	if (!touchsupport){ // browser doesn't support touch
	    document.documentElement.className += "non-touch";
		console.log('Ставлю ноутач...')
	}
});


function clickDown(){
	var acktive = $('.selected-row');
	var next = acktive.next('tr');
	if (next.length !== 0) {	
		next.addClass('selected-row');
		acktive.removeClass('selected-row');
		//debugger;
		index = next.attr("data-index");
		photo.src = photos[index]
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
		index = prev.attr("data-index");
		photo.src = photos[index]

	}else{
		console.log('No way up');
	}

}
