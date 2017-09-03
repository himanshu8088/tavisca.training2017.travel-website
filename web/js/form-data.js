var flightForm={
	from:"",
	to:"",
	doj:"",
	dor:"",
	adult:"",
	childern:""
}

var hotelForm={
	destination:"",
	dateOfCheckin:"",
	dateOfCheckout:"",
	room:"",
	adult:"",
	childern:""
}

$("#flight-search").click(function(){
	flightForm.from=$("#from").val();
	flightForm.to=$("#to").val();
	flightForm.doj=$("#doj").val();
	flightForm.dor=$("#dor").val();
	flightForm.adult=$('.adult1').find(":selected").text();
	flightForm.children=$('.children1').find(":selected").text();

	alert("Flight Search Detail:\nFrom:"+flightForm.from
		+"\nTo:"+flightForm.to
		+"\nDate of journey:"+flightForm.doj
		+"\nDate of Return:"+flightForm.dor
		+"\nNumber of Adults:"+flightForm.adult
		+"\nNumber of Children:"+flightForm.children
		);
});

$("#hotel-search").click(function(){
	hotelForm.from=$("#to1").val();
	hotelForm.dateOfCheckin=$("#to").val();
	hotelForm.dateOfCheckout=$("#doj").val();
	hotelForm.room=$('.room').find(":selected").text();
	hotelForm.adult=$('.adult2').find(":selected").text();
	hotelForm.children=$('.children2').find(":selected").text();

	alert("Hotel Search Detail:\nDestination:"+hotelForm.from
		+"\nDate of CheckIn:"+hotelForm.dateOfCheckin
		+"\nDate of CheckIn:"+hotelForm.dateOfCheckout
		+"\nNumber of Room:"+hotelForm.room
		+"\nNumber of Adults:"+hotelForm.adult
		+"\nNumber of Children:"+hotelForm.children
		);
});







