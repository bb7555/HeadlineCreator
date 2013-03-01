// Headline Creator v0.1
//Free to use and distribute

(function( $ ) {
  $.fn.HeadlineCreator = function() {
	  
	  var part1 = $(".part-1");
	var part2 = $(".part-2");
	var continue_to_step_2 = $("#continue_to_step_2");
	var continue_to_step_1 = $("#continue_to_step_1");
	
	continue_to_step_2.click(function(){
		
		part1.fadeOut();
		part2.fadeIn();
		})
		
	continue_to_step_1.click(function(){
		
		part2.fadeOut();
		part1.fadeIn();
		})	
   

  
};})( jQuery );