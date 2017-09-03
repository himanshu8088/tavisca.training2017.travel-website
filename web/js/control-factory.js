$(document).ready(RenderRooomTags(1));

$('.children1').change(function()
	{
		var noOfChild=$('.children1').find(":selected").text();	
		$(".inner-children").remove();
		for(var i=0;i<noOfChild;i++){			
			$(".g6").append(
				"<div class='form-group inner-children'><label for='child'>Child "+(i+1)+" Age</label><select class='form-control child'></select></div>"				
			);
			LoadChildData(".child");
		}
});

$('.room').change(function(){
	var noOfRoom=$('.room').find(":selected").text();	
	RenderRooomTags(noOfRoom);	
});

function RenderRooomTags(noOfRoom){		
		$(".r3").remove();
		$(".r1").append("<div class='control r3'></div>");
		for(var i=1;i<=noOfRoom;i++){
			
			$(".r3").append("<label style='margin-left:10px; margin-top:20px;'>Room "+i+"</label>");
			$(".r3").append("<div class='control x"+i+"'></div>");

			$(".x"+i).append("<div class='form-group'>");
			$(".x"+i).append("<label for='adults'>Adults(18+)</label>");
			$(".x"+i).append("<select style='width:60px; margin-left:10px;' class='form-control adult2'></select>");
			$(".x"+i).append("</div>");	

			$(".x"+i).append("<div class='form-group'>");
			$(".x"+i).append("<label margin-right:5px; for='children'>Children(0-17)</label>");
			$(".x"+i).append("<select style='width:60px; margin-left:10px;' class='form-control children2' id='children'></select>");
			$(".x"+i).append("</div>");
			$(".x"+i).css({"display": "flex"});	

			$(".r3").append("<div class='control c"+i+"'></div>");									    	
		}
		$(".r3").css({"display": "flex", "flex-direction": "column"});	
}

