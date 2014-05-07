$(document).ready(function(){

	"use strict";

	

	if ($().waypoint){
		$('.statCount').waypoint(function() {
			var counter = $(this).find('.statCountNumber'),
				count = parseInt(counter.text(), 10),
				prefix = '',
				suffix = '',
				number = 0;

			if ($(this).data('count')) {
				count = parseInt($(this).data('count'), 10);
			}
			if ($(this).data('prefix')) {
				prefix = $(this).data('prefix');
			}
			if ($(this).data('suffix')) {
				suffix = $(this).data('suffix');
			}

			var	step = Math.ceil(count/25),
				handler = setInterval(function() {
					number += step;
					counter.text(prefix+number+suffix);
					if (number >= count) {
						counter.text(prefix+count+suffix);
						window.clearInterval(handler);
					}
				}, 40);


		}, {offset:'85%', triggerOnce: true});
	}

	

	
});