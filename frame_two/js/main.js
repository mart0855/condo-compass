// Main Java script page 

//Condo Compass Framework study

//This JQuery function should make it so that on page 4 you can click the paragraph tags below the column example and have them hide


// ** What it should do now is when you click the button "#hideThese" it should make all the paragraphs with the class of ".disapear" hide

// *** note this function uses "pagecreate" ,"*The page you want to add functionality to (The id of that page)" in order to work. (not document ready)
$(document).on("pagecreate", "#p4", function(){
	$("#hideThese").on("click", function(){
		$("p.disapear").hide();
	});
});
//The above works just fine

//This function should toggle the visibility of the p tags with the class 'toggleTest'
$(document).on("pagecreate", "#p4", function(){
	$("#togglePs").on("click", function(){
		$("p.toggleTest").toggle();
	});
});


//The above is working


// this swipeleft function (replaces a click or mouseenter) will track swipes to the left
$(document).on("pagecreate", "#p4", function(){
	$("#swipeLeft").on("swipeleft",function(){
		$("span.swipeLeft").text("You swiped Left!");
	});
});

//The above is working

$(document).on("pagecreate", "#p4", function(){
	$("#swipeRight").on("swiperight",function(){
		$("span.swipeRight").text("You swiped Right!");
	});
});

// This is suppose to dynamically change as the  user swipes this box left and right.
$(document).on("pagecreate", "#p4", function(){
	$("#swipeBoth").on("swipeleft", function(){
		$("span.swipeBoth").text("You swiped Left!");
	});
	$("#swipeBoth").on("swiperight", function(){
		$("span.swipeBoth").text("You swiped Right!");
	});
});
