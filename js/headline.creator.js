// Headline Creator v0.1
//Free to use and distribute

(function( $ ) {
  $.fn.HeadlineCreator = function() {
	
	
	//set selector objects  
	var part1 = $(".part-1");
	var part2 = $(".part-2");
	var continue_to_step_2 = $("#continue_to_step_2");
	var continue_to_step_1 = $("#continue_to_step_1");
	var loading = $(".loading");
	var headline_2 = $("#headline_2");
	var headline_3 = $("#headline_3");
	var headline3 = $(".headline3");
	var banner_yes = $("#banner_yes");
	var banner_no = $("#banner_no");
	var newspaper_banner = $("#newspaper_banner");
	
	///FIRST, get rid of the loader screen
	setTimeout(loading.fadeOut("slow"), 3000);
	
	/////Toggle Number of Headlines
	headline_3.click(function(){
		headline3.fadeIn("slow");
		});
	headline_2.click(function(){
		headline3.fadeOut("slow");
		});	
	
	
	//////Banner UI Event Listeners//////////
	banner_yes.click(function(){
	
		newspaper_banner.fadeIn("slow");
	});
	banner_no.click(function(){
		newspaper_banner.fadeOut("slow");
	});
	
	//Allow Transitions Beteen the two steps
	continue_to_step_2.click(function(){
		
		part1.fadeOut(function(){part2.fadeIn();});
		
		})
		
	continue_to_step_1.click(function(){
		
		part2.fadeOut(function(){part1.fadeIn();});
		
		})	
   

  
};})( jQuery );