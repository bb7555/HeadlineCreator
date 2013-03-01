 $(function() {
    /////////jQuery UI objects BEGIN/////////////
	
	//set up our selector objects
	var radioGroup = $(".headline-create-radio");
	var buttons = $( "a, button" );
	var submitBtn = $("input[type=submit]");
	
	
	//instantiate our objects with jQuery UI methods
	radioGroup.buttonset();
	
	buttons
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
	
	submitBtn.button();
	
	/////////jQuery UI objects END/////////////
	
	////////Headline Creator BEGIN/////////////
	var headlineCreator = $(".headline-creator");
	headlineCreator.HeadlineCreator();
	////////Headline Creator END/////////////
	
  });
