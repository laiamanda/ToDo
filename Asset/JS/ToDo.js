//Check off Specific ToDos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});

//Click on X to delete
$("ul").on("click", "span", function(event){
	//the parent should remove the li
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	}); 
	event.stopPropagation(); //Stop other events from bubbling
});

//Add a new li from the input Text
$("input[type='text']").keypress(function(event){
	// when key hits enter("13")
	if(event.which ===13){
		//gets the new Todo text from input
		var todoText = ($(this).val());
		//clear the input text
		$(this).val("");
		//create a new li and add to the ul
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-tasks").click(function(){
	$("input[type='text']").fadeToggle();
});