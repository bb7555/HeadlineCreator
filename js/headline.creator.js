// Headline Creator v0.1
// Free to use and distribute

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
	var story_objects = $(".story");
	var story_yes = $("#story_yes");
	var story_no = $("#story_no");
    var laminated_yes = $("#laminated_yes");
	
	//set order-dependant variables
    var numberHeadlines = 2;
	var orderNumber =
	{
		1 : "200-001",
		2 : "200-990",
		3 : "201-001",
		4 : "210-001",
		5 : "211-001",
		6 : "300-001",
		7 : "300-990",
		8 : "301-001",
		9 : "310-001",
		10 : "311-001",
		11 : "300-995",	
	};
    var currentOrder = orderNumber[1];
    var specialOrder = "";
	
    //set order-dependant methods
    
    //This method handles add-ons to the order at the end
    function changeOrderSimple(currentOrder, specialOrder, numberHeadlines)
    {
        if(specialOrder === "laminated"){
            if(numberHeadlines===2)
            {
                currentOrder = orderNumber[3];
            }else{
                currentOrder = orderNumber[8];
            }
        }else if(specialOrder === "framed"){
            if(numberHeadlines===2)
            {
                currentOrder = orderNumber[4];
            }else{
                currentOrder = orderNumber[9];
            }
        }else if(specialOrder === "framedExec"){
            if(numberHeadlines===2)
            {
                currentOrder = orderNumber[5];
            }else{
                currentOrder = orderNumber[10];
            }
        }
        updateOrder(currentOrder);
        return currentOrder;
        
    }
    
    function changeOrderComplex(currentOrder, specialOrder, numberHeadlines)
    {
        if(specialOrder==="")
        {
            if(numberHeadlines===2)
            {
              currentOrder = orderNumber[1]; 
            }else{
                currentOrder = orderNumber[6];    
            }
            updateOrder(currentOrder);
            return currentOrder;
        }else{
           changeOrderSimple(currentOrder, specialOrder, numberHeadlines); 
        }
    }
    
    function updateOrder(currentOrder)
    {
        $("input[name='Product_Code']").val(currentOrder);
    }
    
    function deleteOrder(currentOrder, specialOrder, numberHeadlines)
    {
        specialOrder = "";
        changeOrderComplex(currentOrder, specialOrder, numberHeadlines);
        return specialOrder;
    }
    
    
	
	///FIRST, get rid of the loader screen
	setTimeout(loading.fadeOut("slow"), 3000);
	
	/////Toggle Number of Headlines
	headline_3.click(function(){
		headline3.fadeIn("slow");
		numberHeadlines = 3;
		changeOrderComplex(currentOrder, specialOrder, numberHeadlines);
	});
	headline_2.click(function(){
		headline3.fadeOut("slow");
		numberHeadlines = 2;
        changeOrderComplex(currentOrder, specialOrder, numberHeadlines);
	});		
	
	//////Banner UI Event Listeners//////////
	banner_yes.click(function(){
		newspaper_banner.fadeIn("slow");
	});
	banner_no.click(function(){
		newspaper_banner.fadeOut("slow");
	});	
	
	/////Story Creator UI Event Listeners/////
	story_yes.click(function(){
	story_objects.fadeIn("slow");
	});
	story_no.click(function(){
	story_objects.fadeOut("slow");	
	});
	
	//Allow Transitions Beteen the two steps
	continue_to_step_2.click(function(){	
		part1.fadeOut(function(){part2.fadeIn();});
		});
		
	continue_to_step_1.click(function(){
		part2.fadeOut(function(){part1.fadeIn();});
		});	
   
   //Event Listeners For Special Orders
   laminated_yes.click(function(){
       specialOrder = "laminated";
       changeOrderSimple(currentOrder, specialOrder, numberHeadlines);
   });
  
};})( jQuery );