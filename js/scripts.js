// one page scroll
			$(function() {
				cbpFixedScrollLayout.init();
			});
	

	// grid
			$(function() {
				Grid.init();
			});
	
// parallax
$(document).ready(function(){
   // cache the window object
   $window = $(window);
 
   $('section[data-type="background"]').each(function(){
     // declare the variable to affect the defined data-type
     var $scroll = $(this);
                     
      $(window).scroll(function() {
        // HTML5 proves useful for helping with creating JS functions!
        // also, negative value because we're scrolling upwards                             
        var yPos = -($window.scrollTop() / $scroll.data('speed')); 
         
        // background position
        var coords = '50% '+ yPos + 'px';
 
        // move the background
        $scroll.css({ backgroundPosition: coords });    
      }); // end window scroll
   });  // end section function
}); // close out script



<!-- menu responsive -->
$(function() {
var pull = $('#pull');
menu = $('nav ul');
menuHeight = menu.height();
$(pull).on('click', function(e) {
e.preventDefault();
menu.slideToggle();
});
$(window).resize(function(){
var w = $(window).width();
if(w > 320 && menu.is(':hidden')) {
menu.removeAttr('style');
}
});
});
$(function() {
var pull = $('.pullClose');
menu = $('nav ul.menuSmall');
menuHeight = menu.height();
$(pull).on('click', function(e) {
e.preventDefault();
menu.slideToggle();
});
$(window).resize(function(){
var w = $(window).width();
if(w > 320 && menu.is(':hidden')) {
menu.removeAttr('style');
}
});
});
