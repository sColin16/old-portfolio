$(document).on("scroll", function(){
	if(scrollY>100){
		$("#complete-logo").addClass("shrink");
	} else {
		$("#complete-logo").removeClass("shrink");
	}
})