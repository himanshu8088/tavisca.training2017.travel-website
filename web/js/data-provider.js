$(document).ready(Load());


function Load(){
	LoadAdultCountList();
	LoadChildCountList();
	LoadRoomCountList();	
}

function LoadAdultCountList(){	
	for(var i=1; i<7;i++){
		$(".adult1").append("<option>"+i+"</option>");
		$(".adult2").append("<option>"+i+"</option>");
	}
}

function LoadChildCountList(){	
	for(var i=0; i<7;i++){
		$(".children1").append("<option>"+i+"</option>");
		$(".children2").append("<option>"+i+"</option>");
	}
}

function LoadRoomCountList(){	
	for(var i=1; i<9;i++){
		$(".room").append("<option>"+i+"</option>");
	}
	$(".room").append("<option>"+i+"+</option>");
}

function LoadChildData(ele_class){
	$(ele_class).append("<option>Age</option>");
	$(ele_class).append("<option>Under 1</option>");
	for(var i=1; i<18;i++){
		$(ele_class).append("<option>"+i+"</option>");
	}
}

