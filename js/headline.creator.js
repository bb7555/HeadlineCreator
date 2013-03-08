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
	var laminated_no = $("#laminated_no");
	var framed_yes = $("#framed_yes");
	var framed_no = $("#framed_no");
	var attribute_code = $("input[name^='AttributeCode']");
	var attribute_value = $("[name^='AttributeValue']");
	var frameSelect = $(".frameSelect"); 
	var frameInput = $("[value='FrameColor']");
	var finalAttribute = $("#finalAttribute");
	var attrCount = $("input[name='AttributeCount']");
	var banner = $(".banner");
	var headline_display1 = $(".hl1");
	var headline_input1 = $("#hl1");
	var headline_display2 = $(".hl2");
	var headline_input2 = $("#hl2");
	var headline_display3 = $(".hl3");
	var headline_input3 = $("#hl3");
	var headline_display1_text = $(".hl1text");
	var headline_display2_text = $(".hl2text");
	var headline_display3_text = $(".hl3text");
	var headline_container = $(".headline-container");
	var customStory = $(".customStory");
	var story = $(".storyText");
	var remainingChars = $(".remainingChars");
	var specialCharsInput = $("#specialChars");
	var specialChars = $(".specialChars"); 
	
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
				attrCount.val(9);
				finalAttribute.attr("name", "AttributeCode[9]").val("2HeadlineExtraFrame");
				frameAddUpdate();
				
            }else{
                currentOrder = orderNumber[9];
				attrCount.val(10);
				finalAttribute.attr("name", "AttributeCode[10]").val("3HeadlineExtraFrame");
				frameAddUpdate();
            }
		}else if(specialOrder === ""){
			
			if(numberHeadlines===2)
            {
              currentOrder = orderNumber[1]; 
            }else{
                currentOrder = orderNumber[6];    
            }
			
		}
        updateOrder(currentOrder);
        return currentOrder;
        
    }
    
    function changeOrderComplex(currentOrder, specialOrder, numberHeadlines)
    {
        //update our form for headlines changes
		if(numberHeadlines===2)
        {
             attribute_code.each(function(){
				 $(this).val("2headline");
				  
				 });
				 $("input[name='AttributeCount']").val(8);
				  $("[name='AttributeValue[3]']").attr("name","AttributeValue[]");
				 attribute_value.each(function(){
					numberVal = parseInt($(this).attr("name").charAt(15));
						if(numberVal>2){
							newNumberVal = numberVal-1;
							
							newAttr = "AttributeValue["+newNumberVal+"]";
							$(this).attr("name", newAttr);
						}
					});
				
				 
        }else{
              attribute_code.each(function(){
				 $(this).val("3headline");
				 
				 });
				 $("input[name='AttributeCount']").val(9);
				 
				 attribute_value.each(function(){
					numberVal = parseInt($(this).attr("name").charAt(15));
						if(numberVal>2){
							newNumberVal = numberVal+1;
							
							newAttr = "AttributeValue["+newNumberVal+"]";
							$(this).attr("name", newAttr);
						}else if(numberVal==="]")
						{
							$(this).attr("name", "AttributeValue[3]")
						} 
					});
					
				 
				 $("[name='AttributeValue[]']").attr("name","AttributeValue[3]")
        }
		
		//set the product code if number of headlines changes
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
	
	function frameAddUpdate()
	{
		attribute_value.each(function(){
					numberVal = parseInt($(this).attr("name").charAt(15));
						if(numberVal>0){
							newNumberVal = numberVal+1;
							
							newAttr = "AttributeValue["+newNumberVal+"]";
							$(this).attr("name", newAttr);
						}
					});
		frameInput.attr("name","AttributeValue[1]");	
	}
	
	function frameRemoveUpdate()
	{
		
		if(numberHeadlines === 2)
		{
		attrCount.val(8);
		finalAttribute.attr("name", "").val("");	
		}else{
		attrCount.val(9);
		finalAttribute.attr("name", "").val("");
		}
		frameInput.attr("name","");
		attribute_value.each(function(){
					numberVal = parseInt($(this).attr("name").charAt(15));
						if(numberVal>1){
							newNumberVal = numberVal-1;
							
							newAttr = "AttributeValue["+newNumberVal+"]";
							$(this).attr("name", newAttr);
						}
					});
			
	}
	
	function threeHeadlineDisplay()
	{
		
		headline_display3.removeClass("hidden");
		headline_display2.css({ "font-size" : "24px", "height" : "33px"});
	}
    
    function removeThreeHeadlineDisplay()
	{
		
		headline_display3.addClass("hidden");
		headline_display2.css({ "font-size" : "48px", "height" : "66px"});
	}
	
	///FIRST, get rid of the loader screen
	setTimeout(loading.fadeOut("slow"), 3000);
	
	/////Toggle Number of Headlines
	headline_3.click(function(){
		headline3.fadeIn("slow");
		numberHeadlines = 3;
		customStory.css("margin-top", "50px");
		changeOrderComplex(currentOrder, specialOrder, numberHeadlines);
		threeHeadlineDisplay();
	});
	headline_2.click(function(){
		headline3.fadeOut("slow");
		numberHeadlines = 2;
		customStory.css("margin-top", "70px");
        changeOrderComplex(currentOrder, specialOrder, numberHeadlines);
		removeThreeHeadlineDisplay();
	});	
	
	/////Update Headlines
	headline_input1.focusin(function(){
		if(headline_input1.val()==="")
		{
			headline_display1_text.text("");
		}
	});
	
	headline_input1.keyup(function(){
		newHL1 = headline_input1.val();
		
		//remove the hearts or stars if the line is getting too big
		if(newHL1.length > 18){
			$(".hl1 > .specialChars").text("");
		}
		
		headline_display1_text.text(newHL1);
		});	
		
	headline_input1.focusout(function(){
		if(headline_input1.val()==="")
		{
			headline_display1_text.text("Place Your Personal");
		}
	});
	
	headline_input2.focusin(function(){
		if(headline_input2.val()==="")
		{
			headline_display2_text.text("");
		}
	});
	
	headline_input2.keyup(function(){
		newHL2 = headline_input2.val();
		
		//remove the hearts or stars if the line is getting too big
		if(numberHeadlines === 2 && newHL2.length > 18){
			$(".hl2 > .specialChars").text("");
		}
		
		headline_display2_text.text(newHL2);
		});	
		
	headline_input2.focusout(function(){
		if(headline_input2.val()==="")
		{
			headline_display2_text.text("Headlines Here!!");
		}
	});
	
	headline_input3.focusin(function(){
		if(headline_input3.val()==="")
		{
			headline_display3_text.text("");
		}
	});
	
	headline_input3.keyup(function(){
		newHL3 = headline_input3.val();
		headline_display3_text.text(newHL3);
		});	
		
	headline_input3.focusout(function(){
		if(headline_input3.val()==="")
		{
			headline_display3_text.text("Third Row");
		}
	});
	
	//////Banner UI Event Listeners//////////
	banner_yes.click(function(){
		newspaper_banner.fadeIn("slow");
		banner.text("");
		
	});
	banner_no.click(function(){
		newspaper_banner.fadeOut("slow");
		banner.text("The Daily Globe");
		newspaper_banner.val("");
	});	
	newspaper_banner.keyup(function(){
		newBanner = newspaper_banner.val();
		banner.text(newBanner);
		});
	////HEART and STARS UI
	specialCharsInput.change(function(){
		var currentChar = specialCharsInput.val();
			if(currentChar === "NoExtras")
			{
				specialChars.each(function(){
					$(this).text("");
					$(this).removeClass("red");
					});
			}else{
				if(currentChar === "RedHearts" || currentChar === "RedStars")
				{
				specialChars.each(function(){
					
					$(this).addClass("red");
					
					});
				}else{
					specialChars.each(function(){
					
					$(this).removeClass("red");
					});
				}
				
				if(currentChar === "RedHearts" || currentChar === "BlackHearts")
				{
					
				specialChars.each(function(index){
					
						//this places the hearts or stars if the line is not too big
						if((index < 2 && headline_display1_text.text().length <= 18) ||(numberHeadlines === 2 && index > 1 && index < 4 && headline_display2_text.text().length <= 18) || (numberHeadlines === 3  && index > 1 && index < 4) || (index > 3)){
							$(this).html("&hearts;").text();
						}
					});
				}else{
					specialChars.each(function(index){
					
						//this places the hearts or stars if the line is not too big
						if((index < 2 && headline_display1_text.text().length <= 18) ||(numberHeadlines === 2 && index > 1 && index < 4 && headline_display2_text.text().length <= 18) || (numberHeadlines === 3  && index > 1 && index < 4) || (index > 3)){
							$(this).html("&star;").text();
						}
					});
				}
					
			}
		});
		
	
	/////Story Creator UI Event Listeners/////
	story_yes.click(function(){
	story_objects.fadeIn("slow");
	headline_container.css("background-position", "0px -505px");
	customStory.removeClass("hidden");
	});
	story_no.click(function(){
	story_objects.fadeOut("slow");
	headline_container.css("background-position", "0px 0px");
	customStory.addClass("hidden");	
	});
	
	story.keyup(function(){
		newStory = story.val();
		customStory.text(newStory);
		});
		
	//this uses easy counter plug-in	
	story.jqEasyCounter({
    'maxChars': 475,
    'maxCharsWarning': 450,
    'msgFontSize': '12px',
    'msgFontColor': '#000',
    'msgFontFamily': 'Arial',
    'msgTextAlign': 'center',
    'msgWarningColor': '#F00',
    'msgAppendMethod': 'insertAfter'              
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
	   $("label[for='framed_no']").addClass("ui-state-active");
	   $("label[for='framed_yes']").removeClass("ui-state-active");
	   frameSelect.fadeOut("slow");
       changeOrderSimple(currentOrder, specialOrder, numberHeadlines);
   });
   
   laminated_no.click(function(){
       specialOrder = "";
       changeOrderSimple(currentOrder, specialOrder, numberHeadlines);
   });
   
   framed_yes.click(function(){
	   
	   var answer = confirm("Selecting the framed option will lock your current current number of healines selection. You MUST SELECT NO if you change your mind about the number of headlines you want and wish to change that option.")
	if (answer){
		specialOrder = "framed";
	   frameSelect.fadeIn("slow");
	   $("label[for='laminated_no']").addClass("ui-state-active");
	   $("label[for='laminated_yes']").removeClass("ui-state-active");
	   
       changeOrderSimple(currentOrder, specialOrder, numberHeadlines);
	}
	else{
		$("label[for='framed_no']").addClass("ui-state-active");
	   $("label[for='framed_yes']").removeClass("ui-state-active");
	}
	   
       
   });
   
   framed_no.click(function(){
       specialOrder = "";
	   frameSelect.fadeOut("slow");
       changeOrderSimple(currentOrder, specialOrder, numberHeadlines);
   });
   
  
};})( jQuery );